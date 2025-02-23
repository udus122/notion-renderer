import { convertEquationRichTextItemResponse } from './equation';
import { convertMentionRichTextItemResponse } from './mention';
import { convertTextRichTextItemResponse } from './text';

import type { RichTextItemType } from '@udus/notion-types';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';

export const convertResponseToRichTextItem = async (
  response: RichTextItemResponse,
  options: FetchOptions,
): Promise<RichTextItemType> => {
  switch (response.type) {
    case 'text': {
      return convertTextRichTextItemResponse(response);
    }
    case 'equation': {
      return await convertEquationRichTextItemResponse(response);
    }
    case 'mention': {
      return await convertMentionRichTextItemResponse(response, options);
    }
    default: {
      return response;
    }
  }
};
