import { BulletedListItem } from "./BulletedListItem.js";

import type { BulletedListBlock } from "../../types/notion/block/bulletedList.js";

export const BulletedList: BulletedListBlock = ({ block }) => {
  return (
    <ul className="notion-block notion-bulleted-list">
      {block.bulleted_list.items.map((item) => {
        return <BulletedListItem key={item.id} block={item} />;
      })}
    </ul>
  );
};
