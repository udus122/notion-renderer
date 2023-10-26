import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";
import { Icon } from "./Icon.js";

import type { BlockProps } from "./Block.js";
import type { CalloutBlockObject } from "../../types/notion.js";

type Props = BlockProps<CalloutBlockObject>;

export const Callout: React.FC<Props> = ({ block }) => {
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
