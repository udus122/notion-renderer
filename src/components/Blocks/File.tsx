import { File as FileComponent } from "../Common/File.js";
import { useMapper } from "../hooks.js";
import { RichText } from "../RichText/RichText.js";

import type { FileBlock } from "../../types/notion/blocks/file.js";

export const File: FileBlock = ({ block }) => {
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
    <div id={block.id} className="notion-file">
      <FileComponent file={block.file} />
      <div className="notion-caption notion-file-caption">
        <RichText richText={block.file.caption} />
      </div>
    </div>
  );
};
