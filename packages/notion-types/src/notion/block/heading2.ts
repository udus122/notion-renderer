import type { BlockBlockObject, BlockBlockProps } from "./block.js";
import type { RichTextItemType } from "../richText/richTextItem.js";
import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type Heading2BlockObject = Heading2BlockObjectResponse & {
  heading_2: {
    rich_text: Array<RichTextItemType>;
    children?: Array<BlockBlockObject>;
  };
};

export type Heading2BlockProps = BlockBlockProps<Heading2BlockObject>;

export type Heading2Block = ComponentType<Heading2BlockProps>;
