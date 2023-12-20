import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { ToggleBlockObject } from "../../../../types/notion/block/toggle.js";
import type { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertToggleResponseToBlock = async (
  block: ToggleBlockObjectResponse,
): Promise<ToggleBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id });

    if (ok) {
      return {
        ...block,
        toggle: {
          ...block.toggle,
          rich_text: await convertResponseToRichText(block.toggle.rich_text),
          children: data,
        },
      } satisfies ToggleBlockObject;
    }
  }

  return {
    ...block,
    toggle: {
      ...block.toggle,
      rich_text: await convertResponseToRichText(block.toggle.rich_text),
    },
  } satisfies ToggleBlockObject;
};
