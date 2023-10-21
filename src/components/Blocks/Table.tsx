import { RichText } from "../RichText/RichText.js";

import type { LinkProps } from "../Link.js";
import type {
  TableBlockObjectResponse,
  TableRowBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type TableBlockObject = TableBlockObjectResponse & {
  table: { table_rows?: Array<TableRowBlockObject> };
};
export type TableRowBlockObject = TableRowBlockObjectResponse;

export type TableCellBlockObjectComponent =
  TableRowBlockObject["table_row"]["cells"][number];

type Props = BlockProps<TableBlockObject>;

export const Table: React.FC<Props> = ({
  block,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <table id={block.id} className="notion_table">
      <tbody>
        {block.table.table_rows &&
          block.table.table_rows.map((table_row, index) => {
            if (block.table.has_row_header && index === 0) {
              return (
                <TableRowRowHeader
                  key={table_row.id}
                  table_row={table_row}
                  richTextItemMapper={richTextItemMapper}
                  annotationMapper={annotationMapper}
                  LinkComponent={LinkComponent}
                />
              );
            }
            if (block.table.has_column_header) {
              return (
                <TableRowColumnHeader
                  key={table_row.id}
                  table_row={table_row}
                  richTextItemMapper={richTextItemMapper}
                  annotationMapper={annotationMapper}
                  LinkComponent={LinkComponent}
                />
              );
            }
            return (
              <TableRowNoHeader
                key={table_row.id}
                table_row={table_row}
                richTextItemMapper={richTextItemMapper}
                annotationMapper={annotationMapper}
                LinkComponent={LinkComponent}
              />
            );
          })}
      </tbody>
    </table>
  );
};

const TableRowRowHeader: React.FC<{
  table_row: TableRowBlockObject;
  richTextItemMapper: object;
  annotationMapper: object;
  LinkComponent: React.ComponentType<LinkProps>;
}> = ({ table_row, richTextItemMapper, annotationMapper, LinkComponent }) => {
  return (
    <tr id={table_row.id} className="notion_table_row">
      {table_row.table_row.cells.map((cell) => (
        <Th
          key={table_row.id}
          cell={cell}
          richTextItemMapper={richTextItemMapper}
          annotationMapper={annotationMapper}
          LinkComponent={LinkComponent}
        />
      ))}
    </tr>
  );
};

const TableRowColumnHeader: React.FC<{
  table_row: TableRowBlockObject;
  richTextItemMapper: object;
  annotationMapper: object;
  LinkComponent: React.ComponentType<LinkProps>;
}> = ({ table_row, richTextItemMapper, annotationMapper, LinkComponent }) => {
  return (
    <tr id={table_row.id} className="notion_table_row">
      {table_row.table_row.cells.map((cell, index) => {
        return index === 0 ? (
          <Th
            key={table_row.id}
            cell={cell}
            richTextItemMapper={richTextItemMapper}
            annotationMapper={annotationMapper}
            LinkComponent={LinkComponent}
          />
        ) : (
          <Td
            key={table_row.id}
            cell={cell}
            richTextItemMapper={richTextItemMapper}
            annotationMapper={annotationMapper}
            LinkComponent={LinkComponent}
          />
        );
      })}
    </tr>
  );
};

const TableRowNoHeader: React.FC<{
  table_row: TableRowBlockObject;
  richTextItemMapper: object;
  annotationMapper: object;
  LinkComponent: React.ComponentType<LinkProps>;
}> = ({ table_row, richTextItemMapper, annotationMapper, LinkComponent }) => {
  return (
    <tr id={table_row.id} className="notion_table_row">
      {table_row.table_row.cells.map((cell) => (
        <Td
          key={table_row.id}
          cell={cell}
          richTextItemMapper={richTextItemMapper}
          annotationMapper={annotationMapper}
          LinkComponent={LinkComponent}
        />
      ))}
    </tr>
  );
};

const Th: React.FC<{
  cell: TableCellBlockObjectComponent;
  richTextItemMapper: object;
  annotationMapper: object;
  LinkComponent: React.ComponentType<LinkProps>;
}> = ({ cell, richTextItemMapper, annotationMapper, LinkComponent }) => {
  return (
    <th>
      <RichText
        richTextItems={cell}
        richTextItemMapper={richTextItemMapper}
        annotationMapper={annotationMapper}
        LinkComponent={LinkComponent}
      />
    </th>
  );
};

const Td: React.FC<{
  cell: TableCellBlockObjectComponent;
  richTextItemMapper: object;
  annotationMapper: object;
  LinkComponent: React.ComponentType<LinkProps>;
}> = ({ cell, richTextItemMapper, annotationMapper, LinkComponent }) => {
  return (
    <td>
      <RichText
        richTextItems={cell}
        richTextItemMapper={richTextItemMapper}
        annotationMapper={annotationMapper}
        LinkComponent={LinkComponent}
      />
    </td>
  );
};
