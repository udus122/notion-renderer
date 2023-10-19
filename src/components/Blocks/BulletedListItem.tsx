import { RichTexts } from "../RichTexts/RichTexts.js";

import { Blocks } from "./Blocks.js";

import type {
  BlockComponentProps,
  BulletedListItemBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<BulletedListItemBlockObjectComponent>;

export const BulletedListItem: React.FC<Props> = ({ block }) => {
  return (
    <li
      id={block.id}
      className={`notion_bulleted_list_item notion_color_${block.bulleted_list_item.color}`}
    >
      <RichTexts richTexts={block.bulleted_list_item.rich_text} />
      <div>
        {block.bulleted_list_item.children && (
          <Blocks blocks={block.bulleted_list_item.children} />
        )}
      </div>
    </li>
  );
};
