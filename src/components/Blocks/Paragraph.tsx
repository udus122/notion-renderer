import { clsx } from "clsx";

import { RichTexts } from "@/components/RichTexts";
import { generateBlockColorClass } from "@/libs";

import type { BlockComponentProps } from "@/types";
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = BlockComponentProps<ParagraphBlockObjectResponse>;

const Paragraph: React.FC<Props> = ({ block }) => {
  const blockType = "notion_paragraph";
  const blockColor = generateBlockColorClass(block.paragraph.color);
  return (
    <div id={block.id} className={clsx("notion_block", blockType, blockColor)}>
      <p>
        <RichTexts richText={block.paragraph.rich_text} />
      </p>
      <div className={`${blockType}__children`}>
        {/* TODO: 子要素を再帰的にレンダリングするようにする
        <Blocks blocks={children}></Blocks> */}
      </div>
    </div>
  );
};

export default Paragraph;
