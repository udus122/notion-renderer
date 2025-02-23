import { isFullDatabase } from '@notionhq/client';

import { retrieveDatabase } from '../../database/retrieve';

import type { ChildDatabaseBlockObject } from '@udus/notion-types';
import type { ChildDatabaseBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertChildDatabaseResponseToBlock = async (
  block: ChildDatabaseBlockObjectResponse,
  options: FetchOptions,
): Promise<ChildDatabaseBlockObject> => {
  const { ok, data } = await retrieveDatabase(
    { database_id: block.id },
    options,
  );
  if (!ok) {
    return block satisfies ChildDatabaseBlockObject;
  }

  if (!isFullDatabase(data)) {
    return block satisfies ChildDatabaseBlockObject;
  }

  return {
    ...block,
    child_database: {
      ...block.child_database,
      database: data,
    },
  } satisfies ChildDatabaseBlockObject;
};
