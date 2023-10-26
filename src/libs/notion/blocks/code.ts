import { convertResponseToRichText } from "../richText/richText.js";

import type { CodeBlockObject } from "../../../types/notion.js";
import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertCodeResponseToBlock = async (
  block: CodeBlockObjectResponse
) => {
  return {
    ...block,
    code: {
      ...block.code,
      rich_text: await convertResponseToRichText(block.code.rich_text),
      caption: await convertResponseToRichText(block.code.caption),
    },
  } satisfies CodeBlockObject;
};
