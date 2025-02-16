import { convertResponseToRichText } from "../../richText/richText.js";

import type { ImageBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertImageResponseToBlock = async (
  block: ImageBlockObjectResponse,
  client: Client,
): Promise<ImageBlockObject> => {
  return {
    ...block,
    image: {
      ...block.image,
      caption: await convertResponseToRichText(block.image.caption, client),
    },
  } satisfies ImageBlockObject;
};
