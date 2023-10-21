import type { BlockObject } from "src/components/Blocks/Block.js";
import type { RichTextItem } from "src/components/RichTexts/RichText.js";
import type { LinkProps } from "src/index.js";

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
  blockMapper: object;
  richTextItemMapper: object;
  annotationMapper: object;
  LinkComponent: React.ComponentType<LinkProps>;
};

export type RichTextProps<T extends RichTextItem> = {
  richTextItem: T;
  richTextItemMapper: object;
  annotationMapper: object;
  LinkComponent: React.ComponentType<LinkProps>;
};
