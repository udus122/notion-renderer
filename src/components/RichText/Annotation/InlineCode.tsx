import type { RichTextItem } from "../../../types/notion.js";

type Props = React.ComponentProps<"code"> & {
  richTextItem?: RichTextItem;
};

export const InlineCode: React.FC<Props> = ({ children }) => {
  return <code className="notion_inline_code">{children}</code>;
};
