import { fetchSiteMeta } from "../../../index.js";
import { convertResponseToRichText } from "../richText/richText.js";

import type { RichTextItem } from "../richText/richTextItem.js";
import type { ArticleData } from "@extractus/article-extractor";
import type { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type BookmarkBlockObject = BookmarkBlockObjectResponse & {
  bookmark: {
    site_meta?: ArticleData;
    caption: Array<RichTextItem>;
  };
};

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
