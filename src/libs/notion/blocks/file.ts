import { convertResponseToRichText } from "../richText/richText.js";

import type { RichTextItem } from "../richText/richTextItem.js";
import type { FileBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type FileBlockObject = FileBlockObjectResponse & {
  file: {
    caption: Array<RichTextItem>;
  };
};

export const convertFileResponseToBlock = async (
  block: FileBlockObjectResponse
) => {
  return {
    ...block,
    file: {
      ...block.file,
      caption: await convertResponseToRichText(block.file.caption),
    },
  } satisfies FileBlockObject;
};
