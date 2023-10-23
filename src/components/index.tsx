import type {
  Heading1BlockObject,
  Heading2BlockObject,
  Heading3BlockObject,
  ToggleBlockObject,
} from "@udus/notion-libs";

export * from "./Blocks/Blocks.js";
export * from "./RichText/RichText.js";

export * from "./Link.js";

export type TogglableBlockObjectComponent =
  | ToggleBlockObject
  | Heading1BlockObject
  | Heading2BlockObject
  | Heading3BlockObject;
