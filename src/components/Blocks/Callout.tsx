import RichTexts from "../RichTexts/RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  CalloutBlockObjectResponseWithChildren,
} from "@/types";

type Props = BlockComponentProps<CalloutBlockObjectResponseWithChildren>;

const Callout: React.FC<Props> = ({ block }) => {
  return (
    <div
      id={block.id}
      className={`notion_block notion_callout notion_color_${block.callout.color}`}
    >
      <CalloutIcon icon={block.callout.icon} />
      <div className="notion_callout_content">
        <span>
          <RichTexts richTexts={block.callout.rich_text} />
        </span>
        {block.children && <Blocks blocks={block.children} />}
      </div>
    </div>
  );
};

export default Callout;

export const CalloutIcon = ({
  icon,
}: {
  icon: CalloutBlockObjectResponseWithChildren["callout"]["icon"];
}) => {
  if (!icon) return null;

  switch (icon.type) {
    case "emoji":
      return (
        <span className="notion_callout_icon notion_icon_emoji">
          {icon.emoji}
        </span>
      );
    case "external":
      return (
        <span className="notion_callout_icon notion_icon_external">
          <img src={icon.external.url} alt="notion callout icon" />
        </span>
      );
    case "file":
      return (
        <span className="notion_callout_icon notion_icon_file">
          <img src={icon.file.url} alt="notion callout icon" />
        </span>
      );
    default:
      return null;
  }
};
