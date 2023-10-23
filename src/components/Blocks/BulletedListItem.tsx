import { RichText } from "../RichText/RichText.js";

import { Blocks } from "./Blocks.js";

import type {
  BlockProps,
  BulletedListItemBlockObject,
} from "@udus/notion-libs";
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
          <Blocks blocks={block.bulleted_list_item.children} />
        )}
      </div>
    </li>
  );
};
