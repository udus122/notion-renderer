import { convertResponseToRichText } from "../../richText/richText.js";

import type { AudioBlockObject } from "../../../../types/notion/block/audio.js";
import type { Client } from "@notionhq/client";
import type { AudioBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertAudioResponseToBlock = async (
  block: AudioBlockObjectResponse,
  client: Client,
): Promise<AudioBlockObject> => {
  return {
    ...block,
    audio: {
      ...block.audio,
      caption: await convertResponseToRichText(block.audio.caption, client),
    },
  } satisfies AudioBlockObject;
};
