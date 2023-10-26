import type { RichTextItem } from "../../../types/notion.js";

type Props = React.ComponentProps<"em"> & {
  richTextItem: RichTextItem;
};

export const Italic: React.FC<Props> = ({ children }) => {
  return <em className="notion_italic">{children}</em>;
};
