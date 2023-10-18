import { RichTexts } from "../RichTexts/RichTexts.js";

import { Blocks } from "./Blocks.js";

import type {
  BlockComponentProps,
  NumberedListItemBlockObjectComponent,
} from "../../types/components.js";

export const NumberedListItem: React.FC<
  BlockComponentProps<NumberedListItemBlockObjectComponent>
> = ({ block }) => {
  return (
    <li
      id={block.id}
      className={`notion_numbered_list_item notion_color_${block.numbered_list_item.color}`}
    >
      <RichTexts richTexts={block.numbered_list_item.rich_text} />
      <div>
        {block.numbered_list_item.children && (
          <Blocks blocks={block.numbered_list_item.children} />
        )}
      </div>
    </li>
  );
};
