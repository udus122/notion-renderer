import type { BlockComponentProps } from "@/types";
import type { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = BlockComponentProps<DividerBlockObjectResponse>;

const Divider: React.FC<Props> = ({ block }) => {
  return <hr id={block.id} className="notion_divider" />;
};

export default Divider;
