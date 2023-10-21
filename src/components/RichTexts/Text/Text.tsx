import { Annotations } from "../Annotation/Annotation.js";

import { Link } from "./Link.js";

import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

const defaultAnnotationMapper = {
  link: Link,
};

type Props = {
  richTextItem: TextRichTextItemResponse;
  customMapper?: object;
};

export const Text: React.FC<Props> = ({ richTextItem, customMapper }) => {
  const annotationMapper = {
    ...defaultAnnotationMapper,
    ...customMapper,
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
