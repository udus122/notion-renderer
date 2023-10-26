import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";

import type { QuoteBlock } from "src/types/notion/blocks/quote.js";

export const Quote: QuoteBlock = ({ block }) => {
  return (
    <blockquote
      id={block.id}
      className={`notion_quote notion_color_${block.quote.color}`}
    >
      <RichText richText={block.quote.rich_text} />
      {block.quote.children && (
        <div className={"notion_quote_children"}>
          <BlockList blocks={block.quote.children} />
        </div>
      )}
    </blockquote>
  );
};
