import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./index.js";

import type { BlockObject } from "./Block.js";
import type { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type Heading1BlockObject = Heading1BlockObjectResponse & {
  heading_1: { children?: Array<BlockObject> };
};

type Props = BlockProps<Heading1BlockObject>;

export const Heading1: React.FC<Props> = ({
  block,
  blocks,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <>
      {block.heading_1.is_toggleable ? (
        <details
          id={block.id}
          className={`notion_heading notion_heading_1 notion_toggle notion_color_${block.heading_1.color}`}
        >
          <summary className="notion_toggle_summary">
            <h1>
              <RichTexts
                richTextItems={block.heading_1.rich_text}
                richTextItemMapper={richTextItemMapper}
                annotationMapper={annotationMapper}
                LinkComponent={LinkComponent}
              />
            </h1>
          </summary>
          <div className="notion_toggle_details">
            {block.heading_1.children && (
              <Blocks
                blocks={block.heading_1.children}
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
          className={`notion_heading notion_heading_1 notion_color_${block.heading_1.color}`}
        >
          <RichTexts
            richTextItems={block.heading_1.rich_text}
            richTextItemMapper={richTextItemMapper}
            annotationMapper={annotationMapper}
            LinkComponent={LinkComponent}
          />
        </h1>
      )}
    </>
  );
};
