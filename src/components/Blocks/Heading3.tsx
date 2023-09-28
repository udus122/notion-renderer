import { RichTexts } from "../RichTexts";

import type { BlockComponentProps } from "@/types";
import type { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ListBlockChildrenResponseEx } from "notionate";

type Props = BlockComponentProps<
  Heading3BlockObjectResponse & {
    children?: ListBlockChildrenResponseEx;
  }
>;

const Heading2: React.FC<Props> = ({ block }) => {
  return (
    <h3 id={block.id} className="notion_block notion_heading notion_heading_3">
      <RichTexts richText={block.heading_3.rich_text} />
    </h3>
  );
};

export default Heading2;
