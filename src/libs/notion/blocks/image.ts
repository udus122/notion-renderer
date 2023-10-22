import { convertResponseToRichText } from "../richText/richText.js";

import type { RichTextItem } from "../richText/richTextItem.js";
import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { TextRequest } from "src/types/notion.js";
import type { Overwrite } from "src/types/utils.js";

export type ImageBlockObject = Overwrite<
  ImageBlockObjectResponse,
  {
    image:
      | {
          type: "external";
          external: {
            url: TextRequest;
          };
          caption: Array<RichTextItem>;
        }
      | {
          type: "file";
          file: {
            url: string;
            expiry_time: string;
          };
          caption: Array<RichTextItem>;
        };
  }
>;

export const convertImageResponseToBlock = async (
  block: ImageBlockObjectResponse
) => {
  return {
    ...block,
    image: {
      ...block.image,
      caption: await convertResponseToRichText(block.image.caption),
    },
  } satisfies ImageBlockObject;
};
