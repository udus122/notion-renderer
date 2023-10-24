import { RichText } from "../RichText/RichText.js";

import { Blocks } from "./Blocks.js";

import type { BlockProps } from "./Block.js";
import type { ToggleBlockObject } from "@udus/notion-libs";

type Props = BlockProps<ToggleBlockObject>;

export const Toggle: React.FC<Props> = ({ block }) => {
  return (
    <details
      id={block.id}
      className={`notion_toggle notion_color_${block.toggle.color}`}
    >
      <summary className="notion_toggle_summary">
        <RichText richText={block.toggle.rich_text} />
      </summary>
      <div className="notion_toggle_details">
        {block.toggle.children && <Blocks blocks={block.toggle.children} />}
      </div>
    </details>
  );
};
