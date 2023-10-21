import type { BlockObject } from "./Block.js";
import type { UnsupportedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type UnsupportedBlockObject = UnsupportedBlockObjectResponse;

type Props = BlockProps<BlockObject>;

export const Unsupported: React.FC<Props> = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
