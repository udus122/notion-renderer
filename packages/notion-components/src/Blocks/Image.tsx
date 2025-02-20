import { RichText } from "../RichText/RichText";

import type { ImageBlock } from "@udus/notion-types";

export const Image: ImageBlock = ({ block }) => {
  return (
    <div id={block.id} className="notion-block notion-image">
      <img
        src={
          block.image.type === "external"
            ? block.image.external.url
            : block.image.type === "file"
              ? block.image.file.url
              : ""
        }
        alt={block.image.caption.map((b) => b.plain_text).join("")}
      />
      <div className="notion-caption notion-image-caption">
        <RichText richText={block.image.caption} />
      </div>
    </div>
  );
};
