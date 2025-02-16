import type { ColumnBlock } from "../../types/notion/block/column.js";

export const Column: ColumnBlock = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
