import { RichText } from "../RichText/RichText.js";

import { Blocks } from "./Blocks.js";

import type { BlockObject } from "../index.js";
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type ParagraphBlockObject = ParagraphBlockObjectResponse & {
  paragraph: { children?: Array<BlockObject> };
};

type Props = BlockProps<ParagraphBlockObject>;

export const Paragraph: React.FC<Props> = ({ block }) => {
  return (
    <div
      id={block.id}
      className={`notion_paragraph notion_color_${block.paragraph.color}`}
    >
      <p>
        <RichText richTextItems={block.paragraph.rich_text} />
      </p>
      {block.paragraph.children && (
        <div className={"notion_paragraph_children"}>
          <Blocks blocks={block.paragraph.children} />
        </div>
      )}
    </div>
  );
};
