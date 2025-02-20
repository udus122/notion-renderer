import { RichText } from "../RichText/RichText";

import { BlockList } from "./BlockList";

import type { NumberedListItemBlock } from "@udus/notion-types";

export const NumberedListItem: NumberedListItemBlock = ({ block }) => {
  return (
    <li
      id={block.id}
      className={`notion-block notion-numbered-list-item notion-color-${block.numbered_list_item.color}`}
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
