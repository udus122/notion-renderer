import { Annotation } from "./Annotation/Annotation";
import { LinkText } from "./LinkText";

import type { RichTextItemProps } from "@udus/notion-types";
import type { TextRichTextItemObject } from "@udus/notion-types";

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
