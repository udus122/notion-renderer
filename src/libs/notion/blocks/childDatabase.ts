import { fetchDatabase } from "../databases.js";

import type {
  ChildDatabaseBlockObjectResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export type ChildDatabaseBlockObject = ChildDatabaseBlockObjectResponse & {
  child_database: {
    database?: DatabaseObjectResponse | null;
  };
};

export const convertChildDatabaseResponseToBlock = async (
  block: ChildDatabaseBlockObjectResponse
) => {
  const childDatabase = await fetchDatabase(block.id);
  if (childDatabase) {
    return {
      ...block,
      child_database: {
        ...block.child_database,
        database: childDatabase ?? null,
      },
    } satisfies ChildDatabaseBlockObject;
  }
  return {
    ...block,
    child_database: {
      ...block.child_database,
    },
  } satisfies ChildDatabaseBlockObject;
};
