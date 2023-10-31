import { BlockList } from "./BlockList.js";

import type { ColumnListBlock } from "../../types/notion/blocks/columnList.js";

export const ColumnList: ColumnListBlock = ({ block }) => {
  return (
    <div id={block.id} className="notion-block notion-column-list">
      {block.column_list.columns &&
        block.column_list.columns.map(
          (column) =>
            column.column.children && (
              <div key={column.id} className="notion-column">
                <BlockList blocks={column.column.children} />
              </div>
            )
        )}
    </div>
  );
};
