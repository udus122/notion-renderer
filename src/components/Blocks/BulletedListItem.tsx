import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./index.js";

import type { BlockObject } from "./Block.js";
import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type React from "react";
import type { BlockProps } from "src/types/utils.js";

export type BulletedListItemBlockObject =
  BulletedListItemBlockObjectResponse & {
    bulleted_list_item: {
      children?: Array<BlockObject>;
    };
  };

type Props = BlockProps<BulletedListItemBlockObject>;

export const BulletedListItem: React.FC<Props> = ({
  block,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <li
      id={block.id}
      className={`notion_bulleted_list_item notion_color_${block.bulleted_list_item.color}`}
    >
      <RichTexts
        richTextItems={block.bulleted_list_item.rich_text}
        richTextItemMapper={richTextItemMapper}
        annotationMapper={annotationMapper}
        LinkComponent={LinkComponent}
      />
      <div>
        {block.bulleted_list_item.children && (
          <Blocks
            blocks={block.bulleted_list_item.children}
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
