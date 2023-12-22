import {
  isFullBlock,
  isFullPage,
  isFullDatabase,
  Client,
} from "@notionhq/client";

import { retrieveBlock } from "./blocks/retrieve.js";
import { retrieveDatabase } from "./database/retrieve.js";
import { retrievePage } from "./pages/retrieve.js";

import type {
  BlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const fetchParent = async (
  parent:
    | BlockObjectResponse["parent"]
    | PageObjectResponse["parent"]
    | DatabaseObjectResponse["parent"],
  client: Client,
) => {
  if (parent.type === "block_id") {
    const parentBlock = await retrieveBlock(client, {
      block_id: parent.block_id,
    });
    return parentBlock;
  } else if (parent.type === "page_id") {
    const parentPage = await retrievePage(client, { page_id: parent.page_id });
    return parentPage;
  } else if (parent.type === "database_id") {
    const parentDatabase = await retrieveDatabase(client, {
      database_id: parent.database_id,
    });
    return parentDatabase;
  }
  return;
};
export const fetchParentBlockObject = async (
  parent:
    | BlockObjectResponse["parent"]
    | PageObjectResponse["parent"]
    | DatabaseObjectResponse["parent"],
  client: Client,
): Promise<
  BlockObjectResponse | PageObjectResponse | DatabaseObjectResponse | undefined
> => {
  if (parent.type === "block_id") {
    const { ok, data } = await retrieveBlock(client, {
      block_id: parent.block_id,
    });
    if (ok && isFullBlock(data)) {
      return await data;
    }
  } else if (parent.type === "page_id") {
    const { ok, data } = await retrievePage(client, {
      page_id: parent.page_id,
    });
    if (ok && isFullPage(data)) {
      return data;
    }
  } else if (parent.type === "database_id") {
    const { ok, data } = await retrieveDatabase(client, {
      database_id: parent.database_id,
    });
    if (ok && isFullDatabase(data)) {
      return data;
    }
  }
  return;
};
export const fetchAllParents = async (
  parent:
    | BlockObjectResponse["parent"]
    | PageObjectResponse["parent"]
    | DatabaseObjectResponse["parent"],
  parentList: Array<
    BlockObjectResponse | PageObjectResponse | DatabaseObjectResponse
  > = [],
  client: Client,
): Promise<
  Array<BlockObjectResponse | PageObjectResponse | DatabaseObjectResponse>
> => {
  const parentObjectResponse = await fetchParentBlockObject(parent, client);
  if (!parentObjectResponse) {
    return parentList;
  }
  return await fetchAllParents(
    parentObjectResponse.parent,
    [parentObjectResponse, ...parentList],
    client,
  );
};
