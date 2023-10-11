import RichTexts from "../RichTexts/RichTexts";

import Blocks from "./Blocks";
import Icon from "./Icon";

import type {
  BlockComponentProps,
  CalloutBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<CalloutBlockObjectComponent>;

const Callout: React.FC<Props> = ({ block }) => {
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
        {block.callout.children && <Blocks blocks={block.callout.children} />}
      </div>
    </div>
  );
};

export default Callout;
