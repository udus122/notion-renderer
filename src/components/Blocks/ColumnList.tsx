import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  ColumnListBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<ColumnListBlockObjectComponent>;

const ColumnList: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_column_list">
      {block.columns &&
        block.columns.map((column) => (
          <div className="notion_column">
            <Blocks blocks={column} />
          </div>
        ))}
    </div>
  );
};

export default ColumnList;
