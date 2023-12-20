import type { BlockBlockObject, BlockBlockProps } from "./block.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type CalloutBlockObject = CalloutBlockObjectResponse & {
  callout: {
    rich_text: Array<RichTextItem>;
    children?: Array<BlockBlockObject>;
  };
};

export type CalloutBlockProps = BlockBlockProps<CalloutBlockObject>;

export type CalloutBlock = ComponentType<CalloutBlockProps>;
