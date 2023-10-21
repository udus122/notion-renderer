import { RichText } from "../RichText/RichText.js";

import type { PdfBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type PdfBlockObject = PdfBlockObjectResponse;

type Props = BlockProps<PdfBlockObject>;

export const Pdf: React.FC<Props> = ({ block }) => {
  const pdfUrl =
    block.pdf.type == "external"
      ? block.pdf.external.url
      : block.pdf.type == "file"
      ? block.pdf.file.url
      : "";
  return (
    <div id={block.id} className="notion_pdf">
      <object
        type="application/pdf"
        data={
          block.pdf.type == "external"
            ? block.pdf.external.url
            : block.pdf.type == "file"
            ? block.pdf.file.url
            : ""
        }
      >
        Your browser does not support pdfs. You can download pdf file
        <a href={pdfUrl}>here</a>.
      </object>
      <div className="notion_caption notion_pdf_caption">
        <RichText richTextItems={block.pdf.caption} />
      </div>
    </div>
  );
};
