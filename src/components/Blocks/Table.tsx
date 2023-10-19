import {
  BlockComponentProps,
  TableBlockObjectComponent,
  TableCellBlockObjectComponent,
  TableRowBlockObjectComponent,
} from "../../types/components.js";
import { RichTexts } from "../RichTexts/RichTexts.js";

type Props = BlockComponentProps<TableBlockObjectComponent>;

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
  table_row: TableRowBlockObjectComponent;
}> = ({ table_row }) => {
  return (
    <tr id={table_row.id} className="notion_table_row">
      {table_row.table_row.cells.map((cell) => (
        <Th cell={cell} />
      ))}
    </tr>
  );
};

const TableRowColumnHeader: React.FC<{
  table_row: TableRowBlockObjectComponent;
}> = ({ table_row }) => {
  return (
    <tr id={table_row.id} className="notion_table_row">
      {table_row.table_row.cells.map((cell, index) => {
        return index === 0 ? <Th cell={cell} /> : <Td cell={cell} />;
      })}
    </tr>
  );
};

const TableRowNoHeader: React.FC<{
  table_row: TableRowBlockObjectComponent;
}> = ({ table_row }) => {
  return (
    <tr id={table_row.id} className="notion_table_row">
      {table_row.table_row.cells.map((cell) => (
        <Td cell={cell} />
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
