import type { BlockBlockObject, BlockBlockProps } from "./block.js";
import type { RichTextItemType } from "../richText/richTextItem.js";
import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type QuoteBlockObject = QuoteBlockObjectResponse & {
  quote: {
    rich_text: Array<RichTextItemType>;
    children?: Array<BlockBlockObject>;
  };
};

export type QuoteBlockProps = BlockBlockProps<QuoteBlockObject>;

export type QuoteBlock = ComponentType<QuoteBlockProps>;
