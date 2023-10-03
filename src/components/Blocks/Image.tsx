import RichTexts from "../RichTexts/RichTexts";

import type { BlockComponentProps, ImageComponentBlockObject } from "@/types";

type Props = BlockComponentProps<ImageComponentBlockObject>;

const Image: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_block notion_image">
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
      {block.image.caption && (
        <span className="notion_image_caption">
          <RichTexts richTexts={block.image.caption} />
        </span>
      )}
    </div>
  );
};

export default Image;
