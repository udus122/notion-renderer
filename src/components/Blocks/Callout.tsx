import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";
import { Icon } from "../Icon.js";

import type { CalloutBlock } from "src/types/notion/blocks/callout.js";

export const Callout: CalloutBlock = ({ block }) => {
  return (
    <div
      id={block.id}
      className={`notion_callout notion_color_${block.callout.color}`}
    >
      <span className="notion_callout_icon">
        <Icon icon={block.callout.icon} />
      </span>
      <div className="notion_callout_content">
        <span>
          <RichText richText={block.callout.rich_text} />
        </span>
        {block.callout.children && (
          <BlockList blocks={block.callout.children} />
        )}
      </div>
    </div>
  );
};
