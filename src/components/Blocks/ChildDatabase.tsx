import Icon from "./Icon";

import type {
  BlockComponentProps,
  ChildDatabaseBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<ChildDatabaseBlockObjectComponent>;

const ChildDatabase: React.FC<Props> = ({ block }) => {
  return (
    <a href={`/${block.id}`}>
      <div id={block.id} className="notion_child_database">
        <span className="notion_child_database_icon">
          {<Icon icon={block.child_database.database?.icon ?? null} />}
        </span>
        <span className="notion_child_database_title">
          {block.child_database.title}
        </span>
      </div>
    </a>
  );
};

export default ChildDatabase;
