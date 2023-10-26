import type { TableRowBlock } from "../../types/notion/blocks/tableRow.js";

export const TableRow: TableRowBlock = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
