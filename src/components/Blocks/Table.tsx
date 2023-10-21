import { RichTexts } from "../RichTexts/index.js";

import type {
  TableBlockObjectResponse,
  TableRowBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockComponentProps } from "src/types/utils.js";

export type TableBlockObject = TableBlockObjectResponse & {
  table: { table_rows?: Array<TableRowBlockObject> };
};
export type TableRowBlockObject = TableRowBlockObjectResponse;

export type TableCellBlockObjectComponent =
  TableRowBlockObject["table_row"]["cells"][number];

type Props = BlockComponentProps<TableBlockObject>;

export const Table: React.FC<Props> = ({ block }) => {
  return (
    <table id={block.id} className="notion_table">
      <tbody>
        {block.table.table_rows &&
          block.table.table_rows.map((table_row, index) => {
            if (block.table.has_row_header && index === 0) {
              return (
                <TableRowRowHeader key={table_row.id} table_row={table_row} />
              );
            }
            if (block.table.has_column_header) {
              return (
                <TableRowColumnHeader
                  key={table_row.id}
                  table_row={table_row}
                />
              );
            }
            return (
              <TableRowNoHeader key={table_row.id} table_row={table_row} />
            );
          })}
      </tbody>
    </table>
  );
};

const TableRowRowHeader: React.FC<{
  table_row: TableRowBlockObject;
}> = ({ table_row }) => {
  return (
    <tr id={table_row.id} className="notion_table_row">
      {table_row.table_row.cells.map((cell) => (
        <Th key={table_row.id} cell={cell} />
      ))}
    </tr>
  );
};

const TableRowColumnHeader: React.FC<{
  table_row: TableRowBlockObject;
}> = ({ table_row }) => {
  return (
    <tr id={table_row.id} className="notion_table_row">
      {table_row.table_row.cells.map((cell, index) => {
        return index === 0 ? (
          <Th key={table_row.id} cell={cell} />
        ) : (
          <Td key={table_row.id} cell={cell} />
        );
      })}
    </tr>
  );
};

const TableRowNoHeader: React.FC<{
  table_row: TableRowBlockObject;
}> = ({ table_row }) => {
  return (
    <tr id={table_row.id} className="notion_table_row">
      {table_row.table_row.cells.map((cell) => (
        <Td key={table_row.id} cell={cell} />
      ))}
    </tr>
  );
};

const Th: React.FC<{
  cell: TableCellBlockObjectComponent;
}> = ({ cell }) => {
  return (
    <th>
      <RichTexts richTexts={cell} />
    </th>
  );
};

const Td: React.FC<{
  cell: TableCellBlockObjectComponent;
}> = ({ cell }) => {
  return (
    <td>
      <RichTexts richTexts={cell} />
    </td>
  );
};
