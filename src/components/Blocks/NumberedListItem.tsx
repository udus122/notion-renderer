import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./index.js";

import type { BlockObject } from "./Block.js";
import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockComponentProps } from "src/types/utils.js";

export type NumberedListItemBlockObject =
  NumberedListItemBlockObjectResponse & {
    numbered_list_item: { children?: Array<BlockObject> };
  };

export const NumberedListItem: React.FC<
  BlockComponentProps<NumberedListItemBlockObject>
> = ({ block, mapper }) => {
  return (
    <li
      id={block.id}
      className={`notion_numbered_list_item notion_color_${block.numbered_list_item.color}`}
    >
      <RichTexts richTexts={block.numbered_list_item.rich_text} />
      <div>
        {block.numbered_list_item.children && (
          <Blocks blocks={block.numbered_list_item.children} mapper={mapper} />
        )}
      </div>
    </li>
  );
};
