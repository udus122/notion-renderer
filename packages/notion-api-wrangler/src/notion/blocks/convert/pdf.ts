import { convertResponseToRichText } from '../../richText/richText';

import type { PdfBlockObject } from '@udus/notion-types';
import type { PdfBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertPdfResponseToBlock = async (
  block: PdfBlockObjectResponse,
  options: FetchOptions,
): Promise<PdfBlockObject> => {
  return {
    ...block,
    pdf: {
      ...block.pdf,
      caption: await convertResponseToRichText(block.pdf.caption, options),
    },
  } satisfies PdfBlockObject;
};
