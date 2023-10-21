import { Blocks } from "../Blocks/index.js";
import { RichTexts } from "../RichTexts/index.js";

import type { Heading2BlockObject } from "../Blocks/Heading2.js";
import type { BlockProps } from "src/types/utils.js";

type Props = BlockProps<Heading2BlockObject>;

export const OpenedHeading2: React.FC<Props> = ({
  block,
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
          open
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
        <h2
          id={block.id}
          className={`notion_heading notion_heading_2 notion_color_${block.heading_2.color}`}
        >
          <RichTexts
            richTextItems={block.heading_2.rich_text}
            richTextItemMapper={richTextItemMapper}
            annotationMapper={annotationMapper}
            LinkComponent={LinkComponent}
          />
        </h2>
      )}
    </>
  );
};
