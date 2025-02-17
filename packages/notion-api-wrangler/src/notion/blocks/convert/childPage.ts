import { type Client, isFullPage } from "@notionhq/client";

import { retrievePage } from "../../pages/retrieve";

import type { ChildPageBlockObject } from "@udus/notion-types";
import type { ChildPageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertChildPageResponseToBlock = async (
  block: ChildPageBlockObjectResponse,
  client: Client,
): Promise<ChildPageBlockObject> => {
  const { ok, data } = await retrievePage(client, { page_id: block.id });
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
