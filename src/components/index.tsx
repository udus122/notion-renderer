import type { Heading1BlockObject } from "src/libs/notion/blocks/heading1.js";
import type { Heading2BlockObject } from "src/libs/notion/blocks/heading2.js";
import type { Heading3BlockObject } from "src/libs/notion/blocks/heading3.js";
import type { ToggleBlockObject } from "src/libs/notion/blocks/toggle.js";

export * from "./Blocks/Blocks.js";
export * from "./RichText/RichText.js";

export * from "./Link.js";

export type TogglableBlockObjectComponent =
  | ToggleBlockObject
  | Heading1BlockObject
  | Heading2BlockObject
  | Heading3BlockObject;
