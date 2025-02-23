import { fetchSiteMeta } from '../../../utils/sitemeta';

import type { LinkPreviewBlockObject } from '@udus/notion-types';
import type { LinkPreviewBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertLinkPreviewResponseToBlock = async (
  block: LinkPreviewBlockObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
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
