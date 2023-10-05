import RichTexts from "../RichTexts/RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  NumberedListItemComponentBlockObject,
} from "@/types";

const NumberedListItem: React.FC<
  BlockComponentProps<NumberedListItemComponentBlockObject>
> = ({ block }) => {
  return (
    <li
      id={block.id}
      className={`notion_block notion_numbered_list_item notion_color_${block.numbered_list_item.color}`}
    >
      <RichTexts richTexts={block.numbered_list_item.rich_text} />
      <div>{block.children && <Blocks blocks={block.children} />}</div>
    </li>
  );
};

export default NumberedListItem;
