import RichTexts from "../RichTexts/RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  QuoteBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<QuoteBlockObjectComponent>;

const Quote: React.FC<Props> = ({ block }) => {
  return (
    <blockquote
      id={block.id}
      className={`notion_quote notion_color_${block.quote.color}`}
    >
      <RichTexts richTexts={block.quote.rich_text} />
      {block?.children && (
        <div className={"notion_quote_children"}>
          <Blocks blocks={block.children} />{" "}
        </div>
      )}
    </blockquote>
  );
};

export default Quote;
