import { RichTexts } from "../RichTexts/RichTexts";

import { Blocks } from "./Blocks";

import type {
  BlockComponentProps,
  ToggleBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<ToggleBlockObjectComponent>;

export const Toggle: React.FC<Props> = ({ block }) => {
  return (
    <details
      id={block.id}
      className={`notion_toggle notion_color_${block.toggle.color}`}
    >
      <summary className="notion_toggle_summary">
        <RichTexts richTexts={block.toggle.rich_text} />
      </summary>
      <div className="notion_toggle_details">
        {block.toggle.children && <Blocks blocks={block.toggle.children} />}
      </div>
    </details>
  );
};
