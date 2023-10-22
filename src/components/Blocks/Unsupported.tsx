import type { BlockObject } from "../../libs/notion/blocks/blocks.js";
import type { BlockProps } from "../../types/utils.js";

type Props = BlockProps<BlockObject>;

export const Unsupported: React.FC<Props> = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
