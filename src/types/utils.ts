import type { BlockObject } from "../components/index.js";
import type { RichTextItem } from "../libs/notion/richText/richTextItem.ts";

export type Overwrite<T, U extends { [Key in keyof T]?: unknown }> = Omit<
  T,
  keyof U
> &
  U;

export type Result<T, E extends Error = Error> =
  | {
      payload: T;
      error?: undefined;
    }
  | {
      payload?: undefined;
      error: E;
    };

export type BlockProps<T extends BlockObject> = {
  block: T;
  blocks: Array<BlockObject>;
};

export type RichTextProps<T extends RichTextItem> = {
  richTextItem: T;
};
