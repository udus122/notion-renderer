import type { UnsupportedBlock } from "@udus/notion-types";

export const Unsupported: UnsupportedBlock = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
