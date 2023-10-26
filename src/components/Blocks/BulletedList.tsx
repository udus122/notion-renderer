import { BulletedListItem } from "./BulletedListItem.js";

import type { BulletedListBlock } from "../../types/notion/blocks/bulletedList.js";

export const BulletedList: BulletedListBlock = ({ block, blocks }) => {
  return (
    <ul className="notion_bulleted_list">
      {block.bulleted_list.items.map((item) => {
        return <BulletedListItem key={item.id} block={item} blocks={blocks} />;
      })}
    </ul>
  );
};
