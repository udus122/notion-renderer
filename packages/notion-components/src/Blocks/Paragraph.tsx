import { RichText } from "../RichText/RichText";

import { BlockList } from "./BlockList";

import type { ParagraphBlock } from "@udus/notion-types";

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
