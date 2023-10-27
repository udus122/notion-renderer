import type { BlockBlockObject } from "./block.js";
import type { BlockProps } from "../common.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type ParagraphBlockObject = ParagraphBlockObjectResponse & {
  paragraph: {
    rich_text: Array<RichTextItem>;
    children?: Array<BlockBlockObject>;
  };
};

export type ParagraphBlockProps = BlockProps<ParagraphBlockObject>;

export type ParagraphBlock = ComponentType<ParagraphBlockProps>;