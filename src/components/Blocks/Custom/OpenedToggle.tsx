import { RichText } from "../../RichText/RichText.js";
import { BlockList } from "../BlockList.js";

import type { BlockProps } from "../Block.js";
import type { ToggleBlockObject } from "@udus/notion-libs";

type Props = BlockProps<ToggleBlockObject>;

export const OpenedToggle: React.FC<Props> = ({ block }) => {
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
