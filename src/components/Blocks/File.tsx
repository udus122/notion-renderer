import { useMapper } from "../mapper.js";
import { RichText } from "../RichText/RichText.js";

import type { FileBlockObject } from "../../libs/notion/blocks/file.js";
import type { BlockProps } from "../../types/utils.js";

type Props = BlockProps<FileBlockObject>;

export const File: React.FC<Props> = ({ block }) => {
  const { Link } = useMapper();

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
      <Link href={fileUrl}>
        <div className="notion_file_title">
          <img
            src="https://www.notion.so/icons/document_gray.svg"
            alt="File icon in a file block"
            width={20}
            height={20}
          />{" "}
          {filename}
        </div>
      </Link>
      <div className="notion_caption notion_file_caption">
        <RichText richText={block.file.caption} />
      </div>
    </div>
  );
};
