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

export type BlockProps<T extends BlockObject> = {
  block: T;
  blocks: Array<BlockObject>;
  blockMapper?: object;
  richTextMapper?: object;
  annotationMapper?: object;
  linkMapper?: object;
};

export type RichTextProps<T extends RichTextItem> = {
  richTextItem: T;
  richTextItemMapper?: object;
  annotationMapper?: object;
  linkMapper?: object;
};
