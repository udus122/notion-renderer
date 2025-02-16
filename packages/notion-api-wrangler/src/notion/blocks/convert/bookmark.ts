import { fetchSiteMeta } from "../../../utils/sitemeta.js";
import { convertResponseToRichText } from "../../richText/richText.js";

import type { BookmarkBlockObject } from "@repo/notion-types";
import type { Client } from "@notionhq/client";
import type { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertBookmarkResponseToBlock = async (
  block: BookmarkBlockObjectResponse,
  client: Client,
) => {
  const { ok, data } = await fetchSiteMeta(block.bookmark.url);

  if (!ok) {
    return {
      ...block,
      bookmark: {
        ...block.bookmark,
        caption: await convertResponseToRichText(
          block.bookmark.caption,
          client,
        ),
      },
    } satisfies BookmarkBlockObject;
  }

  return {
    ...block,
    bookmark: {
      ...block.bookmark,
      site_meta: data,
      caption: await convertResponseToRichText(block.bookmark.caption, client),
    },
  } satisfies BookmarkBlockObject;
};
