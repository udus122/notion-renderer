import { File as FileComponent } from "../Common/File.js";
import { RichText } from "../RichText/RichText.js";

import type { FileBlock } from "../../types/notion/block/file.js";

export const File: FileBlock = ({ block }) => {
  return (
    <div id={block.id} className="notion-file-block">
      <FileComponent file={block.file} />
      <div className="notion-caption notion-file-caption">
        <RichText richText={block.file.caption} />
      </div>
    </div>
  );
};
