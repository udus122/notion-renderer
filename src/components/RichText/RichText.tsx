import { RichTextItem } from "./index.js";

import type { RichTextItem as RichTextItemType } from "../../libs/notion/richText/richTextItem.js";

type Props = { richTextItems: Array<RichTextItemType> };

export const RichText: React.FC<Props> = ({ richTextItems }) => {
  if (!richTextItems) return null;

  return (
    <span className="notion_rich_text">
      {richTextItems.map((richTextItem, index) => (
        <RichTextItem
          key={`${index}-${richTextItem.plain_text}`}
          richTextItem={richTextItem}
        />
      ))}
    </span>
  );
};
