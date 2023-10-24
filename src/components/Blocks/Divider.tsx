import type { BlockProps } from "./Block.js";
import type { DividerBlockObject } from "@udus/notion-libs";

type Props = BlockProps<DividerBlockObject>;

export const Divider: React.FC<Props> = ({ block }) => {
  return <hr id={block.id} className="notion_divider" />;
};
