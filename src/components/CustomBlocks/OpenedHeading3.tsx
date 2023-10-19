import { Blocks } from "../Blocks/Blocks.js";
import { RichTexts } from "../RichTexts/RichTexts.js";

import type {
  BlockComponentProps,
  Heading3BlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<Heading3BlockObjectComponent>;

export const OpenedHeading3: React.FC<Props> = ({ block, mapper }) => {
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
              <RichTexts richTexts={block.heading_3.rich_text} />
            </h3>
          </summary>
          <div className="notion_toggle_details">
            {block.heading_3.children && (
              <Blocks blocks={block.heading_3.children} mapper={mapper} />
            )}
          </div>
        </details>
      ) : (
        <h3
          id={block.id}
          className={`notion_heading notion_heading_3 notion_color_${block.heading_3.color}`}
        >
          <RichTexts richTexts={block.heading_3.rich_text} />
        </h3>
      )}
    </>
  );
};
