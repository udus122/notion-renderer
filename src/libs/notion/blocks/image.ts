import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ImageBlockObject } from "src/components/Blocks/Image.js";

export const convertImageResponseToBlock = async (
  block: ImageBlockObjectResponse
) => {
  return { ...block } satisfies ImageBlockObject;
};
