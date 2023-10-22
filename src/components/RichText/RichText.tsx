import { RichTextItem } from "./index.js";

import type { RichTextItem as RichTextItemType } from "../../libs/notion/richText/richTextItem.js";

type Props = { richText: Array<RichTextItemType> };

export const RichText: React.FC<Props> = ({ richText }) => {
  if (!richText) return null;

  return (
    <span className="notion_rich_text">
      {richText.map((item, index) => (
        <RichTextItem
          key={item?.id ?? `${index}-${item.plain_text}`}
          richText={item}
        />
      ))}
    </span>
  );
};
