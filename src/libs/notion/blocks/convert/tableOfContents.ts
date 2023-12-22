import type { TableOfContentsBlockObject } from "../../../../types/notion/block/tableOfContents.js";
import type { Client } from "@notionhq/client";
import type { TableOfContentsBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertTableOfContentsResponseToBlock = async (
  block: TableOfContentsBlockObjectResponse,
  client: Client,
): Promise<TableOfContentsBlockObject> => {
  return { ...block } satisfies TableOfContentsBlockObject;
};
