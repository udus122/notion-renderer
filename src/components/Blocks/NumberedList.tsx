import { NumberedListItem } from "./NumberedListItem.js";

import type { NumberedListBlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<NumberedListBlockObject>;

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
