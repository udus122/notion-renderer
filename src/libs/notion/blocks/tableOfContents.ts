import type { TableOfContentsBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type TableOfContentsBlockObject = TableOfContentsBlockObjectResponse;

export const convertTableOfContentsResponseToBlock = async (
  block: TableOfContentsBlockObjectResponse
) => {
  return { ...block } satisfies TableOfContentsBlockObject;
};
