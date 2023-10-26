import type { RichTextItem } from "src/types/notion/richText/richTextItem.js";

type Props = React.ComponentProps<"del"> & {
  richTextItem: RichTextItem;
};

export const Strikethrough: React.FC<Props> = ({ children }) => {
  return <del className="notion_strikethrough">{children}</del>;
};
