import type { DividerBlock } from "../../types/notion/block/divider.js";

export const Divider: DividerBlock = ({ block }) => {
  return <hr id={block.id} className="notion-block notion-divider" />;
};
