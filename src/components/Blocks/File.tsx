import { RichTexts } from "../RichTexts/RichTexts.js";

import type {
  BlockComponentProps,
  FileBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<FileBlockObjectComponent>;

export const File: React.FC<Props> = ({ block }) => {
  const fileUrl =
    block.file.type == "external"
      ? block.file.external.url
      : block.file.type == "file"
      ? block.file.file.url
      : "";
  const filename = decodeURIComponent(
    new URL(fileUrl).pathname.split("/").slice(-1)[0]
  );

  return (
    <div id={block.id} className="notion_file">
      <a className="notion_link" href={fileUrl}>
        <div className="notion_file_title">
          <img
            src="https://www.notion.so/icons/document_gray.svg"
            alt="File icon in a file block"
            width={20}
            height={20}
          />{" "}
          {filename}
        </div>
      </a>
      <div className="notion_caption notion_file_caption">
        <RichTexts richTexts={block.file.caption} />
      </div>
    </div>
  );
};
