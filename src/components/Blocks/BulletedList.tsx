import BulletedListItem from "./BulletedListItem";

import type {
  BlockComponentProps,
  BulletedListBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<BulletedListBlockObjectComponent>;

const BulletedList: React.FC<Props> = ({ block }) => {
  return (
    <ul className="notion_bulleted_list">
      {block.bulleted_list.items.map((item) => {
        return <BulletedListItem key={item.id} block={item} />;
      })}
    </ul>
  );
};

export default BulletedList;
