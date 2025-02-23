import { convertResponseToRichText } from '../../richText/richText';
import { fetchBlockList } from '../fetchBlockList';

import type { ToDoBlockObject } from '@udus/notion-types';
import type { ToDoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertToDoResponseToBlock = async (
  block: ToDoBlockObjectResponse,
  options: FetchOptions,
): Promise<ToDoBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id }, options);

    if (ok) {
      return {
        ...block,
        to_do: {
          ...block.to_do,
          rich_text: await convertResponseToRichText(
            block.to_do.rich_text,
            options,
          ),
          children: data,
        },
      } satisfies ToDoBlockObject;
    }
  }

  return {
    ...block,
    to_do: {
      ...block.to_do,
      rich_text: await convertResponseToRichText(
        block.to_do.rich_text,
        options,
      ),
    },
  } satisfies ToDoBlockObject;
};
