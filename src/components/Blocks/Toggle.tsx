import RichTexts from "../RichTexts/RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  ToggleBlockObjectResponseWithChildren,
} from "@/types";

type Props = BlockComponentProps<ToggleBlockObjectResponseWithChildren>;

const Toggle: React.FC<Props> = ({ block }) => {
  return (
    <details
      id={block.id}
      className={`notion_block notion_toggle notion_color_${block.toggle.color}`}
    >
      <summary className="notion_toggle_summary">
        <RichTexts richTexts={block.toggle.rich_text} />
      </summary>
      <div className="notion_toggle_details">
        {block.children && <Blocks blocks={block.children} />}
      </div>
    </details>
  );
};

export default Toggle;
