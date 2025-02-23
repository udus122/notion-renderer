import { convertResponseToRichText } from '../../richText/richText';

import type { AudioBlockObject } from '@udus/notion-types';
import type { AudioBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertAudioResponseToBlock = async (
  block: AudioBlockObjectResponse,
  options: FetchOptions,
): Promise<AudioBlockObject> => {
  return {
    ...block,
    audio: {
      ...block.audio,
      caption: await convertResponseToRichText(block.audio.caption, options),
    },
  } satisfies AudioBlockObject;
};
