import { InlineEquation, type EquationRichTextItem } from "./InlineEquation.js";
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
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  if (!richTextItem) return null;
  const mapper = {
    text: Text,
    equation: InlineEquation,
    mention: Mention,
    ...richTextItemMapper,
  };
  if (!richTextItem) return null;

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
