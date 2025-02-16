import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";

import type { ParagraphBlock } from "../../types/notion/block/paragraph.js";

export const Paragraph: ParagraphBlock = ({ block }) => {
  return (
    <div
      id={block.id}
      className={`notion-block notion-paragraph notion-color-${block.paragraph.color}`}
    >
      <p>
        <RichText richText={block.paragraph.rich_text} />
      </p>
      {block.paragraph.children && (
        <div className={"notion-paragraph-children"}>
          <BlockList blocks={block.paragraph.children} />
        </div>
      )}
    </div>
  );
};
