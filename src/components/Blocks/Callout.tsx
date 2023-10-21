import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./Blocks.js";
import { Icon } from "./Icon.js";

import type { CalloutBlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<CalloutBlockObject>;

export const Callout: React.FC<Props> = ({ block, mapper }) => {
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
          <RichTexts richTexts={block.callout.rich_text} />
        </span>
        {block.callout.children && (
          <Blocks blocks={block.callout.children} mapper={mapper} />
        )}
      </div>
    </div>
  );
};
