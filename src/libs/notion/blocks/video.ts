import { fetchOembed } from "../../../libs/utils.js";
import { convertResponseToRichText } from "../richText/richText.js";

import type { RichTextItem } from "../richText/richTextItem.js";
import type {
  LinkTypeData,
  PhotoTypeData,
  VideoTypeData,
  RichTypeData,
} from "@extractus/oembed-extractor";
import type { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { TextRequest } from "src/types/notion.js";
import type { Overwrite } from "src/types/utils.js";

export type VideoBlockObject = Overwrite<
  VideoBlockObjectResponse,
  {
    video:
      | {
          type: "external";
          external: {
            url: TextRequest;
          };
          caption: Array<RichTextItem>;
          oembed?: LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData;
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
          caption: await convertResponseToRichText(block.video.caption),
          oembed,
        },
      } satisfies VideoBlockObject;
    }
  }
  return {
    ...block,
    video: {
      ...block.video,
      caption: await convertResponseToRichText(block.video.caption),
    },
  } satisfies VideoBlockObject;
};
