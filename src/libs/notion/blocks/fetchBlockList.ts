import { listBlockChildren } from "./listBlocksChildren.js";
import { resolveBlockChildren } from "./resolveBlockChildren.js";

import type { BlockBlockObject } from "../../../types/notion/blocks/block.js";
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

const res = await fetchBlockList({
  block_id: "b89028d90bfc4e55ac91e9cbb594bb6d",
});
console.log(JSON.stringify(res, null, 2));
