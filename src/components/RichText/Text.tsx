import { useMapper } from "../Blocks/mapper.js";

import { Annotation } from "./Annotation/Annotation.js";

import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { RichTextProps } from "src/types/utils.js";

export type TextRichTextItem = TextRichTextItemResponse;

type Props = Omit<RichTextProps<TextRichTextItem>, "richTextItemMapper">;

export const Text: React.FC<Props> = ({ richTextItem }) => {
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
