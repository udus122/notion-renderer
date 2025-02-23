import { isFullDatabase, isFullPage } from '@notionhq/client';

import { listComments } from '../../comments';
import { retrieveDatabase } from '../../database/retrieve';
import { retrievePage } from '../../pages/retrieve';

import type { LinkToPageBlockObject } from '@udus/notion-types';
import type { LinkToPageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertLinkToPageResponseToBlock = async (
  block: LinkToPageBlockObjectResponse,
  options: FetchOptions,
): Promise<LinkToPageBlockObject> => {
  switch (block.link_to_page.type) {
    case 'database_id': {
      const { ok, data } = await retrieveDatabase(
        { database_id: block.link_to_page.database_id },
        options,
      );

      if (!ok) {
        return block satisfies LinkToPageBlockObject;
      }

      if (!isFullDatabase(data)) {
        return block satisfies LinkToPageBlockObject;
      }

      return {
        ...block,
        link_to_page: {
          ...block.link_to_page,
          database: data,
        },
      } satisfies LinkToPageBlockObject;
    }
    case 'page_id': {
      const { ok, data } = await retrievePage(
        { page_id: block.link_to_page.page_id },
        options,
      );

      if (!ok) {
        return block satisfies LinkToPageBlockObject;
      }

      if (!isFullPage(data)) {
        return block satisfies LinkToPageBlockObject;
      }

      return {
        ...block,
        link_to_page: {
          ...block.link_to_page,
          page: data,
        },
      } satisfies LinkToPageBlockObject;
    }
    case 'comment_id': {
      const linkedComments = await listComments(
        { block_id: block.link_to_page.comment_id },
        options,
      );
      return {
        ...block,
        link_to_page: {
          ...block.link_to_page,
          comments: linkedComments,
        },
      } satisfies LinkToPageBlockObject;
    }
  }
};
