import { Icon } from "../Common/Icon";
import { useMapper } from "../hooks";

import type { ChildDatabaseBlock } from "@udus/notion-types";

export const ChildDatabase: ChildDatabaseBlock = ({ block }) => {
  const { Link } = useMapper();
  return (
    <div id={block.id} className="notion-block notion-child-database">
      <Link prefix="/" link={block.id}>
        <span className="notion-child-database-icon">
          {<Icon icon={block.child_database.database?.icon ?? null} />}
        </span>
        <span className="notion-child-database-title">
          {block.child_database.title || "Unknown database"}
        </span>
      </Link>
    </div>
  );
};
