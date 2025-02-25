import { isFullPage } from '@notionhq/client';

import { notUndefined } from '../../utils';
import { withBackOff } from '../../utils/backoff';
import { convertResponseToPage } from '../index';

import type { QueryDatabaseObject } from '@udus/notion-types';
import type { Result } from '@udus/notion-types';
import type {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';
import { withCache } from '../../utils/cache';

export const queryDatabase = async (
  args: QueryDatabaseParameters,
  { client, queue }: FetchOptions,
): Promise<Result<QueryDatabaseResponse>> => {
  try {
    const response = await queue.add(() =>
      withBackOff(client.databases.query)(args),
    );
    return { ok: true, data: response };
  } catch (error) {
    return { ok: false, data: error as Error };
  }
};

export const fetchDatabaseItems = async (
  args: QueryDatabaseParameters,
  options: FetchOptions,
): Promise<Result<QueryDatabaseObject>> => {
  const { ok, data } = await withCache(
    `${fetchDatabaseItems.name}-${args.database_id}`,
    (x: QueryDatabaseParameters) => queryDatabase(x, options),
  )(args);

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
