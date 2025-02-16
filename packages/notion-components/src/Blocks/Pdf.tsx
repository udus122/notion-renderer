import { RichText } from "../RichText/RichText.js";

import type { PdfBlock } from "../../types/notion/block/pdf.js";

export const Pdf: PdfBlock = ({ block }) => {
  const pdfUrl =
    block.pdf.type == "external"
      ? block.pdf.external.url
      : block.pdf.type == "file"
        ? block.pdf.file.url
        : "";
  return (
    <div id={block.id} className="notion-block notion-pdf">
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
        Your browser does not support pdfs. You can download pdf file{" "}
        <a href={pdfUrl}>here</a>.
      </object>
      <div className="notion-caption notion-pdf-caption">
        <RichText richText={block.pdf.caption} />
      </div>
    </div>
  );
};
