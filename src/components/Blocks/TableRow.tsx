import type { TableRowBlock } from "../../types/notion/block/tableRow.js";

export const TableRow: TableRowBlock = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
