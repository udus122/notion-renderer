import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./index.js";

import type { BlockObject } from "./Block.js";
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type ParagraphBlockObject = ParagraphBlockObjectResponse & {
  paragraph: { children?: Array<BlockObject> };
};

type Props = BlockProps<ParagraphBlockObject>;

export const Paragraph: React.FC<Props> = ({
  block,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <div
      id={block.id}
      className={`notion_paragraph notion_color_${block.paragraph.color}`}
    >
      <p>
        <RichTexts
          richTextItems={block.paragraph.rich_text}
          richTextItemMapper={richTextItemMapper}
          annotationMapper={annotationMapper}
          LinkComponent={LinkComponent}
        />
      </p>
      {block.paragraph.children && (
        <div className={"notion_paragraph_children"}>
          <Blocks
            blocks={block.paragraph.children}
            blockMapper={blockMapper}
            richTextItemMapper={richTextItemMapper}
            annotationMapper={annotationMapper}
            LinkComponent={LinkComponent}
          />
        </div>
      )}
    </div>
  );
};
