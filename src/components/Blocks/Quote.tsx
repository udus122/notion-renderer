import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./index.js";

import type { BlockObject } from "./Block.js";
import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type QuoteBlockObject = QuoteBlockObjectResponse & {
  quote: { children?: Array<BlockObject> };
};

type Props = BlockProps<QuoteBlockObject>;

export const Quote: React.FC<Props> = ({ block, richTextMapper: mapper }) => {
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
