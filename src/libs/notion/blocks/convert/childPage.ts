import { isFullPage } from "@notionhq/client";

import { retrievePage } from "../../pages/retrieve.js";

import type { ChildPageBlockObject } from "../../../../types/notion/blocks/childPage.js";
import type { ChildPageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertChildPageResponseToBlock = async (
  block: ChildPageBlockObjectResponse,
): Promise<ChildPageBlockObject> => {
  const { ok, data } = await retrievePage({ page_id: block.id });
  if (!ok) {
    return block satisfies ChildPageBlockObject;
  }

  if (!isFullPage(data)) {
    return block satisfies ChildPageBlockObject;
  }

  return {
    ...block,
    child_page: {
      ...block.child_page,
      page: data,
    },
  } satisfies ChildPageBlockObject;
};
