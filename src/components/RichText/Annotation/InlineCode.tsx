import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

type Props = React.ComponentProps<"code"> & {
  richTextItem?: RichTextItemResponse;
};

export const InlineCode: React.FC<Props> = ({ children }) => {
  return <code className="notion_inline_code">{children}</code>;
};
