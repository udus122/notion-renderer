import { fetchBlockComponents } from "./blocks.js";

import type { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ToggleBlockObject } from "src/components/Blocks/Toggle.js";

export const convertToggleResponseToBlock = async (
  block: ToggleBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlockComponents(block.id);
    return {
      ...block,
      toggle: {
        ...block.toggle,
        children,
      },
    } satisfies ToggleBlockObject;
  }
  return {
    ...block,
  } satisfies ToggleBlockObject;
};
