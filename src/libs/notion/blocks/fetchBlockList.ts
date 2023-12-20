import { listBlockChildren } from "./listBlocksChildren.js";
import { resolveBlockChildren } from "./resolveBlockChildren.js";

import type { BlockBlockObject } from "../../../types/notion/block/block.js";
import type { ListBlockChildrenParameters } from "@notionhq/client/build/src/api-endpoints.js";

export const fetchBlockList = async (
  args: ListBlockChildrenParameters,
): Promise<BlockBlockObject[]> => {
  const childrenBlockResponses = await listBlockChildren(args);

  const childrenBlockComponents = await resolveBlockChildren(
    childrenBlockResponses,
  );

  return childrenBlockComponents;
};
