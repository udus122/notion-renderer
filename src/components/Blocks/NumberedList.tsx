import {
  NumberedListItem,
  type NumberedListItemBlockObject,
} from "./NumberedListItem.js";

import type { BlockProps } from "src/types/utils.js";

export type NumberedListBlockObject = {
  id: string;
  numbered_list: { items: Array<NumberedListItemBlockObject> };
  type: "numbered_list";
};

type Props = BlockProps<NumberedListBlockObject>;

export const NumberedList: React.FC<Props> = ({
  block,
  blocks,
  richTextMapper: mapper,
}) => {
  return (
    <ol className="notion_numbered_list">
      {block.numbered_list.items.map((item) => {
        return (
          <NumberedListItem
            key={item.id}
            block={item}
            blocks={blocks}
            richTextMapper={mapper}
          ></NumberedListItem>
        );
      })}
    </ol>
  );
};
