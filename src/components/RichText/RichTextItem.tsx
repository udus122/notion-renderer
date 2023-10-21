import { InlineEquation, type EquationRichTextItem } from "./InlineEquation.js";
import { Mention, type MentionRichTextItem } from "./Mention.js";
import { Text, type TextRichTextItem } from "./Text.js";

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

const RichTextItemContent: React.FC<Props> = ({
  richTextItem,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  const mapper = {
    text: Text,
    equation: InlineEquation,
    mention: Mention,
    ...richTextItemMapper,
  };

  switch (richTextItem.type) {
    case "text": {
      const TypeText = mapper[richTextItem.type];
      return (
        <TypeText
          richTextItem={richTextItem}
          annotationMapper={annotationMapper}
          LinkComponent={LinkComponent}
        />
      );
    }
    case "equation": {
      const TypeEquation = mapper[richTextItem.type];
      return (
        <TypeEquation
          richTextItem={richTextItem}
          annotationMapper={annotationMapper}
          LinkComponent={LinkComponent}
        />
      );
    }
    case "mention": {
      const TypeMention = mapper[richTextItem.type];
      return (
        <TypeMention
          richTextItem={richTextItem}
          annotationMapper={annotationMapper}
          LinkComponent={LinkComponent}
        />
      );
    }
    default:
      console.warn(`${(richTextItem as { type: never }).type} is never.`);
      return null;
  }
};
