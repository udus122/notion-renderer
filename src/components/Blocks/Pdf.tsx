import RichTexts from "../RichTexts/RichTexts";

import type { BlockComponentProps, PdfBlockObjectComponent } from "@/types";

type Props = BlockComponentProps<PdfBlockObjectComponent>;

const Pdf: React.FC<Props> = ({ block }) => {
  const pdfUrl =
    block.pdf.type == "external"
      ? block.pdf.external.url
      : block.pdf.type == "file"
      ? block.pdf.file.url
      : "";
  return (
    <div id={block.id} className="notion_pdf">
      <object
        style={{ blockSize: "100rem", inlineSize: "100%" }}
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
      <div className="notion_pdf_caption">
        <RichTexts richTexts={block.pdf.caption} />
      </div>
    </div>
  );
};

export default Pdf;
