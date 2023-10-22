import { RichText } from "../RichText/RichText.js";

import { Blocks } from "./Blocks.js";

import type { Heading3BlockObject } from "../../libs/notion/blocks/heading3.js";
import type { BlockProps } from "../../types/utils.js";

type Props = BlockProps<Heading3BlockObject>;

export const Heading3: React.FC<Props> = ({ block }) => {
  return (
    <>
      {block.heading_3.is_toggleable ? (
        <details
          id={block.id}
          className={`notion_heading notion_heading_3 notion_toggle notion_color_${block.heading_3.color}`}
        >
          <summary className="notion_toggle_summary">
            <h3>
              <RichText richText={block.heading_3.rich_text} />
            </h3>
          </summary>
          <div className="notion_toggle_details">
            {block.heading_3.children && (
              <Blocks blocks={block.heading_3.children} />
            )}
          </div>
        </details>
      ) : (
        <h1
          id={block.id}
          className={`notion_heading notion_heading_3 notion_color_${block.heading_3.color}`}
        >
          <RichText richText={block.heading_3.rich_text} />
        </h1>
      )}
    </>
  );
};
