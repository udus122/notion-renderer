import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./Blocks.js";

import type { BulletedListItemBlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<BulletedListItemBlockObject>;

export const BulletedListItem: React.FC<Props> = ({ block, mapper }) => {
  return (
    <li
      id={block.id}
      className={`notion_bulleted_list_item notion_color_${block.bulleted_list_item.color}`}
    >
      <RichTexts richTexts={block.bulleted_list_item.rich_text} />
      <div>
        {block.bulleted_list_item.children && (
          <Blocks blocks={block.bulleted_list_item.children} mapper={mapper} />
        )}
      </div>
    </li>
  );
};
