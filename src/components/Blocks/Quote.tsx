import { RichTexts } from "../RichTexts/RichTexts.js";

import { Blocks } from "./Blocks.js";

import type {
  BlockComponentProps,
  QuoteBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<QuoteBlockObjectComponent>;

export const Quote: React.FC<Props> = ({ block, mapper }) => {
  return (
    <blockquote
      id={block.id}
      className={`notion_quote notion_color_${block.quote.color}`}
    >
      <RichTexts richTexts={block.quote.rich_text} />
      {block.quote.children && (
        <div className={"notion_quote_children"}>
          <Blocks blocks={block.quote.children} mapper={mapper} />
        </div>
      )}
    </blockquote>
  );
};
