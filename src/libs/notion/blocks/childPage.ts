import { fetchPage } from "../pages/pages.js";

import type { ChildPageBlockObject } from "../../../types/notion/blocks/childPage.js";
import type { ChildPageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertChildPageResponseToBlock = async (
  block: ChildPageBlockObjectResponse,
) => {
  const childPage = await fetchPage({ page_id: block.id });
  if (childPage) {
    return {
      ...block,
      child_page: {
        ...block.child_page,
        page: childPage,
      },
    } satisfies ChildPageBlockObject;
  }
  return {
    ...block,
    child_page: {
      ...block.child_page,
    },
  } satisfies ChildPageBlockObject;
};
