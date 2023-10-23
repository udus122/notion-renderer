import type { RichTextItem } from "@udus/notion-libs";

type Props = React.ComponentProps<"u"> & { richTextItem: RichTextItem };

export const Underline: React.FC<Props> = ({ children }) => {
  return <u className="notion_underline">{children}</u>;
};
