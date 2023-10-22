import { fetchAllParents } from "../parent.js";

import type {
  BreadcrumbBlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const convertBreadcrumbResponseToBlock = async (
  block: BreadcrumbBlockObjectResponse
) => {
  const allParents = await fetchAllParents(block.parent);
  const parents = allParents.filter(
    (parent): parent is PageObjectResponse | DatabaseObjectResponse =>
      parent.object === "page" || parent.object === "database"
  );

  return {
    ...block,
    breadcrumb: {
      ...block.breadcrumb,
      parents,
    },
  };
};
