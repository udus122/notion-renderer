import type { DividerBlockObject } from "../../libs/notion/blocks/divider.js";
import type { BlockProps } from "../../types/utils.js";

type Props = BlockProps<DividerBlockObject>;

export const Divider: React.FC<Props> = ({ block }) => {
  return <hr id={block.id} className="notion_divider" />;
};
