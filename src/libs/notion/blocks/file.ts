import { convertResponseToRichText } from "../richText/richText.js";

import type { FileBlockObject } from "../../../types/notion.js";
import type { FileBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

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
