import { fetchOembed } from "../../../libs/utils.js";
import { convertResponseToRichText } from "../richText/richText.js";

import type { VideoBlockObject } from "../../../types/notion/blocks/video.js";
import type { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertVideoResponseToBlock = async (
  block: VideoBlockObjectResponse
) => {
  if (block.video.type === "external") {
    const { ok, data } = await fetchOembed(block.video.external.url, {
      maxwidth: 560,
      maxheight: 315,
    });
    if (!ok) {
      return {
        ...block,
        video: {
          ...block.video,
          caption: await convertResponseToRichText(block.video.caption),
        },
      } satisfies VideoBlockObject;
    }

    return {
      ...block,
      video: {
        ...block.video,
        caption: await convertResponseToRichText(block.video.caption),
        oembed: data,
      },
    } satisfies VideoBlockObject;
  }
};
