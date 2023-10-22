import { fetchPage } from "../pages.js";

import type {
  ChildPageBlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export type ChildPageBlockObject = ChildPageBlockObjectResponse & {
  child_page: {
    page?: PageObjectResponse;
  };
};

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
