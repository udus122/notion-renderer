import { selectProperties, splitTitleAndOtherProperties } from "../../utils.js";
import { BlockList } from "../Blocks/BlockList.js";
import { Cover } from "../Common/Cover.js";
import { Icon } from "../Common/Icon.js";
import { Title } from "../Common/Title.js";
import { Properties } from "../Property/Properties.js";

import type { BlockBlockObject } from "../../types/notion/block/block.js";
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
};

export const Page: FC<Props> = ({
  page,
  blocks,
  displayProperties,
  hideCover = false,
  hideIcon = false,
  hideTitle = false,
  hideProperties = false,
}) => {
  const { title, other } = splitTitleAndOtherProperties(page.properties);

  const properties = displayProperties
    ? selectProperties(other, displayProperties)
    : other;
  return (
    <div id={page.id} className="notion-page">
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
          <Properties properties={properties} />
        </div>
      )}
      {blocks && (
        <>
          <hr className="notion-page-divider" />
          <BlockList blocks={blocks} />
        </>
      )}
    </div>
  );
};
