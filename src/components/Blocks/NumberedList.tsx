import { NumberedListItem } from "./NumberedListItem.js";

import type {
  BlockComponentProps,
  NumberedListBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<NumberedListBlockObjectComponent>;

export const NumberedList: React.FC<Props> = ({ block }) => {
  return (
    <ol className="notion_numbered_list">
      {block.numbered_list.items.map((item) => {
        return <NumberedListItem key={item.id} block={item}></NumberedListItem>;
      })}
    </ol>
  );
};
