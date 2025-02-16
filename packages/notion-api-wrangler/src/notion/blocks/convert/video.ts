import { fetchOembed } from "../../../utils/oembed.js";
import { convertResponseToRichText } from "../../richText/richText.js";

import type { VideoBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertVideoResponseToBlock = async (
  block: VideoBlockObjectResponse,
  client: Client,
): Promise<VideoBlockObject> => {
  if (block.video.type === "external") {
    const { ok, data } = await fetchOembed(block.video.external.url, {
      maxwidth: 560,
      maxheight: 315,
    });

    if (ok) {
      return {
        ...block,
        video: {
          ...block.video,
          caption: await convertResponseToRichText(block.video.caption, client),
          oembed: data,
        },
      } satisfies VideoBlockObject;
    }
  }

  return {
    ...block,
    video: {
      ...block.video,
      caption: await convertResponseToRichText(block.video.caption, client),
    },
  } satisfies VideoBlockObject;
};
