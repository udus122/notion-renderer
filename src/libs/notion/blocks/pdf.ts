import { convertResponseToRichText } from "../richText/richText.js";

import type { PdfBlockObject } from "../../../types/notion/blocks/pdf.js";
import type { PdfBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertPdfResponseToBlock = async (
  block: PdfBlockObjectResponse,
) => {
  return {
    ...block,
    pdf: {
      ...block.pdf,
      caption: await convertResponseToRichText(block.pdf.caption),
    },
  } satisfies PdfBlockObject;
};
