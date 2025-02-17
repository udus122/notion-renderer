import { fetchAllParents } from "../../parent";

import type { BreadcrumbBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type {
  BreadcrumbBlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const convertBreadcrumbResponseToBlock = async (
  block: BreadcrumbBlockObjectResponse,
  client: Client,
): Promise<BreadcrumbBlockObject> => {
  const allParents = await fetchAllParents(block.parent, [], client);
  const parents = allParents.filter(
    (parent): parent is PageObjectResponse | DatabaseObjectResponse =>
      parent.object === "page" || parent.object === "database",
  );

  return {
    ...block,
    breadcrumb: {
      ...block.breadcrumb,
      parents,
    },
  } satisfies BreadcrumbBlockObject;
};
