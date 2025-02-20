import { RichText } from "../RichText/RichText";

import { BlockList } from "./BlockList";

import type { ToggleBlock } from "@udus/notion-types";

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
