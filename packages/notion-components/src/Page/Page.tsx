import {
  selectProperties,
  splitTitleAndOtherProperties,
} from "../../../../src/utils/index";
import { BlockList } from "../Blocks/BlockList";
import { Cover } from "../Common/Cover";
import { Icon } from "../Common/Icon";
import { Title } from "../Common/Title";
import { Properties } from "../Property/Properties";

import type { BlockBlockObject } from "@udus/notion-types";
import type { PageObject } from "@udus/notion-types";
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
