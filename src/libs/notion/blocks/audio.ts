import type { AudioBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { AudioBlockObject } from "src/components/Blocks/Audio.js";

export const convertAudioResponseToBlock = async (
  block: AudioBlockObjectResponse
) => {
  return { ...block } satisfies AudioBlockObject;
};
