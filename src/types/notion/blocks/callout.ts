import type { BlockBlockObject } from "./block.js";
import type { BlockProps } from "../common.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type CalloutBlockObject = CalloutBlockObjectResponse & {
  callout: {
    rich_text: Array<RichTextItem>;
    children?: Array<BlockBlockObject>;
  };
};

export type CalloutBlockProps = BlockProps<CalloutBlockObject>;

export type CalloutBlock = ComponentType<CalloutBlockProps>;
