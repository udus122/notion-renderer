import type { BlockBlockObject } from "./block.js";
import type { BlockProps } from "../common.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type Heading2BlockObject = Heading2BlockObjectResponse & {
  heading_2: {
    rich_text: Array<RichTextItem>;
    children?: Array<BlockBlockObject>;
  };
};

export type Heading2BlockProps = BlockProps<Heading2BlockObject>;

export type Heading2Block = ComponentType<Heading2BlockProps>;
