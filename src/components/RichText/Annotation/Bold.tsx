import type React from "react";
import type { RichTextItem } from "src/types/notion/richText/richTextItem.js";

type Props = React.ComponentProps<"strong"> & {
  richTextItem?: RichTextItem;
};

export const Bold: React.FC<Props> = ({ children }) => {
  return <strong className="notion_bold">{children}</strong>;
};
