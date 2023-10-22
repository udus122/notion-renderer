import { useMapper } from "../mapper.js";

import { type EquationRichTextItem } from "./InlineEquation.js";
import { type MentionRichTextItem } from "./Mention.js";
import { type TextRichTextItem } from "./Text.js";

import type { RichTextProps } from "src/types/utils.js";

export type RichTextItem =
  | TextRichTextItem
  | MentionRichTextItem
  | EquationRichTextItem;

type Props = RichTextProps<RichTextItem>;

export const RichTextItem: React.FC<Props> = (props) => {
  if (!props.richTextItem) return null;
  return (
    <span className="notion_rich_text_item">
      <RichTextItemContent {...props} />
    </span>
  );
};

const RichTextItemContent: React.FC<Props> = ({ richTextItem }) => {
  const { richTextItemMapper } = useMapper();

  switch (richTextItem.type) {
    case "text": {
      const TypeText = richTextItemMapper[richTextItem.type];
      return <TypeText richTextItem={richTextItem} />;
    }
    case "equation": {
      const TypeEquation = richTextItemMapper[richTextItem.type];
      return <TypeEquation richTextItem={richTextItem} />;
    }
    case "mention": {
      const TypeMention = richTextItemMapper[richTextItem.type];
      return <TypeMention richTextItem={richTextItem} />;
    }
    default:
      console.warn(`${(richTextItem as { type: never }).type} is never.`);
      return null;
  }
};
