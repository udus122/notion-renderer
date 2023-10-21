import { RichText } from "../RichText/RichText.js";

import { Blocks } from "./Blocks.js";

import type { BlockObject } from "../index.js";
import type { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type ToggleBlockObject = ToggleBlockObjectResponse & {
  toggle: { children?: Array<BlockObject> };
};

type Props = BlockProps<ToggleBlockObject>;

export const Toggle: React.FC<Props> = ({ block }) => {
  return (
    <details
      id={block.id}
      className={`notion_toggle notion_color_${block.toggle.color}`}
    >
      <summary className="notion_toggle_summary">
        <RichText richTextItems={block.toggle.rich_text} />
      </summary>
      <div className="notion_toggle_details">
        {block.toggle.children && <Blocks blocks={block.toggle.children} />}
      </div>
    </details>
  );
};
