import { RichText } from "../../RichText/RichText.js";
import { BlockList } from "../BlockList.js";

import type { BlockProps } from "../Block.js";
import type { Heading3BlockObject } from "../../../types/notion.js";

type Props = BlockProps<Heading3BlockObject>;

export const OpenedHeading3: React.FC<Props> = ({ block }) => {
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
              <RichText richText={block.heading_3.rich_text} />
            </h3>
          </summary>
          <div className="notion_toggle_details">
            {block.heading_3.children && (
              <BlockList blocks={block.heading_3.children} />
            )}
          </div>
        </details>
      ) : (
        <h3
          id={block.id}
          className={`notion_heading notion_heading_3 notion_color_${block.heading_3.color}`}
        >
          <RichText richText={block.heading_3.rich_text} />
        </h3>
      )}
    </>
  );
};
