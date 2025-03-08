import { convertResponseToBlock } from './convert/convertResponseToBlock';
import { retrieveBlock } from './retrieve';
import type { BlockBlockObject, Result } from '@udus/notion-types';
import type { GetBlockParameters } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';

export const fetchBlock = async (
  args: GetBlockParameters,
  options: FetchOptions,
): Promise<Result<BlockBlockObject>> => {
  const retrievedResult = await options.cache.with(
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
