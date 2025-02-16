import { Icon } from "../Common/Icon.js";
import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";

import type { CalloutBlock } from "../../types/notion/block/callout.js";

export const Callout: CalloutBlock = ({ block }) => {
  return (
    <div
      id={block.id}
      className={`notion-block notion-callout notion-color-${block.callout.color}`}
    >
      <span className="notion-callout-icon">
        <Icon icon={block.callout.icon} />
      </span>
      <div className="notion-callout-content">
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
