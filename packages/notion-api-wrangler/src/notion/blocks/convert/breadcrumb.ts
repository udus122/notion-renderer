import { fetchAllParents } from '../../parent';

import type { BreadcrumbBlockObject } from '@udus/notion-types';
import type {
  BreadcrumbBlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertBreadcrumbResponseToBlock = async (
  block: BreadcrumbBlockObjectResponse,
  options: FetchOptions,
): Promise<BreadcrumbBlockObject> => {
  const allParents = await fetchAllParents(block.parent, [], options);
  const parents = allParents.filter(
    (parent): parent is PageObjectResponse | DatabaseObjectResponse =>
      parent.object === 'page' || parent.object === 'database',
  );

  return {
    ...block,
    breadcrumb: {
      ...block.breadcrumb,
      parents,
    },
  } satisfies BreadcrumbBlockObject;
};
