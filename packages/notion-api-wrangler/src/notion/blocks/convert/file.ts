import { convertResponseToRichText } from "../../richText/richText";

import type { FileBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { FileBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

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
