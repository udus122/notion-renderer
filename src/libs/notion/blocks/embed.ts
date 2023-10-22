import { fetchOembed } from "../../../libs/utils.js";
import { convertResponseToRichText } from "../richText/richText.js";

import type { RichTextItem } from "../richText/richTextItem.js";
import type {
  LinkTypeData,
  PhotoTypeData,
  VideoTypeData,
  RichTypeData,
} from "@extractus/oembed-extractor";
import type { EmbedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type EmbedBlockObject = EmbedBlockObjectResponse & {
  embed: {
    caption: Array<RichTextItem>;
    oembed?: LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData;
  };
};

export const convertEmbedResponseToBlock = async (
  block: EmbedBlockObjectResponse
) => {
  const { payload: oembed, error } = await fetchOembed(block.embed.url);
  if (!error) {
    return {
      ...block,
      embed: {
        ...block.embed,
        caption: await convertResponseToRichText(block.embed.caption),
        oembed,
      },
    } satisfies EmbedBlockObject;
  }
  return {
    ...block,
    embed: {
      ...block.embed,
      caption: await convertResponseToRichText(block.embed.caption),
    },
  } satisfies EmbedBlockObject;
};
