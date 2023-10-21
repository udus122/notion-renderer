import { RichTexts } from "../RichTexts/index.js";

import type { ImageBlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<ImageBlockObject>;

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
