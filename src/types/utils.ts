import type { BlockObject } from "src/components/Blocks/Block.js";

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
  mapper: object;
};
