import { convertResponseToRichText } from "../richText/richText.js";

import { fetchBlocks } from "./blocks.js";

import type { RichTextItem } from "../richText/richTextItem.js";
import type { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockObject } from "src/index.js";

export type ToggleBlockObject = ToggleBlockObjectResponse & {
  toggle: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
};

export const convertToggleResponseToBlock = async (
  block: ToggleBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
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
