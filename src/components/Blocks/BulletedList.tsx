import { BulletedListItem } from "./BulletedListItem.js";

import type { BlockProps } from "./Block.js";
import type { BulletedListBlockObject } from "../../types/notion.js";

type Props = BlockProps<BulletedListBlockObject>;

export const BulletedList: React.FC<Props> = ({ block, blocks }) => {
  return (
    <ul className="notion_bulleted_list">
      {block.bulleted_list.items.map((item) => {
        return <BulletedListItem key={item.id} block={item} blocks={blocks} />;
      })}
    </ul>
  );
};
