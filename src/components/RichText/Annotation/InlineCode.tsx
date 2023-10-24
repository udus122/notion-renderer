import type { RichTextItem } from "@udus/notion-libs";

type Props = React.ComponentProps<"code"> & {
  richTextItem?: RichTextItem;
};

export const InlineCode: React.FC<Props> = ({ children }) => {
  return <code className="notion_inline_code">{children}</code>;
};
