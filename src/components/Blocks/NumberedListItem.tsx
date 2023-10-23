import { RichText } from "../RichText/RichText.js";

import { Blocks } from "./Blocks.js";

import type { BlockProps } from "./Block.js";
import type { NumberedListItemBlockObject } from "@udus/notion-libs";

type Props = BlockProps<NumberedListItemBlockObject>;

export const NumberedListItem: React.FC<Props> = ({ block }) => {
  return (
    <li
      id={block.id}
      className={`notion_numbered_list_item notion_color_${block.numbered_list_item.color}`}
    >
      <RichText richText={block.numbered_list_item.rich_text} />
      <div>
        {block.numbered_list_item.children && (
          <Blocks blocks={block.numbered_list_item.children} />
        )}
      </div>
    </li>
  );
};
