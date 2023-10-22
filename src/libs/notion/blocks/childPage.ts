import { fetchPage } from "../pages.js";

import type { ChildPageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ChildPageBlockObject } from "src/components/Blocks/ChildPage.js";

export const convertChildPageResponseToBlock = async (
  block: ChildPageBlockObjectResponse
) => {
  const childPage = await fetchPage(block.id);
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