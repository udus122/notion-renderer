import { convertResponseToRichText } from '../../richText/richText';

import type { ImageBlockObject } from '@udus/notion-types';
import type { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertImageResponseToBlock = async (
  block: ImageBlockObjectResponse,
  options: FetchOptions,
): Promise<ImageBlockObject> => {
  return {
    ...block,
    image: {
      ...block.image,
      caption: await convertResponseToRichText(block.image.caption, options),
    },
  } satisfies ImageBlockObject;
};
