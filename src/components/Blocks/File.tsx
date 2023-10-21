import { Link } from "../Link.js";
import { RichTexts } from "../RichTexts/index.js";

import type { FileBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type FileBlockObject = FileBlockObjectResponse;

type Props = BlockProps<FileBlockObject>;

export const File: React.FC<Props> = ({
  block,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
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
        <RichTexts
          richTextItems={block.file.caption}
          richTextItemMapper={richTextItemMapper}
          annotationMapper={annotationMapper}
          LinkComponent={LinkComponent}
        />
      </div>
    </div>
  );
};
