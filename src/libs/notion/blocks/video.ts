import { fetchOembed } from "src/index.js";

import type { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { VideoBlockObject } from "src/components/Blocks/Video.js";

export const convertVideoResponseToBlock = async (
  block: VideoBlockObjectResponse
) => {
  if (block.video.type === "external") {
    const { payload: oembed, error } = await fetchOembed(
      block.video.external.url,
      { maxwidth: 560, maxheight: 315 }
    );
    if (!error) {
      return {
        ...block,
        video: {
          ...block.video,
          oembed,
        },
      } satisfies VideoBlockObject;
    }
  }
  return { ...block } satisfies VideoBlockObject;
};
