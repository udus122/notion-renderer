import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";

import type { BlockProps } from "./Block.js";
import type { ParagraphBlockObject } from "../../types/notion.js";
import type React from "react";

type Props = BlockProps<ParagraphBlockObject>;

export const Paragraph: React.FC<Props> = ({ block }) => {
  return (
    <div
      id={block.id}
      className={`notion_paragraph notion_color_${block.paragraph.color}`}
    >
      <p>
        <RichText richText={block.paragraph.rich_text} />
      </p>
      {block.paragraph.children && (
        <div className={"notion_paragraph_children"}>
          <BlockList blocks={block.paragraph.children} />
        </div>
      )}
    </div>
  );
};
