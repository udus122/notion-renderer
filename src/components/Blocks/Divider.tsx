import type { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockComponentProps } from "src/types/utils.js";

export type DividerBlockObject = DividerBlockObjectResponse;

type Props = BlockComponentProps<DividerBlockObject>;

export const Divider: React.FC<Props> = ({ block }) => {
  return <hr id={block.id} className="notion_divider" />;
};
