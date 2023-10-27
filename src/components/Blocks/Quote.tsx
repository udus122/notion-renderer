import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";

import type { QuoteBlock } from "src/types/notion/blocks/quote.js";

export const Quote: QuoteBlock = ({ block }) => {
  return (
    <blockquote
      id={block.id}
      className={`notion-quote notion-color-${block.quote.color}`}
    >
      <RichText richText={block.quote.rich_text} />
      {block.quote.children && (
        <div className={"notion-quote-children"}>
          <BlockList blocks={block.quote.children} />
        </div>
      )}
    </blockquote>
  );
};
