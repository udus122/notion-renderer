import type { RichTextItem } from "@udus/notion-libs";

type Props = React.ComponentProps<"del"> & {
  richTextItem: RichTextItem;
};

export const Strikethrough: React.FC<Props> = ({ children }) => {
  return <del className="notion_strikethrough">{children}</del>;
};
