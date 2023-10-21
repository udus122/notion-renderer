import { RichText } from "../RichText/RichText.js";

import { Blocks } from "./Blocks.js";

import type { BlockObject } from "./Block.js";
import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type NumberedListItemBlockObject =
  NumberedListItemBlockObjectResponse & {
    numbered_list_item: { children?: Array<BlockObject> };
  };

export const NumberedListItem: React.FC<
  BlockProps<NumberedListItemBlockObject>
> = ({
  block,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <li
      id={block.id}
      className={`notion_numbered_list_item notion_color_${block.numbered_list_item.color}`}
    >
      <RichText
        richTextItems={block.numbered_list_item.rich_text}
        richTextItemMapper={richTextItemMapper}
        annotationMapper={annotationMapper}
        LinkComponent={LinkComponent}
      />
      <div>
        {block.numbered_list_item.children && (
          <Blocks
            blocks={block.numbered_list_item.children}
            blockMapper={blockMapper}
            richTextItemMapper={richTextItemMapper}
            annotationMapper={annotationMapper}
            LinkComponent={LinkComponent}
          />
        )}
      </div>
    </li>
  );
};
