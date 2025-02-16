import { notUndefined } from "../../utils/utils.js";

import { convertResponseToBlock } from "./convert/convertResponseToBlock.js";
import { wrapListItems } from "./wrapListItems.js";

import type { BlockBlockObject,ListBlockChildrenResponseResults  } from "@udus/notion-types";
import type { Client } from "@notionhq/client";

export const resolveBlockChildren = async (
  blocks: ListBlockChildrenResponseResults,
  client: Client,
): Promise<Array<BlockBlockObject>> => {
  const blockObjectList = (
    await Promise.all(
      blocks.map(async (child_block) => {
        const { ok, data } = await convertResponseToBlock(child_block, client);
        if (!ok) {
          return;
        }
        return data;
      }),
    )
  ).filter(notUndefined);

  return wrapListItems(blockObjectList);
};
