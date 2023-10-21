import { Blocks } from "../Blocks/Blocks.js";
import { RichTexts } from "../RichTexts/index.js";

import type { Heading2BlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<Heading2BlockObject>;

export const OpenedHeading2: React.FC<Props> = ({ block, mapper }) => {
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
              <RichTexts richTexts={block.heading_2.rich_text} />
            </h2>
          </summary>
          <div className="notion_toggle_details">
            {block.heading_2.children && (
              <Blocks blocks={block.heading_2.children} mapper={mapper} />
            )}
          </div>
        </details>
      ) : (
        <h2
          id={block.id}
          className={`notion_heading notion_heading_2 notion_color_${block.heading_2.color}`}
        >
          <RichTexts richTexts={block.heading_2.rich_text} />
        </h2>
      )}
    </>
  );
};
