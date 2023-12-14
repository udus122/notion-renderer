import { notUndefined } from "../../utils/utils.js";

import { convertResponseToBlock } from "./convertResponseToBlock/index.js";
import { wrapListItems } from "./wrapListItems.js";

import type { BlockBlockObject } from "../../../types/notion/blocks/block.js";
import type { ListBlockChildrenResponseResults } from "../../../types/notion/common/common.js";

export const resolveBlockChildren = async (
  blocks: ListBlockChildrenResponseResults,
): Promise<Array<BlockBlockObject>> => {
  const blockObjectList = (
    await Promise.all(
      blocks.map(async (child_block) => {
        const { ok, data } = await convertResponseToBlock(child_block);
        if (!ok) {
          return;
        }
        return data;
      }),
    )
  ).filter(notUndefined);

  return wrapListItems(blockObjectList);
};
