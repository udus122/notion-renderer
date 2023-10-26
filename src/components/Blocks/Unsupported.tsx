import type { UnsupportedBlock } from "../../types/notion/blocks/unsupported.js";

export const Unsupported: UnsupportedBlock = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
