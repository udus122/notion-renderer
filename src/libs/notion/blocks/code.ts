import { convertResponseToRichText } from "../richText/richText.js";

import type { RichTextItem } from "../richText/richTextItem.js";
import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Overwrite } from "src/types/utils.js";

export type CodeBlockObject = Overwrite<
  CodeBlockObjectResponse,
  {
    code: {
      language: string;
      rich_text: Array<RichTextItem>;
      caption: Array<RichTextItem>;
    };
  }
>;

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
