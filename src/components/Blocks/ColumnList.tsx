import { Blocks } from "./Blocks.js";

import type { ColumnListBlockObject } from "../../libs/notion/blocks/columnList.js";
import type { BlockProps } from "../../types/utils.js";

type Props = BlockProps<ColumnListBlockObject>;

export const ColumnList: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_column_list">
      {block.column_list.columns &&
        block.column_list.columns.map(
          (column) =>
            column.column.children && (
              <div key={column.id} className="notion_column">
                <Blocks blocks={column.column.children} />
              </div>
            )
        )}
    </div>
  );
};
