import NumberedListItem from "./NumberedListItem";

import type {
  BlockComponentProps,
  NumberedListComponentBlockObject,
} from "@/types";

type Props = BlockComponentProps<NumberedListComponentBlockObject>;

const NumberedList: React.FC<Props> = ({ block }) => {
  return (
    <ol className="notion_block notion_numbered_list">
      {block.items.map((item) => {
        return <NumberedListItem key={item.id} block={item}></NumberedListItem>;
      })}
    </ol>
  );
};

export default NumberedList;
