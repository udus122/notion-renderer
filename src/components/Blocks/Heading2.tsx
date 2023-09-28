import { RichTexts } from "../RichTexts";

import type { BlockComponentProps } from "@/types";
import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ListBlockChildrenResponseEx } from "notionate";

type Props = BlockComponentProps<
  Heading2BlockObjectResponse & {
    children?: ListBlockChildrenResponseEx;
  }
>;

const Heading2: React.FC<Props> = ({ block }) => {
  return (
    <h2 id={block.id} className="notion_block notion_heading notion_heading_2">
      <RichTexts richText={block.heading_2.rich_text} />
    </h2>
  );
};

export default Heading2;
