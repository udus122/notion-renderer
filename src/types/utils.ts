import type { BlockObject } from "src/components/Blocks/Block.js";
import type { RichTextItem } from "src/components/RichTexts/RichText.js";

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

export type BlockComponentProps<T extends BlockObject> = {
  block: T;
  blocks: Array<BlockObject>;
  mapper?: object;
};

export type RichTextComponentProps<T extends RichTextItem> = {
  richTextItem: T;
  mapper?: object;
};
