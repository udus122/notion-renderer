import { fetchSiteMeta } from "../../../libs/utils.js";

import type { LinkPreviewBlockObject } from "../../../types/notion/blocks/linkPreview.js";
import type { LinkPreviewBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertLinkPreviewResponseToBlock = async (
  block: LinkPreviewBlockObjectResponse,
) => {
  const { ok, data } = await fetchSiteMeta(block.link_preview.url);
  if (!ok) {
    return {
      ...block,
      link_preview: {
        ...block.link_preview,
      },
    } satisfies LinkPreviewBlockObject;
  }

  return {
    ...block,
    link_preview: {
      ...block.link_preview,
      site_meta: data,
    },
  } satisfies LinkPreviewBlockObject;
};
