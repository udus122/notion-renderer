import { convertResponseToRichText } from "../../richText/richText";

import type { AudioBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { AudioBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

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
