import { useMapper } from "../Mapper/hooks.js";

import { Annotation } from "./Annotation/Annotation.js";

import type { RichTextItemProps } from "../../types/notion/richText/richTextItem.js";
import type { TextRichTextItemObject } from "../../types/notion/richText/text.js";

type Props = Omit<
  RichTextItemProps<TextRichTextItemObject>,
  "richTextItemMapper"
>;

export const Text: React.FC<Props> = ({ richText: richTextItem }) => {
  const { Link } = useMapper();

  return (
    <span className="notion-rich-text-type-text">
      <Annotation richTextItem={richTextItem}>
        {richTextItem.text.link ? (
          <Link href={richTextItem.text.link?.url}>
            {richTextItem.text.content}
          </Link>
        ) : (
          richTextItem.text.content
        )}
      </Annotation>
    </span>
  );
};
