import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = React.ComponentProps<"a"> & {
  richTextItem: TextRichTextItemResponse;
};

export const Link: React.FC<Props> = ({ richTextItem, children }) => (
  <a href={richTextItem.text.link?.url} className="notion_link">
    {children}
  </a>
);
