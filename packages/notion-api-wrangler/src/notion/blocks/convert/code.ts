import { convertResponseToRichText } from "../../richText/richText.js";

import type { CodeBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertCodeResponseToBlock = async (
  block: CodeBlockObjectResponse,
  client: Client,
): Promise<CodeBlockObject> => {
  return {
    ...block,
    code: {
      ...block.code,
      rich_text: await convertResponseToRichText(block.code.rich_text, client),
      caption: await convertResponseToRichText(block.code.caption, client),
    },
  } satisfies CodeBlockObject;
};
