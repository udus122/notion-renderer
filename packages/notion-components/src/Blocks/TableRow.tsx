import type { TableRowBlock } from "@udus/notion-types";

export const TableRow: TableRowBlock = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
