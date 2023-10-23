import type { RichTextItem } from "@udus/notion-libs";
import type React from "react";

type Props = React.ComponentProps<"strong"> & {
  richTextItem?: RichTextItem;
};

export const Bold: React.FC<Props> = ({ children }) => {
  return <strong className="notion_bold">{children}</strong>;
};
