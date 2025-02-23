import { convertResponseToRichText } from '../../richText/richText';
import { fetchBlockList } from '../fetchBlockList';

import type { CalloutBlockObject } from '@udus/notion-types';
import type { CalloutBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertCalloutResponseToBlock = async (
  block: CalloutBlockObjectResponse,
  options: FetchOptions,
): Promise<CalloutBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id }, options);

    if (ok) {
      return {
        ...block,
        callout: {
          ...block.callout,
          rich_text: await convertResponseToRichText(
            block.callout.rich_text,
            options,
          ),
          children: data,
        },
      } satisfies CalloutBlockObject;
    }
  }

  return {
    ...block,
    callout: {
      ...block.callout,
      rich_text: await convertResponseToRichText(
        block.callout.rich_text,
        options,
      ),
    },
  } satisfies CalloutBlockObject;
};
