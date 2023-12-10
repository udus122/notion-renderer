import { convertResponseToRichText } from "../richText/richText.js";

import type { ImageBlockObject } from "../../../types/notion/blocks/image.js";
import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertImageResponseToBlock = async (
  block: ImageBlockObjectResponse,
) => {
  return {
    ...block,
    image: {
      ...block.image,
      caption: await convertResponseToRichText(block.image.caption),
    },
  } satisfies ImageBlockObject;
};
