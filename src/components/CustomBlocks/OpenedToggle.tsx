import { Blocks } from "../Blocks/Blocks.js";
import { RichTexts } from "../RichTexts/RichTexts.js";

import type {
  BlockComponentProps,
  ToggleBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<ToggleBlockObjectComponent>;

export const OpenedToggle: React.FC<Props> = ({ block, mapper }) => {
  return (
    <details
      id={block.id}
      className={`notion_toggle notion_color_${block.toggle.color}`}
      open
    >
      <summary className="notion_toggle_summary">
        <RichTexts richTexts={block.toggle.rich_text} />
      </summary>
      <div className="notion_toggle_details">
        {block.toggle.children && (
          <Blocks blocks={block.toggle.children} mapper={mapper} />
        )}
      </div>
    </details>
  );
};
