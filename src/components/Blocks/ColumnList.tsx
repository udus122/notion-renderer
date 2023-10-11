import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  ColumnListBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<ColumnListBlockObjectComponent>;

const ColumnList: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_column_list">
      {block.column_list.columns &&
        block.column_list.columns.map(
          (column) =>
            column.column.children && (
              <div className="notion_column">
                <Blocks blocks={column.column.children} />
              </div>
            )
        )}
    </div>
  );
};

export default ColumnList;
