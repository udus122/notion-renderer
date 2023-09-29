import RichTexts from "../RichTexts";

import Blocks from ".";

import type {
  BlockComponentProps,
  QuoteBlockObjectResponseWithChildren,
} from "@/types";

type Props = BlockComponentProps<QuoteBlockObjectResponseWithChildren>;

const Quote: React.FC<Props> = ({ block }) => {
  return (
    <blockquote
      id={block.id}
      className={`notion_block notion_quote notion_color_$${block.quote.color}`}
    >
      <RichTexts richText={block.quote.rich_text} />
      {block?.children && (
        <div className={"notion_quote_children"}>
          <Blocks blocks={block.children} />{" "}
        </div>
      )}
    </blockquote>
  );
};

export default Quote;
