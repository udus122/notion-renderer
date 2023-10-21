import {
  BulletedListItem,
  type BulletedListItemBlockObject,
} from "./BulletedListItem.js";

import type { BlockComponentProps } from "src/types/utils.js";

export type BulletedListBlockObject = {
  id: string;
  type: "bulleted_list";
  bulleted_list: {
    items: Array<BulletedListItemBlockObject>;
  };
};

type Props = BlockComponentProps<BulletedListBlockObject>;

export const BulletedList: React.FC<Props> = ({ block, blocks, mapper }) => {
  return (
    <ul className="notion_bulleted_list">
      {block.bulleted_list.items.map((item) => {
        return (
          <BulletedListItem
            key={item.id}
            block={item}
            blocks={blocks}
            mapper={mapper}
          />
        );
      })}
    </ul>
  );
};
