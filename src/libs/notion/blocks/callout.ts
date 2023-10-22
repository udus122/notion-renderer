import { convertResponseToRichText } from "../richText/richText.js";

import { fetchBlocks } from "./blocks.js";

import type { BlockObject } from "../../../index.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type CalloutBlockObject = CalloutBlockObjectResponse & {
  callout: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
};

export const convertCalloutResponseToBlock = async (
  block: CalloutBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      callout: {
        ...block.callout,
        rich_text: await convertResponseToRichText(block.callout.rich_text),
        children,
      },
    } satisfies CalloutBlockObject;
  }
  return {
    ...block,
    callout: {
      ...block.callout,
      rich_text: await convertResponseToRichText(block.callout.rich_text),
    },
  } satisfies CalloutBlockObject;
};
