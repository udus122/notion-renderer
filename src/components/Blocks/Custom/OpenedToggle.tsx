import { RichText } from "../../RichText/RichText.js";
import { Blocks } from "../Blocks.js";

import type { ToggleBlockObject } from "../Toggle.js";
import type { BlockProps } from "src/types/utils.js";

type Props = BlockProps<ToggleBlockObject>;

export const OpenedToggle: React.FC<Props> = ({
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
      open
    >
      <summary className="notion_toggle_summary">
        <RichText
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
