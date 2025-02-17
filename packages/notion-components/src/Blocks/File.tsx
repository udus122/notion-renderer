import { File as FileComponent } from "../Common/File";
import { RichText } from "../RichText/RichText";

import type { FileBlock } from "@udus/notion-types";

export const File: FileBlock = ({ block }) => {
  return (
    <div id={block.id} className="notion-block notion-file-block">
      <FileComponent file={block.file} />
      <div className="notion-caption notion-file-caption">
        <RichText richText={block.file.caption} />
      </div>
    </div>
  );
};
