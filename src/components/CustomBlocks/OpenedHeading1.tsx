import { Blocks } from "../Blocks/index.js";
import { RichTexts } from "../RichTexts/index.js";

import type { Heading1BlockObject } from "../Blocks/Heading1.js";
import type { BlockProps } from "src/types/utils.js";

type Props = BlockProps<Heading1BlockObject>;

export const OpenedHeading1: React.FC<Props> = ({
  block,
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
          open
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
