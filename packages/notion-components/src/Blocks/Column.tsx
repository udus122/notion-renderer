import type { ColumnBlock } from "@udus/notion-types";

export const Column: ColumnBlock = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
