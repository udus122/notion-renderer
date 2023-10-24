import type { RichTextItem } from "@udus/notion-libs";

type Props = React.ComponentProps<"em"> & {
  richTextItem: RichTextItem;
};

export const Italic: React.FC<Props> = ({ children }) => {
  return <em className="notion_italic">{children}</em>;
};
