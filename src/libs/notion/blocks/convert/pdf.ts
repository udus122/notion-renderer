import { convertResponseToRichText } from "../../richText/richText.js";

import type { PdfBlockObject } from "../../../../types/notion/block/pdf.js";
import type { Client } from "@notionhq/client";
import type { PdfBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertPdfResponseToBlock = async (
  block: PdfBlockObjectResponse,
  client: Client,
): Promise<PdfBlockObject> => {
  return {
    ...block,
    pdf: {
      ...block.pdf,
      caption: await convertResponseToRichText(block.pdf.caption, client),
    },
  } satisfies PdfBlockObject;
};
