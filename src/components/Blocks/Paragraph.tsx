import { RichTexts } from "@/components/RichTexts";

import Blocks from ".";

import type { BlockComponentProps } from "@/types";
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ListBlockChildrenResponseEx } from "notionate";

type Props = BlockComponentProps<
  ParagraphBlockObjectResponse & {
    children?: ListBlockChildrenResponseEx;
  }
>;

const Paragraph: React.FC<Props> = ({ block }) => {
  return (
    <div
      id={block.id}
      className={`notion_block notion_paragraph notion_${block.paragraph.color}`}
    >
      <p>
        <RichTexts richText={block.paragraph.rich_text} />
      </p>
      {block.children && (
        <div className={"notion_paragraph_children"}>
          <Blocks blocks={block.children} />
        </div>
      )}
    </div>
  );
};

export default Paragraph;
