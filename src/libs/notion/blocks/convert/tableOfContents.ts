import type { TableOfContentsBlockObject } from "../../../../types/notion/block/tableOfContents.js";
import type { TableOfContentsBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertTableOfContentsResponseToBlock = async (
  block: TableOfContentsBlockObjectResponse,
): Promise<TableOfContentsBlockObject> => {
  return { ...block } satisfies TableOfContentsBlockObject;
};