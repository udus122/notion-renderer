import { BlockList } from "./BlockList.js";

import type { BlockProps } from "./Block.js";
import type { ColumnListBlockObject } from "@udus/notion-libs";

type Props = BlockProps<ColumnListBlockObject>;

export const ColumnList: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_column_list">
      {block.column_list.columns &&
        block.column_list.columns.map(
          (column) =>
            column.column.children && (
              <div key={column.id} className="notion_column">
                <BlockList blocks={column.column.children} />
              </div>
            )
        )}
    </div>
  );
};
