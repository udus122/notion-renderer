import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";

import type { BlockProps } from "./Block.js";
import type { BulletedListItemBlockObject } from "../../types/notion.js";
import type React from "react";

type Props = BlockProps<BulletedListItemBlockObject>;

export const BulletedListItem: React.FC<Props> = ({ block }) => {
  return (
    <li
      id={block.id}
      className={`notion_bulleted_list_item notion_color_${block.bulleted_list_item.color}`}
    >
      <RichText richText={block.bulleted_list_item.rich_text} />
      <div>
        {block.bulleted_list_item.children && (
          <BlockList blocks={block.bulleted_list_item.children} />
        )}
      </div>
    </li>
  );
};
