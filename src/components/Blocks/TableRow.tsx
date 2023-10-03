import { BlockComponentProps, TableRowComponentBlockObject } from "@/types";

import RichTexts from "../RichTexts/RichTexts";

type Props = BlockComponentProps<TableRowComponentBlockObject>;

const TableRow: React.FC<Props> = ({ block }) => {
  return (
    <tr className="notion_table_header">
      {block.table_row.cells.map((cell) => (
        <td>
          <RichTexts richTexts={cell} />
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
