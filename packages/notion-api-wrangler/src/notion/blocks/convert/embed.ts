import { fetchOembed } from '../../../utils/oembed';
import { convertResponseToRichText } from '../../richText/richText';

import type { EmbedBlockObject } from '@udus/notion-types';
import type { EmbedBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertEmbedResponseToBlock = async (
  block: EmbedBlockObjectResponse,
  options: FetchOptions,
): Promise<EmbedBlockObject> => {
  const { ok, data } = await fetchOembed(block.embed.url);
  if (!ok) {
    return {
      ...block,
      embed: {
        ...block.embed,
        caption: await convertResponseToRichText(block.embed.caption, options),
      },
    } satisfies EmbedBlockObject;
  }
  return {
    ...block,
    embed: {
      ...block.embed,
      oembed: data,
      caption: await convertResponseToRichText(block.embed.caption, options),
    },
  } satisfies EmbedBlockObject;
};
