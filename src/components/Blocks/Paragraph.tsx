import { RichText } from "../RichText/RichText.js";

import { Blocks } from "./Blocks.js";

import type { ParagraphBlockObject } from "../../libs/notion/blocks/paragraph.js";
import type { BlockProps } from "../../types/utils.js";
import type React from "react";

type Props = BlockProps<ParagraphBlockObject>;

export const Paragraph: React.FC<Props> = ({ block }) => {
  return (
    <div
      id={block.id}
      className={`notion_paragraph notion_color_${block.paragraph.color}`}
    >
      <p>
        <RichText richTextItems={block.paragraph.rich_text} />
      </p>
      {block.paragraph.children && (
        <div className={"notion_paragraph_children"}>
          <Blocks blocks={block.paragraph.children} />
        </div>
      )}
    </div>
  );
};
