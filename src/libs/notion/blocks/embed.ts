import { fetchOembed } from "../../../libs/utils.js";
import { convertResponseToRichText } from "../richText/richText.js";

import type { EmbedBlockObject } from "../../../types/notion/blocks/embed.js";
import type { EmbedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

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
