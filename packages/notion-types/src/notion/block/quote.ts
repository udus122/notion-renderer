import type { BlockBlockObject, BlockBlockProps } from "./block";
import type { RichTextItemType } from "../richText/richTextItem";
import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type QuoteBlockObject = QuoteBlockObjectResponse & {
  quote: {
    rich_text: Array<RichTextItemType>;
    children?: Array<BlockBlockObject>;
  };
};

export type QuoteBlockProps = BlockBlockProps<QuoteBlockObject>;

export type QuoteBlock = ComponentType<QuoteBlockProps>;
