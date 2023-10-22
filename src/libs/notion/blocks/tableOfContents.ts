import type { TableOfContentsBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { TableOfContentsBlockObject } from "src/components/Blocks/TableOfContents.js";

export const convertTableOfContentsResponseToBlock = async (
  block: TableOfContentsBlockObjectResponse
) => {
  return { ...block } satisfies TableOfContentsBlockObject;
};
