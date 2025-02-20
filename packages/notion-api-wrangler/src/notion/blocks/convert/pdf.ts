import { convertResponseToRichText } from "../../richText/richText";

import type { PdfBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { PdfBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

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
