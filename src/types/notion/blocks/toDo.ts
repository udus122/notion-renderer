import type { BlockBlockObject } from "./block.js";
import type { BlockProps } from "../common.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { ToDoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type ToDoBlockObject = ToDoBlockObjectResponse & {
  to_do: { rich_text: Array<RichTextItem>; children?: Array<BlockBlockObject> };
};

export type ToDoBlockProps = BlockProps<ToDoBlockObject>;

export type ToDoBlock = ComponentType<ToDoBlockProps>;
