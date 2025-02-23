import { isFullBlock, isFullPage, isFullDatabase } from '@notionhq/client';

import { retrieveBlock } from './blocks/retrieve';
import { retrieveDatabase } from './database/retrieve';
import { retrievePage } from './pages/retrieve';

import type {
  BlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../types';

export const fetchParent = async (
  parent:
    | BlockObjectResponse['parent']
    | PageObjectResponse['parent']
    | DatabaseObjectResponse['parent'],
  options: FetchOptions,
) => {
  if (parent.type === 'block_id') {
    const parentBlock = await retrieveBlock(
      { block_id: parent.block_id },
      options,
    );
    return parentBlock;
  }
  if (parent.type === 'page_id') {
    const parentPage = await retrievePage({ page_id: parent.page_id }, options);
    return parentPage;
  }
  if (parent.type === 'database_id') {
    const parentDatabase = await retrieveDatabase(
      { database_id: parent.database_id },
      options,
    );
    return parentDatabase;
  }
  return;
};
export const fetchParentBlockObject = async (
  parent:
    | BlockObjectResponse['parent']
    | PageObjectResponse['parent']
    | DatabaseObjectResponse['parent'],
  options: FetchOptions,
): Promise<
  BlockObjectResponse | PageObjectResponse | DatabaseObjectResponse | undefined
> => {
  if (parent.type === 'block_id') {
    const { ok, data } = await retrieveBlock(
      { block_id: parent.block_id },
      options,
    );
    if (ok && isFullBlock(data)) {
      return data;
    }
  } else if (parent.type === 'page_id') {
    const { ok, data } = await retrievePage(
      { page_id: parent.page_id },
      options,
    );
    if (ok && isFullPage(data)) {
      return data;
    }
  } else if (parent.type === 'database_id') {
    const { ok, data } = await retrieveDatabase(
      { database_id: parent.database_id },
      options,
    );
    if (ok && isFullDatabase(data)) {
      return data;
    }
  }
  return;
};
export const fetchAllParents = async (
  parent:
    | BlockObjectResponse['parent']
    | PageObjectResponse['parent']
    | DatabaseObjectResponse['parent'],
  parentList: Array<
    BlockObjectResponse | PageObjectResponse | DatabaseObjectResponse
  >,
  options: FetchOptions,
): Promise<
  Array<BlockObjectResponse | PageObjectResponse | DatabaseObjectResponse>
> => {
  const parentObjectResponse = await fetchParentBlockObject(parent, options);
  if (!parentObjectResponse) {
    return parentList;
  }
  return await fetchAllParents(
    parentObjectResponse.parent,
    [parentObjectResponse, ...parentList],
    options,
  );
};
