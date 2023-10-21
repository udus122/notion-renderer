import { Blocks } from "./Blocks.js";

import type { BlockObject } from "../index.js";
import type {
  ColumnBlockObjectResponse,
  ColumnListBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { Overwrite, BlockProps } from "src/types/utils.js";

export type ColumnListBlockObject = Overwrite<
  ColumnListBlockObjectResponse,
  {
    column_list: {
      columns?: Array<ColumnBlockObject>;
    };
  }
>;

export type ColumnBlockObject = Overwrite<
  ColumnBlockObjectResponse,
  {
    column: { children?: Array<BlockObject> };
  }
>;

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
