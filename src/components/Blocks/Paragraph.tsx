import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./Blocks.js";

import type { BlockObject } from "./Block.js";
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockComponentProps } from "src/types/utils.js";

export type ParagraphBlockObject = ParagraphBlockObjectResponse & {
  paragraph: { children?: Array<BlockObject> };
};

type Props = BlockComponentProps<ParagraphBlockObject>;

export const Paragraph: React.FC<Props> = ({ block, mapper }) => {
  return (
    <div
      id={block.id}
      className={`notion_paragraph notion_color_${block.paragraph.color}`}
    >
      <p>
        <RichTexts richTexts={block.paragraph.rich_text} />
      </p>
      {block.paragraph.children && (
        <div className={"notion_paragraph_children"}>
          <Blocks blocks={block.paragraph.children} mapper={mapper} />
        </div>
      )}
    </div>
  );
};
