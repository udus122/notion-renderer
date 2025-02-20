import type { BlockBlockObject, BlockBlockProps } from "./block";
import type { RichTextItemType } from "../richText/richTextItem";
import type { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type ToggleBlockObject = ToggleBlockObjectResponse & {
  toggle: {
    rich_text: Array<RichTextItemType>;
    children?: Array<BlockBlockObject>;
  };
};

export type ToggleBlockProps = BlockBlockProps<ToggleBlockObject>;

export type ToggleBlock = ComponentType<ToggleBlockProps>;
