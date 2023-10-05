import BulletedListItem from "./BulletedListItem";

import type {
  BlockComponentProps,
  BulletedListBlockObjectComponent,
} from "@/types";

type Props = BlockComponentProps<BulletedListBlockObjectComponent>;

const BulletedList: React.FC<Props> = ({ block }) => {
  return (
    <ul className="notion_block notion_bulleted_list">
      {block.items.map((item) => {
        return <BulletedListItem key={item.id} block={item}></BulletedListItem>;
      })}
    </ul>
  );
};

export default BulletedList;
