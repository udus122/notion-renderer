import { RichText } from "../RichText/RichText";

import { BlockList } from "./BlockList";

import type { QuoteBlock } from "@udus/notion-types";

export const Quote: QuoteBlock = ({ block }) => {
  return (
    <blockquote
      id={block.id}
      className={`notion-block notion-quote notion-color-${block.quote.color}`}
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
