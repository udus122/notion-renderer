import { Annotations } from "../Annotation/Annotation.js";

import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

type Props = React.ComponentProps<"a"> & {
  richTextItem: TextRichTextItemResponse;
};

export const Link: React.FC<Props> = ({ richTextItem }) => (
  <a href={richTextItem.text.link?.url} className="notion_link">
    <Annotations richTextItem={richTextItem}>
      richTextItem.text.content
    </Annotations>
  </a>
);
