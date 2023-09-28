import { clsx } from "clsx";

import { RichTexts } from "@/components/RichTexts";
import { generateBlockColorClass } from "@/libs";

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
  const blockColor = generateBlockColorClass(block.paragraph.color);

  return (
    <div
      id={block.id}
      className={clsx("notion_block", "notion_paragraph", blockColor)}
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
