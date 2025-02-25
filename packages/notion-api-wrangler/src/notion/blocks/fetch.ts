import { convertResponseToBlock } from './convert/convertResponseToBlock';
import { retrieveBlock } from './retrieve';
import type { BlockBlockObject, Result } from '@udus/notion-types';
import type { GetBlockParameters } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';
import { withCache } from '../../utils/cache';

export const fetchBlock = async (
  args: GetBlockParameters,
  options: FetchOptions,
): Promise<Result<BlockBlockObject>> => {
  const retrievedResult = await withCache(
    `${fetchBlock.name}-${args.block_id}`,
    (x: GetBlockParameters) => retrieveBlock(x, options),
  )(args);

  if (!retrievedResult.ok) {
    return retrievedResult;
  }

  const { ok, data } = await convertResponseToBlock(
    retrievedResult.data,
    options,
  );

  if (!ok) {
    return { ok, data };
  }
  return { ok: true, data: data };
};
