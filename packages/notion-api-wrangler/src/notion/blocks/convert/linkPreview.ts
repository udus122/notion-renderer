import { fetchSiteMeta } from "../../../utils/sitemeta.js";

import type { LinkPreviewBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { LinkPreviewBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertLinkPreviewResponseToBlock = async (
  block: LinkPreviewBlockObjectResponse,
  client: Client,
): Promise<LinkPreviewBlockObject> => {
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
