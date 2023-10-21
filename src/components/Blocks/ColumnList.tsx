import { Blocks } from "./Blocks.js";

import type { ColumnListBlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<ColumnListBlockObject>;

export const ColumnList: React.FC<Props> = ({ block, mapper }) => {
  return (
    <div id={block.id} className="notion_column_list">
      {block.column_list.columns &&
        block.column_list.columns.map(
          (column) =>
            column.column.children && (
              <div key={column.id} className="notion_column">
                <Blocks blocks={column.column.children} mapper={mapper} />
              </div>
            )
        )}
    </div>
  );
};
