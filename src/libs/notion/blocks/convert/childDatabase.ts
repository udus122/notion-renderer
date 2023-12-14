import { isFullDatabase } from "@notionhq/client";

import { retrieveDatabase } from "../../database/retrieve.js";

import type { ChildDatabaseBlockObject } from "../../../../types/notion/blocks/childDatabase.js";
import type { ChildDatabaseBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertChildDatabaseResponseToBlock = async (
  block: ChildDatabaseBlockObjectResponse,
): Promise<ChildDatabaseBlockObject> => {
  const { ok, data } = await retrieveDatabase({ database_id: block.id });
  if (!ok) {
    return block satisfies ChildDatabaseBlockObject;
  }

  if (!isFullDatabase(data)) {
    return block satisfies ChildDatabaseBlockObject;
  }

  return {
    ...block,
    child_database: {
      ...block.child_database,
      database: data,
    },
  } satisfies ChildDatabaseBlockObject;
};
