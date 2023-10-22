import { fetchSiteMeta } from "src/index.js";

import type { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BookmarkBlockObject } from "src/components/Blocks/Bookmark.js";

export const convertBookmarkResponseToBlock = async (
  block: BookmarkBlockObjectResponse
) => {
  const { payload: site_meta, error } = await fetchSiteMeta(block.bookmark.url);
  if (!error) {
    if (site_meta) {
      return {
        ...block,
        bookmark: {
          ...block.bookmark,
          site_meta: site_meta,
        },
      } satisfies BookmarkBlockObject;
    }
  }
  return {
    ...block,
    bookmark: {
      ...block.bookmark,
    },
  } satisfies BookmarkBlockObject;
};
