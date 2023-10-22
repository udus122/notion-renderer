import { convertResponseToRichText } from "../richText/richText.js";

import type { TextRequest } from "../../../types/notion.js";
import type { Overwrite } from "../../../types/utils.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { AudioBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type AudioBlockObject = Overwrite<
  AudioBlockObjectResponse,
  {
    audio:
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

export const convertAudioResponseToBlock = async (
  block: AudioBlockObjectResponse
) => {
  return {
    ...block,
    audio: {
      ...block.audio,
      caption: await convertResponseToRichText(block.audio.caption),
    },
  } satisfies AudioBlockObject;
};
