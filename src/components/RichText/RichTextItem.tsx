import { type RichTextItem as RichTextItemType } from "../../libs/notion/richText/richTextItem.js";
import { useMapper } from "../mapper.js";

import type { RichTextProps } from "../../types/utils.js";

type Props = RichTextProps<RichTextItemType>;

export const RichTextItem: React.FC<Props> = (props) => {
  if (!props.richText) return null;
  return (
    <span className="notion_rich_text_item">
      <RichTextItemContent {...props} />
    </span>
  );
};

const RichTextItemContent: React.FC<Props> = ({ richText: richTextItem }) => {
  const { richTextItemMapper } = useMapper();

  switch (richTextItem.type) {
    case "text": {
      const TypeText = richTextItemMapper[richTextItem.type];
      return <TypeText richText={richTextItem} />;
    }
    case "equation": {
      const TypeEquation = richTextItemMapper[richTextItem.type];
      return <TypeEquation richText={richTextItem} />;
    }
    case "mention": {
      const TypeMention = richTextItemMapper[richTextItem.type];
      return <TypeMention richText={richTextItem} />;
    }
    default:
      console.warn(`${(richTextItem as { type: never }).type} is never.`);
      return null;
  }
};
