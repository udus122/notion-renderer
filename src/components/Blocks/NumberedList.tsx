import { NumberedListItem } from "./NumberedListItem.js";

import type { BlockProps, NumberedListBlockObject } from "@udus/notion-libs";

type Props = BlockProps<NumberedListBlockObject>;

export const NumberedList: React.FC<Props> = ({ block, blocks }) => {
  return (
    <ol className="notion_numbered_list">
      {block.numbered_list.items.map((item) => {
        return <NumberedListItem key={item.id} block={item} blocks={blocks} />;
      })}
    </ol>
  );
};
