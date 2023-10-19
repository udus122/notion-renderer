import { NumberedListItem } from "./NumberedListItem.js";

import type {
  BlockComponentProps,
  NumberedListBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<NumberedListBlockObjectComponent>;

export const NumberedList: React.FC<Props> = ({ block, blocks, mapper }) => {
  return (
    <ol className="notion_numbered_list">
      {block.numbered_list.items.map((item) => {
        return (
          <NumberedListItem
            key={item.id}
            block={item}
            blocks={blocks}
            mapper={mapper}
          ></NumberedListItem>
        );
      })}
    </ol>
  );
};
