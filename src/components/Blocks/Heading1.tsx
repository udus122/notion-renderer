import RichTexts from "../RichTexts";

import type { BlockComponentProps } from "@/types";
import type { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ListBlockChildrenResponseEx } from "notionate";

type Props = BlockComponentProps<
  Heading1BlockObjectResponse & {
    children?: ListBlockChildrenResponseEx;
  }
>;

const Heading1: React.FC<Props> = ({ block }) => {
  return (
    <h1
      id={block.id}
      className={`notion_block notion_heading notion_heading_1 notion_color_${block.heading_1.color}`}
    >
      <RichTexts richText={block.heading_1.rich_text} />
    </h1>
  );
};

export default Heading1;
