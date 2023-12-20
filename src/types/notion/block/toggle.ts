import type { BlockBlockObject, BlockBlockProps } from "./block.js";
import type { RichTextItemType } from "../richText/richTextItem.js";
import type { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type ToggleBlockObject = ToggleBlockObjectResponse & {
  toggle: {
    rich_text: Array<RichTextItemType>;
    children?: Array<BlockBlockObject>;
  };
};

export type ToggleBlockProps = BlockBlockProps<ToggleBlockObject>;

export type ToggleBlock = ComponentType<ToggleBlockProps>;
