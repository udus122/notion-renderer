import { InlineEquation, type EquationRichTextItem } from "./InlineEquation.js";
import { Link } from "./Link.js";
import { Mention, type MentionRichTextItem } from "./Mention.js";
import { Text, type TextRichTextItem } from "./Text.js";

import type { RichTextProps } from "src/types/utils.js";

export type RichTextItem =
  | TextRichTextItem
  | MentionRichTextItem
  | EquationRichTextItem;

type Props = RichTextProps<RichTextItem>;

export const RichText: React.FC<Props> = ({
  richTextItem,
  richTextItemMapper = {},
}) => {
  if (!richTextItem) return null;
  const richTextComponentMapper = {
    text: Text,
    equation: InlineEquation,
    mention: Mention,
    link: Link,
    ...richTextItemMapper,
  };
  if (!richTextItem) return null;

  switch (richTextItem.type) {
    case "text": {
      const TypeText = richTextComponentMapper[richTextItem.type];
      return (
        <TypeText
          richTextItem={richTextItem}
          richTextItemMapper={richTextItemMapper}
        />
      );
    }
    case "equation": {
      const TypeEquation = richTextComponentMapper[richTextItem.type];
      return (
        <TypeEquation
          richTextItem={richTextItem}
          richTextItemMapper={richTextItemMapper}
        />
      );
    }
    case "mention": {
      const TypeMention = richTextComponentMapper[richTextItem.type];
      return (
        <TypeMention
          richTextItem={richTextItem}
          richTextItemMapper={richTextItemMapper}
        />
      );
    }
    default:
      console.warn(`${(richTextItem as { type: never }).type} is never.`);
      return null;
  }
};
