import { AnnotationItemProvider } from "./Mapper/Annotation.js";
import { BlockProvider } from "./Mapper/Block.js";
import { LinkProvider } from "./Mapper/Link.js";
import { PropertyItemProvider } from "./Mapper/Property.js";
import { RichTextItemProvider } from "./Mapper/RichText.js";

import type { LinkProps } from "../types/notion/common/link.js";
import type { AnnotationItemMapper } from "../types/notion/mapper/annotationItem.js";
import type { BlockMapper } from "../types/notion/mapper/block.js";
import type { PropertyItemMapper } from "../types/notion/mapper/propertyItem.js";
import type { RichTextItemMapper } from "../types/notion/mapper/richTextItem.js";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  blockMapper?: BlockMapper;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
  LinkComponent?: React.ComponentType<LinkProps>;
  propertyMapper?: PropertyItemMapper;
  theme?: "light" | "dark";
};

export const RenderConfig: FC<Props> = ({
  children,
  theme,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  propertyMapper,
  LinkComponent,
}) => {
  return (
    <div className={`notion-root ${theme ? `notion-${theme}` : ""}`}>
      <BlockProvider mapper={blockMapper}>
        <RichTextItemProvider mapper={richTextItemMapper}>
          <AnnotationItemProvider mapper={annotationMapper}>
            <LinkProvider link={LinkComponent}>
              <PropertyItemProvider mapper={propertyMapper}>
                {children}
              </PropertyItemProvider>
            </LinkProvider>
          </AnnotationItemProvider>
        </RichTextItemProvider>
      </BlockProvider>
    </div>
  );
};
