import type { BlockProps } from "./Block.js";
import type { DividerBlockObject } from "../../types/notion.js";

type Props = BlockProps<DividerBlockObject>;

export const Divider: React.FC<Props> = ({ block }) => {
  return <hr id={block.id} className="notion_divider" />;
};
