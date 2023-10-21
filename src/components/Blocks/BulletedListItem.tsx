import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./index.js";

import type { BlockObject } from "./Block.js";
import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type React from "react";
import type { BlockProps } from "src/types/utils.js";

export type BulletedListItemBlockObject =
  BulletedListItemBlockObjectResponse & {
    bulleted_list_item: {
      children?: Array<BlockObject>;
    };
  };

type Props = BlockProps<BulletedListItemBlockObject>;

export const BulletedListItem: React.FC<Props> = ({
  block,
  richTextMapper: mapper,
}) => {
  return (
    <li
      id={block.id}
      className={`notion_bulleted_list_item notion_color_${block.bulleted_list_item.color}`}
    >
      <RichTexts richTexts={block.bulleted_list_item.rich_text} />
      <div>
        {block.bulleted_list_item.children && (
          <Blocks blocks={block.bulleted_list_item.children} mapper={mapper} />
        )}
      </div>
    </li>
  );
};
