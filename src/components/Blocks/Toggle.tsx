import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./index.js";

import type { BlockObject } from "./Block.js";
import type { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type ToggleBlockObject = ToggleBlockObjectResponse & {
  toggle: { children?: Array<BlockObject> };
};

type Props = BlockProps<ToggleBlockObject>;

export const Toggle: React.FC<Props> = ({
  block,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <details
      id={block.id}
      className={`notion_toggle notion_color_${block.toggle.color}`}
    >
      <summary className="notion_toggle_summary">
        <RichTexts
          richTextItems={block.toggle.rich_text}
          richTextItemMapper={richTextItemMapper}
          annotationMapper={annotationMapper}
          LinkComponent={LinkComponent}
        />
      </summary>
      <div className="notion_toggle_details">
        {block.toggle.children && (
          <Blocks
            blocks={block.toggle.children}
            blockMapper={blockMapper}
            richTextItemMapper={richTextItemMapper}
            annotationMapper={annotationMapper}
            LinkComponent={LinkComponent}
          />
        )}
      </div>
    </details>
  );
};
