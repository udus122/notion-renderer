import { fetchSiteMeta } from "../../../index.js";

import type { ArticleData } from "@extractus/article-extractor";
import type { LinkPreviewBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type LinkPreviewBlockObject = LinkPreviewBlockObjectResponse & {
  link_preview: {
    site_meta?: ArticleData;
  };
};

export const convertLinkPreviewResponseToBlock = async (
  block: LinkPreviewBlockObjectResponse
) => {
  const { payload: site_meta, error } = await fetchSiteMeta(
    block.link_preview.url
  );
  if (!error) {
    if (site_meta) {
      return {
        ...block,
        link_preview: {
          ...block.link_preview,
          site_meta: site_meta,
        },
      } satisfies LinkPreviewBlockObject;
    }
  }
  return {
    ...block,
    link_preview: {
      ...block.link_preview,
    },
  } satisfies LinkPreviewBlockObject;
};
