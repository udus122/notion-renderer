import { BulletedListItem } from "./BulletedListItem.js";

import type { BulletedListBlockObject } from "../../libs/notion/blocks/bulletedListItem.js";
import type { BlockProps } from "src/types/utils.js";

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
