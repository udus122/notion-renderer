import { fetchOembed } from "../../../utils/oembed.js";
import { convertResponseToRichText } from "../../richText/richText.js";

import type { EmbedBlockObject } from "@repo/notion-types";
import type { Client } from "@notionhq/client";
import type { EmbedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertEmbedResponseToBlock = async (
  block: EmbedBlockObjectResponse,
  client: Client,
): Promise<EmbedBlockObject> => {
  const { ok, data } = await fetchOembed(block.embed.url);
  if (!ok) {
    return {
      ...block,
      embed: {
        ...block.embed,
        caption: await convertResponseToRichText(block.embed.caption, client),
      },
    } satisfies EmbedBlockObject;
  }
  return {
    ...block,
    embed: {
      ...block.embed,
      oembed: data,
      caption: await convertResponseToRichText(block.embed.caption, client),
    },
  } satisfies EmbedBlockObject;
};
