import { convertResponseToRichText } from "../../richText/richText.js";

import type { FileBlockObject } from "../../../../types/notion/block/file.js";
import type { Client } from "@notionhq/client";
import type { FileBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertFileResponseToBlock = async (
  block: FileBlockObjectResponse,
  client: Client,
): Promise<FileBlockObject> => {
  return {
    ...block,
    file: {
      ...block.file,
      caption: await convertResponseToRichText(block.file.caption, client),
    },
  } satisfies FileBlockObject;
};
