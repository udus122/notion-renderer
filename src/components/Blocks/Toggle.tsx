import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";

import type { ToggleBlock } from "../../types/notion/block/toggle.js";

export const Toggle: ToggleBlock = ({ block }) => {
  return (
    <details
      id={block.id}
      className={`notion-block notion-toggle notion-color-${block.toggle.color}`}
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
