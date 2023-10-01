import {
  BlockComponentProps,
  TableBlockObjectResponseWithChildren,
} from "@/types";

import Blocks from "./Blocks";

type Props = BlockComponentProps<TableBlockObjectResponseWithChildren>;

const Table: React.FC<Props> = ({ block }) => {
  const has_column_header = block.table.has_column_header;
  const has_row_header = block.table.has_row_header;
  return (
    <table id={block.id} className="notion_table">
      {block.children && (
        <tbody>
          <Blocks blocks={block.children} />
        </tbody>
      )}
    </table>
  );
};

export default Table;
