import {
  BlockComponentProps,
  TableCellComponentBlockObject,
  TableComponentBlockObject,
  TableRowComponentBlockObject,
} from "@/types";

import RichTexts from "../RichTexts/RichTexts";

type Props = BlockComponentProps<TableComponentBlockObject>;

const Table: React.FC<Props> = ({ block }) => {
  return (
    <table id={block.id} className="notion_block notion_table">
      <tbody>
        {block.children &&
          block.children.results.map((child, index) => {
            if (block.table.has_row_header && index === 0) {
              return <TableRowRowHeader table_row={child} />;
            }
            if (block.table.has_column_header) {
              return <TableRowColumnHeader table_row={child} />;
            }
            return <TableRowNoHeader table_row={child} />;
          })}
      </tbody>
    </table>
  );
};

export default Table;

const TableRowRowHeader: React.FC<{
  table_row: TableRowComponentBlockObject;
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
  table_row: TableRowComponentBlockObject;
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
  table_row: TableRowComponentBlockObject;
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
  cell: TableCellComponentBlockObject;
}> = ({ cell }) => {
  return (
    <th>
      <RichTexts richTexts={cell} />
    </th>
  );
};

const Td: React.FC<{
  cell: TableCellComponentBlockObject;
}> = ({ cell }) => {
  return (
    <td>
      <RichTexts richTexts={cell} />
    </td>
  );
};
