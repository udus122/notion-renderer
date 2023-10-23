import { useMapper } from "../mapper.js";

import { Annotation } from "./Annotation/Annotation.js";

import type { RichTextProps } from "./RichText.js";
import type { TextRichTextItem } from "@udus/notion-libs";

type Props = Omit<RichTextProps<TextRichTextItem>, "richTextItemMapper">;

export const Text: React.FC<Props> = ({ richText: richTextItem }) => {
  const { Link } = useMapper();

  return (
    <span className="notion_rich_text_type_text">
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
