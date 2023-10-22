import { convertResponseToRichText } from "../richText/richText.js";

import type { TextRequest } from "../../../types/notion.js";
import type { Overwrite } from "../../../types/utils.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { PdfBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type PdfBlockObject = Overwrite<
  PdfBlockObjectResponse,
  {
    pdf:
      | {
          type: "external";
          external: {
            url: TextRequest;
          };
          caption: Array<RichTextItem>;
        }
      | {
          type: "file";
          file: {
            url: string;
            expiry_time: string;
          };
          caption: Array<RichTextItem>;
        };
  }
>;

export const convertPdfResponseToBlock = async (
  block: PdfBlockObjectResponse
) => {
  return {
    ...block,
    pdf: {
      ...block.pdf,
      caption: await convertResponseToRichText(block.pdf.caption),
    },
  } satisfies PdfBlockObject;
};
