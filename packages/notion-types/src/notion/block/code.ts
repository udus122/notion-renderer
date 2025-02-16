import type { BlockBlockProps } from "./block.js";
import type { Overwrite } from "../../utils.js";
import type { RichTextItemType } from "../richText/richTextItem.js";
import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type CodeBlockObject = Overwrite<
  CodeBlockObjectResponse,
  {
    code: {
      language: string;
      rich_text: Array<RichTextItemType>;
      caption: Array<RichTextItemType>;
    };
  }
>;

export type CodeBlockProps = BlockBlockProps<CodeBlockObject>;

export type CodeBlock = ComponentType<CodeBlockProps>;
