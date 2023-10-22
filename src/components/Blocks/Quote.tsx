import { RichText } from "../RichText/RichText.js";

import { Blocks } from "./Blocks.js";

import type { QuoteBlockObject } from "../../libs/notion/blocks/quote.js";
import type { BlockProps } from "../../types/utils.js";

type Props = BlockProps<QuoteBlockObject>;

export const Quote: React.FC<Props> = ({ block }) => {
  return (
    <blockquote
      id={block.id}
      className={`notion_quote notion_color_${block.quote.color}`}
    >
      <RichText richTextItems={block.quote.rich_text} />
      {block.quote.children && (
        <div className={"notion_quote_children"}>
          <Blocks blocks={block.quote.children} />
        </div>
      )}
    </blockquote>
  );
};
