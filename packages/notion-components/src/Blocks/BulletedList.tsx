import { BulletedListItem } from "./BulletedListItem";

import type { BulletedListBlock } from "@udus/notion-types";

export const BulletedList: BulletedListBlock = ({ block }) => {
  return (
    <ul className="notion-block notion-bulleted-list">
      {block.bulleted_list.items.map((item) => {
        return <BulletedListItem key={item.id} block={item} />;
      })}
    </ul>
  );
};
