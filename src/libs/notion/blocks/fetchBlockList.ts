import { listBlockChildren } from "./listBlocksChildren.js";
import { resolveBlockChildren } from "./resolveBlockChildren.js";

import type { BlockBlockObject } from "../../../types/notion/block/block.js";
import type { Result } from "../../../types/utils.js";
import type { ListBlockChildrenParameters } from "@notionhq/client/build/src/api-endpoints.js";

export const fetchBlockList = async (
  args: ListBlockChildrenParameters,
): Promise<Result<BlockBlockObject[]>> => {
  const { ok, data } = await listBlockChildren(args);

  if (!ok) {
    return { ok, data };
  }

  const childrenBlockComponents = await resolveBlockChildren(data);

  return { ok: true, data: childrenBlockComponents };
};
