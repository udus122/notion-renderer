import { RichText } from "../../RichText/RichText.js";
import { Blocks } from "../Blocks.js";

import type { BlockProps } from "../Block.js";
import type { Heading1BlockObject } from "@udus/notion-libs";

type Props = BlockProps<Heading1BlockObject>;

export const OpenedHeading1: React.FC<Props> = ({ block }) => {
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
              <RichText richText={block.heading_1.rich_text} />
            </h1>
          </summary>
          <div className="notion_toggle_details">
            {block.heading_1.children && (
              <Blocks blocks={block.heading_1.children} />
            )}
          </div>
        </details>
      ) : (
        <h1
          id={block.id}
          className={`notion_heading notion_heading_1 notion_color_${block.heading_1.color}`}
        >
          <RichText richText={block.heading_1.rich_text} />
        </h1>
      )}
    </>
  );
};
