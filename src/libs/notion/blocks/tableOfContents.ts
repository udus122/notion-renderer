import type { TableOfContentsBlockObject } from "../../../types/notion.js";
import type { TableOfContentsBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertTableOfContentsResponseToBlock = async (
  block: TableOfContentsBlockObjectResponse
) => {
  return { ...block } satisfies TableOfContentsBlockObject;
};
