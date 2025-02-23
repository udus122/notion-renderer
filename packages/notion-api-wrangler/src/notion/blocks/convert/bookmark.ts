import { fetchSiteMeta } from '../../../utils/sitemeta';
import { convertResponseToRichText } from '../../richText/richText';

import type { BookmarkBlockObject } from '@udus/notion-types';
import type { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertBookmarkResponseToBlock = async (
  block: BookmarkBlockObjectResponse,
  options: FetchOptions,
) => {
  const { ok, data } = await fetchSiteMeta(block.bookmark.url);

  if (!ok) {
    return {
      ...block,
      bookmark: {
        ...block.bookmark,
        caption: await convertResponseToRichText(
          block.bookmark.caption,
          options,
        ),
      },
    } satisfies BookmarkBlockObject;
  }

  return {
    ...block,
    bookmark: {
      ...block.bookmark,
      site_meta: data,
      caption: await convertResponseToRichText(block.bookmark.caption, options),
    },
  } satisfies BookmarkBlockObject;
};
