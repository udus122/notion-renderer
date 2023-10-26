import { NumberedListItem } from "./NumberedListItem.js";

import type { NumberedListBlock } from "../../types/notion/blocks/numberedList.js";

export const NumberedList: NumberedListBlock = ({ block, blocks }) => {
  return (
    <ol className="notion_numbered_list">
      {block.numbered_list.items.map((item) => {
        return <NumberedListItem key={item.id} block={item} blocks={blocks} />;
      })}
    </ol>
  );
};
