import { Annotations } from "./Annotation/Annotation.js";
import { Link } from "./Link.js";

import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { RichTextComponentProps } from "src/types/utils.js";

export type TextRichTextItem = TextRichTextItemResponse;

type Props = RichTextComponentProps<TextRichTextItem>;

export const Text: React.FC<Props> = ({ richTextItem, mapper = {} }) => {
  const annotationMapper = {
    link: Link,
    ...mapper,
  };

  const LinkComponent = annotationMapper["link"];

  return (
    <span className="notion_rich_text_type_text">
      <Annotations richTextItem={richTextItem}>
        {richTextItem.text.link ? (
          <LinkComponent richTextItem={richTextItem} />
        ) : (
          richTextItem.text.content
        )}
      </Annotations>
    </span>
  );
};
