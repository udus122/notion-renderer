import type { BlockProps } from "./Block.js";
import type { BlockObject } from "@udus/notion-libs";

type Props = BlockProps<BlockObject>;

export const Unsupported: React.FC<Props> = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
