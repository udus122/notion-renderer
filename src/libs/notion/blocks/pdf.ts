import type { PdfBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { PdfBlockObject } from "src/components/Blocks/Pdf.js";

export const convertPdfResponseToBlock = async (
  block: PdfBlockObjectResponse
) => {
  return { ...block } satisfies PdfBlockObject;
};
