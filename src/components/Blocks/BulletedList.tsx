import {
  BulletedListItem,
  type BulletedListItemBlockObject,
} from "./BulletedListItem.js";

import type { BlockProps } from "src/types/utils.js";

export type BulletedListBlockObject = {
  id: string;
  type: "bulleted_list";
  bulleted_list: {
    items: Array<BulletedListItemBlockObject>;
  };
};

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
