import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./index.js";

import type { BlockObject } from "./Block.js";
import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type Heading2BlockObject = Heading2BlockObjectResponse & {
  heading_2: { children?: Array<BlockObject> };
};

type Props = BlockProps<Heading2BlockObject>;

export const Heading2: React.FC<Props> = ({
  block,
  blocks,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <>
      {block.heading_2.is_toggleable ? (
        <details
          id={block.id}
          className={`notion_heading notion_heading_2 notion_toggle notion_color_${block.heading_2.color}`}
        >
          <summary className="notion_toggle_summary">
            <h2>
              <RichTexts
                richTextItems={block.heading_2.rich_text}
                richTextItemMapper={richTextItemMapper}
                annotationMapper={annotationMapper}
                LinkComponent={LinkComponent}
              />
            </h2>
          </summary>
          <div className="notion_toggle_details">
            {block.heading_2.children && (
              <Blocks
                blocks={block.heading_2.children}
                blockMapper={blockMapper}
                richTextItemMapper={richTextItemMapper}
                annotationMapper={annotationMapper}
                LinkComponent={LinkComponent}
              />
            )}
          </div>
        </details>
      ) : (
        <h1
          id={block.id}
          className={`notion_heading notion_heading_2 notion_color_${block.heading_2.color}`}
        >
          <RichTexts
            richTextItems={block.heading_2.rich_text}
            richTextItemMapper={richTextItemMapper}
            annotationMapper={annotationMapper}
            LinkComponent={LinkComponent}
          />
        </h1>
      )}
    </>
  );
};
