import { convertResponseToRichText } from "../richText/richText.js";

import { fetchBlockList } from "./blocks.js";

import type { CalloutBlockObject } from "../../../types/notion/blocks/callout.js";
import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertCalloutResponseToBlock = async (
  block: CalloutBlockObjectResponse,
) => {
  if (block.has_children) {
    const children = await fetchBlockList({ block_id: block.id });
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
