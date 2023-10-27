import { RichText } from "../../RichText/RichText.js";
import { BlockList } from "../BlockList.js";

import type { ToggleBlock } from "../../../types/notion/blocks/toggle.js";

export const OpenedToggle: ToggleBlock = ({ block }) => {
  return (
    <details
      id={block.id}
      className={`notion_toggle notion_color_${block.toggle.color}`}
      open
    >
      <summary className="notion_toggle_summary">
        <RichText richText={block.toggle.rich_text} />
      </summary>
      <div className="notion_toggle_details">
        {block.toggle.children && <BlockList blocks={block.toggle.children} />}
      </div>
    </details>
  );
};
