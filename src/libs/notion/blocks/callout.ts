import { fetchBlockComponents } from "./blocks.js";

import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { CalloutBlockObject } from "src/components/Blocks/Callout.js";

export const convertCalloutResponseToBlock = async (
  block: CalloutBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlockComponents(block.id);
    return {
      ...block,
      callout: {
        ...block.callout,
        children,
      },
    } satisfies CalloutBlockObject;
  }
  return {
    ...block,
  } satisfies CalloutBlockObject;
};
