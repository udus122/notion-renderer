import type { StrikethroughAnnotationItem } from "../../../types/notion/annotation/strikethrough.js";

export const Strikethrough: StrikethroughAnnotationItem = ({ children }) => {
  return <del className="notion_strikethrough">{children}</del>;
};
