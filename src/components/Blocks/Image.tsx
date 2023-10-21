import { RichTexts } from "../RichTexts/index.js";

import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type ImageBlockObject = ImageBlockObjectResponse;

type Props = BlockProps<ImageBlockObject>;

export const Image: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_image">
      <img
        src={
          block.image.type == "external"
            ? block.image.external.url
            : block.image.type == "file"
            ? block.image.file.url
            : ""
        }
        alt={block.image.caption.map((b) => b.plain_text).join("")}
      />
      <div className="notion_caption notion_image_caption">
        <RichTexts richTexts={block.image.caption} />
      </div>
    </div>
  );
};
