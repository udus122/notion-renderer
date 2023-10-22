import { fetchOembed } from "src/index.js";

import type { EmbedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { EmbedBlockObject } from "src/components/Blocks/Embed.js";

export const convertEmbedResponseToBlock = async (
  block: EmbedBlockObjectResponse
) => {
  const { payload: oembed, error } = await fetchOembed(block.embed.url);
  if (!error) {
    return {
      ...block,
      embed: {
        ...block.embed,
        oembed,
      },
    } satisfies EmbedBlockObject;
  }
  return { ...block } satisfies EmbedBlockObject;
};
