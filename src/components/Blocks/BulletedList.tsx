import { BulletedListItem } from "./BulletedListItem.js";

import type { BulletedListBlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

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
