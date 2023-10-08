import RichTexts from "@/components/RichTexts/RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  ParagraphBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<ParagraphBlockObjectComponent>;

const Paragraph: React.FC<Props> = ({ block }) => {
  return (
    <div
      id={block.id}
      className={`notion_paragraph notion_color_${block.paragraph.color}`}
    >
      <p>
        <RichTexts richTexts={block.paragraph.rich_text} />
      </p>
      {block.children && (
        <div className={"notion_paragraph_children"}>
          <Blocks blocks={block.children} />
        </div>
      )}
    </div>
  );
};

export default Paragraph;
