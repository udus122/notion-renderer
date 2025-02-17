import type { StrikethroughAnnotationItem } from "@udus/notion-types";

export const Strikethrough: StrikethroughAnnotationItem = ({ children }) => {
  return <del className="notion-strikethrough">{children}</del>;
};
