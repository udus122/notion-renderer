import type { BlockBlockObject, BlockBlockProps } from "./block.js";
import type { RichText } from "../richText/richText.js";
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type ParagraphBlockObject = ParagraphBlockObjectResponse & {
  paragraph: {
    rich_text: RichText;
    children?: Array<BlockBlockObject>;
  };
};

export type ParagraphBlockProps = BlockBlockProps<ParagraphBlockObject>;

export type ParagraphBlock = ComponentType<ParagraphBlockProps>;
