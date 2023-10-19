import { RichTexts } from "../RichTexts/RichTexts.js";

import { Blocks } from "./Blocks.js";

import type {
  BlockComponentProps,
  ParagraphBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<ParagraphBlockObjectComponent>;

export const Paragraph: React.FC<Props> = ({ block }) => {
  return (
    <div
      id={block.id}
      className={`notion_paragraph notion_color_${block.paragraph.color}`}
    >
      <p>
        <RichTexts richTexts={block.paragraph.rich_text} />
      </p>
      {block.paragraph.children && (
        <div className={"notion_paragraph_children"}>
          <Blocks blocks={block.paragraph.children} />
        </div>
      )}
    </div>
  );
};
