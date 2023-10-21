import { RichTextItem } from "./RichTextItem.js";

type Props = { richTextItems: Array<RichTextItem> };

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
