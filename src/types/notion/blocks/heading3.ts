import type { BlockBlockObject } from "./block.js";
import type { BlockProps } from "../common.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type Heading3BlockObject = Heading3BlockObjectResponse & {
  heading_3: {
    rich_text: Array<RichTextItem>;
    children?: Array<BlockBlockObject>;
  };
};

export type Heading3BlockProps = BlockProps<Heading3BlockObject>;

export type Heading3Block = ComponentType<Heading3BlockProps>;