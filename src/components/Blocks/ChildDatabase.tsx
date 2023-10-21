import { Icon } from "./Icon.js";

import type {
  ChildDatabaseBlockObjectResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockComponentProps } from "src/types/utils.js";

export type ChildDatabaseBlockObject = ChildDatabaseBlockObjectResponse & {
  child_database: {
    database?: DatabaseObjectResponse | null;
  };
};

type Props = BlockComponentProps<ChildDatabaseBlockObject>;

export const ChildDatabase: React.FC<Props> = ({ block }) => {
  return (
    <a className="notion_link" href={`/${block.id}`}>
      <div id={block.id} className="notion_child_database">
        <span className="notion_child_database_icon">
          {<Icon icon={block.child_database.database?.icon ?? null} />}
        </span>
        <span className="notion_child_database_title">
          {block.child_database.title || "Unknown database"}
        </span>
      </div>
    </a>
  );
};
