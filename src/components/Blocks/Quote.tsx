import { RichText } from "../RichText/RichText.js";

import { Blocks } from "./Blocks.js";

import type { BlockObject } from "./Block.js";
import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type QuoteBlockObject = QuoteBlockObjectResponse & {
  quote: { children?: Array<BlockObject> };
};

type Props = BlockProps<QuoteBlockObject>;

export const Quote: React.FC<Props> = ({
  block,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <blockquote
      id={block.id}
      className={`notion_quote notion_color_${block.quote.color}`}
    >
      <RichText
        richTextItems={block.quote.rich_text}
        richTextItemMapper={richTextItemMapper}
        annotationMapper={annotationMapper}
        LinkComponent={LinkComponent}
      />
      {block.quote.children && (
        <div className={"notion_quote_children"}>
          <Blocks
            blocks={block.quote.children}
            blockMapper={blockMapper}
            richTextItemMapper={richTextItemMapper}
            annotationMapper={annotationMapper}
            LinkComponent={LinkComponent}
          />
        </div>
      )}
    </blockquote>
  );
};
