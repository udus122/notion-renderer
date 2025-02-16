import { listBlockChildren } from "./listBlocksChildren.js";
import { resolveBlockChildren } from "./resolveBlockChildren.js";

import type { BlockBlockObject, Result } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { ListBlockChildrenParameters } from "@notionhq/client/build/src/api-endpoints.js";

export const fetchBlockList = async (
  client: Client,
  args: ListBlockChildrenParameters,
): Promise<Result<BlockBlockObject[]>> => {
  const { ok, data } = await listBlockChildren(client, args);

  if (!ok) {
    return { ok, data };
  }

  const childrenBlockComponents = await resolveBlockChildren(data, client);

  return { ok: true, data: childrenBlockComponents };
};
