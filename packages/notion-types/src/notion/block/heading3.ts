import type { BlockBlockObject, BlockBlockProps } from "./block";
import type { RichTextItemType } from "../richText/richTextItem";
import type { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type Heading3BlockObject = Heading3BlockObjectResponse & {
  heading_3: {
    rich_text: Array<RichTextItemType>;
    children?: Array<BlockBlockObject>;
  };
};

export type Heading3BlockProps = BlockBlockProps<Heading3BlockObject>;

export type Heading3Block = ComponentType<Heading3BlockProps>;
