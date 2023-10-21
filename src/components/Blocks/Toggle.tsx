import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./index.js";

import type { BlockObject } from "./Block.js";
import type { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockComponentProps } from "src/types/utils.js";

export type ToggleBlockObject = ToggleBlockObjectResponse & {
  toggle: { children?: Array<BlockObject> };
};

type Props = BlockComponentProps<ToggleBlockObject>;

export const Toggle: React.FC<Props> = ({ block, mapper }) => {
  return (
    <details
      id={block.id}
      className={`notion_toggle notion_color_${block.toggle.color}`}
    >
      <summary className="notion_toggle_summary">
        <RichTexts richTexts={block.toggle.rich_text} />
      </summary>
      <div className="notion_toggle_details">
        {block.toggle.children && (
          <Blocks blocks={block.toggle.children} mapper={mapper} />
        )}
      </div>
    </details>
  );
};
