import { BlockList } from "./BlockList";

import type { ColumnListBlock } from "@udus/notion-types";

export const ColumnList: ColumnListBlock = ({ block }) => {
  return (
    <div id={block.id} className="notion-block notion-column-list">
      {block.column_list.columns?.map(
          (column) =>
            column.column.children && (
              <div key={column.id} className="notion-column">
                <BlockList blocks={column.column.children} />
              </div>
            ),
        )}
    </div>
  );
};
