import RichTexts from "../RichTexts/RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  BulletedListItemComponentBlockObject,
} from "@/types";

const BulletedListItem: React.FC<
  BlockComponentProps<BulletedListItemComponentBlockObject>
> = ({ block }) => {
  return (
    <li
      id={block.id}
      className={`notion_block notion_bulleted_list_item notion_color_${block.bulleted_list_item.color}`}
    >
      <RichTexts richTexts={block.bulleted_list_item.rich_text} />
      <div>{block.children && <Blocks blocks={block.children} />}</div>
    </li>
  );
};

export default BulletedListItem;
