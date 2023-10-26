import type { BlockBlockObject } from "./block.js";
import type { BlockProps } from "../common.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type ToggleBlockObject = ToggleBlockObjectResponse & {
  toggle: {
    rich_text: Array<RichTextItem>;
    children?: Array<BlockBlockObject>;
  };
};

export type ToggleBlockProps = BlockProps<ToggleBlockObject>;

export type ToggleBlock = ComponentType<ToggleBlockProps>;
