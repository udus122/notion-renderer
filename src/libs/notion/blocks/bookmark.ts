import { fetchSiteMeta } from "../../../libs/utils.js";
import { convertResponseToRichText } from "../richText/richText.js";

import type { BookmarkBlockObject } from "../../../types/notion.js";
import type { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

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
          caption: await convertResponseToRichText(block.bookmark.caption),
        },
      } satisfies BookmarkBlockObject;
    }
  }
  return {
    ...block,
    bookmark: {
      ...block.bookmark,
      caption: await convertResponseToRichText(block.bookmark.caption),
    },
  } satisfies BookmarkBlockObject;
};
