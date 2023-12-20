import { Icon } from "../Common/Icon.js";
import { useMapper } from "../hooks.js";

import type { ChildDatabaseBlock } from "../../types/notion/block/childDatabase.js";

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
