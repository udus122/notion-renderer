import type { RichTextItem } from "src/types/notion/richText/richTextItem.js";

type Props = React.ComponentProps<"em"> & {
  richTextItem: RichTextItem;
};

export const Italic: React.FC<Props> = ({ children }) => {
  return <em className="notion_italic">{children}</em>;
};
