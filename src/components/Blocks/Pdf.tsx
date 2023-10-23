import { RichText } from "../RichText/RichText.js";

import type { BlockProps, PdfBlockObject } from "@udus/notion-libs";

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
        <RichText richText={block.pdf.caption} />
      </div>
    </div>
  );
};
