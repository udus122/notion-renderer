import type { TableOfContentsBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { TableOfContentsBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertTableOfContentsResponseToBlock = async (
  block: TableOfContentsBlockObjectResponse,
  client: Client,
): Promise<TableOfContentsBlockObject> => {
  return { ...block } satisfies TableOfContentsBlockObject;
};
