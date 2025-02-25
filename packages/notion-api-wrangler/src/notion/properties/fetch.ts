import { convertResponseToPropertyItem } from './convert/convertResponseToPropertyItem';
import { retrievePageProperty } from './retrieve';
import type { PropertyItemType, Result } from '@udus/notion-types';
import type { GetPagePropertyParameters } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';
import { withCache } from '../../utils/cache';

export const fetchPageProperty = async (
  args: GetPagePropertyParameters,
  options: FetchOptions,
): Promise<Result<PropertyItemType>> => {
  const { ok, data } = await withCache(
    `${fetchPageProperty.name}-${args.page_id}`,
    (x: GetPagePropertyParameters) => retrievePageProperty(x, options),
  )(args);

  if (!ok) {
    return { ok, data };
  }

  const pagePropertyObject = await convertResponseToPropertyItem(data, options);

  return { ok: true, data: pagePropertyObject };
};
