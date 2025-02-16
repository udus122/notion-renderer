import { Client, isFullDatabase } from "@notionhq/client";

import { retrieveDatabase } from "../../database/retrieve.js";

import type { ChildDatabaseBlockObject } from "@udus/notion-types";
import type { ChildDatabaseBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertChildDatabaseResponseToBlock = async (
  block: ChildDatabaseBlockObjectResponse,
  client: Client,
): Promise<ChildDatabaseBlockObject> => {
  const { ok, data } = await retrieveDatabase(client, {
    database_id: block.id,
  });
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
