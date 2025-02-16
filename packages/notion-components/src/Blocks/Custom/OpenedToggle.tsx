import { RichText } from "../../RichText/RichText.js";
import { BlockList } from "../BlockList.js";

import type { ToggleBlock } from "../../../types/notion/block/toggle.js";

export const OpenedToggle: ToggleBlock = ({ block }) => {
  return (
    <details
      id={block.id}
      className={`notion-toggle notion-color-${block.toggle.color}`}
      open
    >
      <summary className="notion-toggle-summary">
        <RichText richText={block.toggle.rich_text} />
      </summary>
      <div className="notion-toggle-details">
        {block.toggle.children && <BlockList blocks={block.toggle.children} />}
      </div>
    </details>
  );
};
