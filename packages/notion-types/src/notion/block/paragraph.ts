import type { BlockBlockObject, BlockBlockProps } from "./block";
import type { RichTextType } from "../richText/richText";
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type ParagraphBlockObject = ParagraphBlockObjectResponse & {
  paragraph: {
    rich_text: RichTextType;
    children?: Array<BlockBlockObject>;
  };
};

export type ParagraphBlockProps = BlockBlockProps<ParagraphBlockObject>;

export type ParagraphBlock = ComponentType<ParagraphBlockProps>;
