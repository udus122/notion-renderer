import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { ToggleBlockObject } from "../../../../types/notion/blocks/toggle.js";
import type { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertToggleResponseToBlock = async (
  block: ToggleBlockObjectResponse,
): Promise<ToggleBlockObject> => {
  if (block.has_children) {
    const children = await fetchBlockList({ block_id: block.id });
    return {
      ...block,
      toggle: {
        ...block.toggle,
        rich_text: await convertResponseToRichText(block.toggle.rich_text),
        children,
      },
    } satisfies ToggleBlockObject;
  }
  return {
    ...block,
    toggle: {
      ...block.toggle,
      rich_text: await convertResponseToRichText(block.toggle.rich_text),
    },
  } satisfies ToggleBlockObject;
};
