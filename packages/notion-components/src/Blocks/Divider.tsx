import type { DividerBlock } from "@udus/notion-types";

export const Divider: DividerBlock = ({ block }) => {
  return <hr id={block.id} className="notion-block notion-divider" />;
};
