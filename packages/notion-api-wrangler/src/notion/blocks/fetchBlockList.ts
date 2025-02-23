import { listBlockChildren } from './listBlocksChildren';
import { resolveBlockChildren } from './resolveBlockChildren';

import type { BlockBlockObject } from '@udus/notion-types';
import type { ListBlockChildrenParameters } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions, Result } from '../../types';

export const fetchBlockList = async (
  args: ListBlockChildrenParameters,
  options: FetchOptions,
): Promise<Result<BlockBlockObject[]>> => {
  const { ok, data } = await listBlockChildren(args, options);

  if (!ok) {
    return { ok, data };
  }

  const childrenBlockComponents = await resolveBlockChildren(data, options);

  return { ok: true, data: childrenBlockComponents };
};
