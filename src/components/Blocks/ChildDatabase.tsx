import { useMapper } from "../mapper.js";

import { Icon } from "./Icon.js";

import type { BlockProps, ChildDatabaseBlockObject } from "@udus/notion-libs";

type Props = BlockProps<ChildDatabaseBlockObject>;

export const ChildDatabase: React.FC<Props> = ({ block }) => {
  const { Link } = useMapper();
  return (
    <div id={block.id} className="notion_child_database">
      <Link href={`/${block.id}`}>
        <span className="notion_child_database_icon">
          {<Icon icon={block.child_database.database?.icon ?? null} />}
        </span>
        <span className="notion_child_database_title">
          {block.child_database.title || "Unknown database"}
        </span>
      </Link>
    </div>
  );
};
