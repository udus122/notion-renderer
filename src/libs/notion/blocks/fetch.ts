import { convertResponseToBlock } from "./convertResponseToBlock/index.js";
import { retrieveBlock } from "./retrieve.js";

import type { BlockBlockObject } from "../../../types/notion/blocks/block.js";
import type { Result } from "../../../types/utils.js";
import type { GetBlockParameters } from "@notionhq/client/build/src/api-endpoints.js";

export const fetchBlock = async (
  args: GetBlockParameters,
): Promise<Result<BlockBlockObject>> => {
  const retrievedResult = await retrieveBlock(args);

  if (!retrievedResult.ok) {
    return retrievedResult;
  }

  const { ok, data } = await convertResponseToBlock(retrievedResult.data);

  if (!ok) {
    return { ok, data };
  }
  return { ok: true, data: data };
};
