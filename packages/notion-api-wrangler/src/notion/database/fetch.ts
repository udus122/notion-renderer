import { isFullDatabase } from '@notionhq/client';

import { convertResponseToRichText } from '../richText/richText';

import { retrieveDatabase } from './retrieve';

import type { DatabaseObject } from '@udus/notion-types';
import type { Result } from '@udus/notion-types';
import type { GetDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';

export const fetchDatabase = async (
  args: GetDatabaseParameters,
  options: FetchOptions,
): Promise<Result<DatabaseObject>> => {
  const { ok, data } = await options.cache.with(
    `${fetchDatabase.name}-${args.database_id}`,
    (x: GetDatabaseParameters) => retrieveDatabase(x, options),
  )(args);

  if (!ok) {
    return { ok, data };
  }

  if (!isFullDatabase(data)) {
    return { ok: false, data: new Error('Database is not full') };
  }

  const databaseObject = {
    ...data,
    title: await convertResponseToRichText(data.title, options),
    description: await convertResponseToRichText(data.description, options),
  } satisfies DatabaseObject;

  return { ok: true, data: databaseObject };
};
