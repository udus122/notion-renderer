import { convertResponseToRichText } from "../richText/richText.js";

import { fetchBlockList } from "./blocks.js";

import type { ToggleBlockObject } from "../../../types/notion.js";
import type { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertToggleResponseToBlock = async (
  block: ToggleBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlockList(block.id);
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
