import { isFullBlock, isFullPage, isFullDatabase } from "@notionhq/client";

import { retrieveBlock } from "./blocks/blocks.js";
import { retrieveDatabase } from "./databases.js";
import { retrievePage } from "./pages.js";

import type {
  BlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const fetchParent = async (
  parent:
    | BlockObjectResponse["parent"]
    | PageObjectResponse["parent"]
    | DatabaseObjectResponse["parent"]
) => {
  if (parent.type === "block_id") {
    const parentBlock = await retrieveBlock({ block_id: parent.block_id });
    return parentBlock;
  } else if (parent.type === "page_id") {
    const parentPage = await retrievePage({ page_id: parent.page_id });
    return parentPage;
  } else if (parent.type === "database_id") {
    const parentDatabase = await retrieveDatabase({
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
    | DatabaseObjectResponse["parent"]
) => {
  if (parent.type === "block_id") {
    const parentBlock = await retrieveBlock({ block_id: parent.block_id });
    if (parentBlock && isFullBlock(parentBlock)) {
      return await parentBlock;
    }
  } else if (parent.type === "page_id") {
    const parentPage = await retrievePage({ page_id: parent.page_id });
    if (parentPage && isFullPage(parentPage)) {
      return parentPage;
    }
  } else if (parent.type === "database_id") {
    const parentDatabase = await retrieveDatabase({
      database_id: parent.database_id,
    });
    if (parentDatabase && isFullDatabase(parentDatabase)) {
      return parentDatabase;
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
  > = []
): Promise<
  Array<BlockObjectResponse | PageObjectResponse | DatabaseObjectResponse>
> => {
  const parentObjectResponse = await fetchParentBlockObject(parent);
  if (!parentObjectResponse) {
    return parentList;
  }
  return await fetchAllParents(parentObjectResponse.parent, [
    parentObjectResponse,
    ...parentList,
  ]);
};
