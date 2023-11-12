import { NumberedListItem } from "./NumberedListItem.js";

import type { NumberedListBlock } from "../../types/notion/blocks/numberedList.js";

export const NumberedList: NumberedListBlock = ({ block }) => {
  return (
    <ol className="notion-block notion-numbered-list">
      {block.numbered_list.items.map((item) => {
        return <NumberedListItem key={item.id} block={item} />;
      })}
    </ol>
  );
};
