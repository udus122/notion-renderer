import { RichTexts } from "../RichTexts/RichTexts.js";

import { Blocks } from "./Blocks.js";
import { Icon } from "./Icon.js";

import type {
  BlockComponentProps,
  CalloutBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<CalloutBlockObjectComponent>;

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
