import { isFullPage } from '@notionhq/client';

import { retrievePage } from '../../pages/retrieve';

import type { ChildPageBlockObject } from '@udus/notion-types';
import type { ChildPageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertChildPageResponseToBlock = async (
  block: ChildPageBlockObjectResponse,
  options: FetchOptions,
): Promise<ChildPageBlockObject> => {
  const { ok, data } = await retrievePage({ page_id: block.id }, options);
  if (!ok) {
    return block satisfies ChildPageBlockObject;
  }

  if (!isFullPage(data)) {
    return block satisfies ChildPageBlockObject;
  }

  return {
    ...block,
    child_page: {
      ...block.child_page,
      page: data,
    },
  } satisfies ChildPageBlockObject;
};
