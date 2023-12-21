import { selectProperties, splitTitleAndOtherProperties } from "../../utils.js";
import { BlockList } from "../Blocks/BlockList.js";
import { Cover } from "../Common/Cover.js";
import { Icon } from "../Common/Icon.js";
import { Title } from "../Common/Title.js";
import { AnnotationItemProvider } from "../Mapper/Annotation.js";
import { BlockProvider } from "../Mapper/Block.js";
import { LinkProvider } from "../Mapper/Link.js";
import { PropertyItemProvider } from "../Mapper/Property.js";
import { RichTextItemProvider } from "../Mapper/RichText.js";
import { Properties } from "../Property/Properties.js";

import type { BlockBlockObject } from "../../types/notion/block/block.js";
import type { LinkProps } from "../../types/notion/common/link.js";
import type { AnnotationItemMapper } from "../../types/notion/mapper/annotationItem.js";
import type { BlockMapper } from "../../types/notion/mapper/block.js";
import type { PropertyItemMapper } from "../../types/notion/mapper/propertyItem.js";
import type { RichTextItemMapper } from "../../types/notion/mapper/richTextItem.js";
import type { PageObject } from "../../types/notion/page.js";
import type { FC } from "react";

type Props = {
  page: PageObject;
  blocks?: Array<BlockBlockObject>;
  displayProperties?: Array<string>;
  hideProperties?: boolean;
  hideCover?: boolean;
  hideIcon?: boolean;
  hideTitle?: boolean;
  propertyMapper?: PropertyItemMapper;
  blockMapper?: BlockMapper;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
  LinkComponent?: React.ComponentType<LinkProps>;
  theme?: "light" | "dark";
};

export const Page: FC<Props> = ({
  page,
  blocks,
  displayProperties,
  hideCover = false,
  hideIcon = false,
  hideTitle = false,
  hideProperties = false,
  propertyMapper,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
  theme = "light",
}) => {
  const { title, other } = splitTitleAndOtherProperties(page.properties);

  const properties = displayProperties
    ? selectProperties(other, displayProperties)
    : other;
  return (
    <div
      id={page.id}
      className={`notion-page ${theme ? `notion-${theme}` : ""}`}
    >
      {!hideCover && (
        <div className="notion-page-cover">
          <Cover cover={page.cover} />
        </div>
      )}

      {!hideIcon && (
        <div className="notion-page-icon">
          <Icon icon={page.icon} />
        </div>
      )}
      {!hideTitle && (
        <div className="notion-page-title">
          <Title title={title?.title ?? []} />
        </div>
      )}
      {!hideProperties && (
        <div className="notion-page-properties">
          <PropertyItemProvider mapper={propertyMapper}>
            <Properties properties={properties} />
          </PropertyItemProvider>
        </div>
      )}
      {blocks && (
        <BlockProvider mapper={blockMapper}>
          <RichTextItemProvider mapper={richTextItemMapper}>
            <AnnotationItemProvider mapper={annotationMapper}>
              <LinkProvider link={LinkComponent}>
                <BlockList blocks={blocks} />
              </LinkProvider>
            </AnnotationItemProvider>
          </RichTextItemProvider>
        </BlockProvider>
      )}
    </div>
  );
};
