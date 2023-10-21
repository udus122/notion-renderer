import { Annotations } from "./Annotation/Annotation.js";

import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { RichTextProps } from "src/types/utils.js";

export type TextRichTextItem = TextRichTextItemResponse;

type Props = Omit<RichTextProps<TextRichTextItem>, "richTextItemMapper">;

export const Text: React.FC<Props> = ({
  richTextItem,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <span className="notion_rich_text_type_text">
      <Annotations
        richTextItem={richTextItem}
        annotationMapper={annotationMapper}
      >
        {richTextItem.text.link ? (
          <LinkComponent href={richTextItem.text.link?.url}>
            {richTextItem.text.content}
          </LinkComponent>
        ) : (
          richTextItem.text.content
        )}
      </Annotations>
    </span>
  );
};
