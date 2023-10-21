import { RichText } from "../../RichText/RichText.js";
import { Blocks } from "../Blocks.js";

import type { Heading3BlockObject } from "../Heading3.js";
import type { BlockProps } from "src/types/utils.js";

type Props = BlockProps<Heading3BlockObject>;

export const OpenedHeading3: React.FC<Props> = ({
  block,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <>
      {block.heading_3.is_toggleable ? (
        <details
          id={block.id}
          className={`notion_heading notion_heading_3 notion_toggle notion_color_${block.heading_3.color}`}
          open
        >
          <summary className="notion_toggle_summary">
            <h3>
              <RichText
                richTextItems={block.heading_3.rich_text}
                richTextItemMapper={richTextItemMapper}
                annotationMapper={annotationMapper}
                LinkComponent={LinkComponent}
              />
            </h3>
          </summary>
          <div className="notion_toggle_details">
            {block.heading_3.children && (
              <Blocks
                blocks={block.heading_3.children}
                blockMapper={blockMapper}
                richTextItemMapper={richTextItemMapper}
                annotationMapper={annotationMapper}
                LinkComponent={LinkComponent}
              />
            )}
          </div>
        </details>
      ) : (
        <h3
          id={block.id}
          className={`notion_heading notion_heading_3 notion_color_${block.heading_3.color}`}
        >
          <RichText
            richTextItems={block.heading_3.rich_text}
            richTextItemMapper={richTextItemMapper}
            annotationMapper={annotationMapper}
            LinkComponent={LinkComponent}
          />
        </h3>
      )}
    </>
  );
};
