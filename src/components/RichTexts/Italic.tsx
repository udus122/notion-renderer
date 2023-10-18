import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

type Props = React.ComponentProps<"em"> & {
  richTextItem: RichTextItemResponse;
};

export const Italic: React.FC<Props> = ({ children }) => {
  return <em className="notion_italic">{children}</em>;
};
