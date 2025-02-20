import { RichText } from "../../RichText/RichText";
import { BlockList } from "../BlockList";

import type { ToggleBlock } from "@udus/notion-types";

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
