import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";

import type { NumberedListItemBlock } from "../../types/notion/blocks/numberedListItem.js";

export const NumberedListItem: NumberedListItemBlock = ({ block }) => {
  return (
    <li
      id={block.id}
      className={`notion_numbered_list_item notion_color_${block.numbered_list_item.color}`}
    >
      <RichText richText={block.numbered_list_item.rich_text} />
      <div>
        {block.numbered_list_item.children && (
          <BlockList blocks={block.numbered_list_item.children} />
        )}
      </div>
    </li>
  );
};
