import RichTexts from "@/components/RichTexts/RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  ParagraphBlockObjectResponseWithChildren,
} from "@/types";

type Props = BlockComponentProps<ParagraphBlockObjectResponseWithChildren>;

const Paragraph: React.FC<Props> = ({ block }) => {
  return (
    <div
      id={block.id}
      className={`notion_block notion_paragraph notion_color_${block.paragraph.color}`}
    >
      <p>
        <RichTexts richText={block.paragraph.rich_text} />
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
