import { Annotation } from "./Annotation/Annotation.js";
import { LinkText } from "./LinkText.js";

import type { RichTextItemProps } from "../../types/notion/richText/richTextItem.js";
import type { TextRichTextItemObject } from "../../types/notion/richText/text.js";

type Props = Omit<
  RichTextItemProps<TextRichTextItemObject>,
  "richTextItemMapper"
>;

export const Text: React.FC<Props> = ({ richText: richTextItem }) => {
  return (
    <span className="notion-rich-text-type-text">
      <Annotation richTextItem={richTextItem}>
        {richTextItem.text.link ? (
          <LinkText richTextText={richTextItem.text} />
        ) : (
          richTextItem.text.content
        )}
      </Annotation>
    </span>
  );
};
