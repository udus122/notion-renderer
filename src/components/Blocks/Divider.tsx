import type { DividerBlock } from "src/types/notion/blocks/divider.js";

export const Divider: DividerBlock = ({ block }) => {
  return <hr id={block.id} className="notion_divider" />;
};
