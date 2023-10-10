import NumberedListItem from "./NumberedListItem";

import type {
  BlockComponentProps,
  NumberedListBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<NumberedListBlockObjectComponent>;

const NumberedList: React.FC<Props> = ({ block }) => {
  return (
    <ol className="notion_numbered_list">
      {block.numbered_list.items.map((item) => {
        return <NumberedListItem key={item.id} block={item}></NumberedListItem>;
      })}
    </ol>
  );
};

export default NumberedList;
