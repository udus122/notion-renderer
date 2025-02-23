import { convertResponseToRichText } from '../../richText/richText';
import { fetchBlockList } from '../fetchBlockList';

import type { ToggleBlockObject } from '@udus/notion-types';
import type { ToggleBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertToggleResponseToBlock = async (
  block: ToggleBlockObjectResponse,
  options: FetchOptions,
): Promise<ToggleBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id }, options);

    if (ok) {
      return {
        ...block,
        toggle: {
          ...block.toggle,
          rich_text: await convertResponseToRichText(
            block.toggle.rich_text,
            options,
          ),
          children: data,
        },
      } satisfies ToggleBlockObject;
    }
  }

  return {
    ...block,
    toggle: {
      ...block.toggle,
      rich_text: await convertResponseToRichText(
        block.toggle.rich_text,
        options,
      ),
    },
  } satisfies ToggleBlockObject;
};
