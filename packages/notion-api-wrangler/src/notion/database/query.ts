import { isFullPage } from '@notionhq/client';

import { notUndefined } from '../../utils';
import { withBackOff } from '../../utils/api';
import { convertResponseToPage } from '../index';

import type { QueryDatabaseObject } from '@udus/notion-types';
import type { Result } from '@udus/notion-types';
import type {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';

export const queryDatabase = async (
  args: QueryDatabaseParameters,
  { client, queue }: FetchOptions,
): Promise<Result<QueryDatabaseResponse>> => {
  const result = await queue.add(
    () => withBackOff(client.databases.query)(args),
    { throwOnTimeout: true },
  );

  return result;
};

export const fetchDatabaseItems = async (
  args: QueryDatabaseParameters,
  options: FetchOptions,
): Promise<Result<QueryDatabaseObject>> => {
  const { ok, data } = await queryDatabase(args, options);

  if (!ok) {
    return { ok, data };
  }

  const pages = (
    await Promise.all(
      data.results.map(async (page) => {
        if (!isFullPage(page)) return;

        const converted = convertResponseToPage(page, options);
        return converted;
      }),
    )
  ).filter(notUndefined);

  return {
    ok: true,
    data: {
      ...data,
      results: pages,
    },
  };
};
