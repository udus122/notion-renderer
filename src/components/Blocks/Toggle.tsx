import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./Blocks.js";

import type { ToggleBlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<ToggleBlockObject>;

export const Toggle: React.FC<Props> = ({ block, mapper }) => {
  return (
    <details
      id={block.id}
      className={`notion_toggle notion_color_${block.toggle.color}`}
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
