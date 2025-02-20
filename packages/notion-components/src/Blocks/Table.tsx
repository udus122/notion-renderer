import { RichText } from "../RichText/RichText";

import type { TableBlock } from "@udus/notion-types";
import type { TableCellBlockObjectComponent } from "@udus/notion-types";
import type { TableRowBlockObject } from "@udus/notion-types";

export const Table: TableBlock = ({ block }) => {
  return (
    <table id={block.id} className="notion-block notion-table-block">
      <tbody>
        {block.table.table_rows?.map((table_row, index) => {
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
    <tr id={table_row.id} className="notion-table-block-row">
      {table_row.table_row.cells.map((cell, index) => (
        <Th
          key={`${index}${cell.map((c) => c.plain_text).join("")}`}
          cell={cell}
        />
      ))}
    </tr>
  );
};

const TableRowColumnHeader: React.FC<{
  table_row: TableRowBlockObject;
}> = ({ table_row }) => {
  return (
    <tr id={table_row.id} className="notion-table-block-row">
      {table_row.table_row.cells.map((cell, index) => {
        return index === 0 ? (
          <Th
            key={`${index}${cell.map((c) => c.plain_text).join("")}`}
            cell={cell}
          />
        ) : (
          <Td
            key={`${index}${cell.map((c) => c.plain_text).join("")}`}
            cell={cell}
          />
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
      {table_row.table_row.cells.map((cell, index) => (
        <Td
          key={`${index}${cell.map((c) => c.plain_text).join("")}`}
          cell={cell}
        />
      ))}
    </tr>
  );
};

const Th: React.FC<{
  cell: TableCellBlockObjectComponent;
}> = ({ cell }) => {
  return (
    <th>
      <RichText richText={cell} />
    </th>
  );
};

const Td: React.FC<{
  cell: TableCellBlockObjectComponent;
}> = ({ cell }) => {
  return (
    <td>
      <RichText richText={cell} />
    </td>
  );
};
