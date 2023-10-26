import { RichText } from "../../RichText/RichText.js";
import { BlockList } from "../BlockList.js";

import type { Heading2Block } from "../../../types/notion/blocks/heading2.js";

export const OpenedHeading2: Heading2Block = ({ block }) => {
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
              <RichText richText={block.heading_2.rich_text} />
            </h2>
          </summary>
          <div className="notion_toggle_details">
            {block.heading_2.children && (
              <BlockList blocks={block.heading_2.children} />
            )}
          </div>
        </details>
      ) : (
        <h2
          id={block.id}
          className={`notion_heading notion_heading_2 notion_color_${block.heading_2.color}`}
        >
          <RichText richText={block.heading_2.rich_text} />
        </h2>
      )}
    </>
  );
};
