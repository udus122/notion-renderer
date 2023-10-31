import type { Overwrite } from "../../utils.js";
import type { BlockBlockProps } from "./block.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type CodeBlockObject = Overwrite<
  CodeBlockObjectResponse,
  {
    code: {
      language: string;
      rich_text: Array<RichTextItem>;
      caption: Array<RichTextItem>;
    };
  }
>;

export type CodeBlockProps = BlockBlockProps<CodeBlockObject>;

export type CodeBlock = ComponentType<CodeBlockProps>;
