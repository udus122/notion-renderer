import { convertResponseToRichText } from "../richText/richText.js";

import type { AudioBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { AudioBlockObject } from "src/types/notion/blocks/audio.js";

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
