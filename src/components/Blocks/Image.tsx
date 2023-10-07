import RichTexts from "../RichTexts/RichTexts";

import type { BlockComponentProps, ImageBlockObjectComponent } from "@/types";

type Props = BlockComponentProps<ImageBlockObjectComponent>;

const Image: React.FC<Props> = ({ block }) => {
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
      <div className="notion_image_caption">
        <RichTexts richTexts={block.image.caption} />
      </div>
    </div>
  );
};

export default Image;
