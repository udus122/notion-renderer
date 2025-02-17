import type { ItalicAnnotationItem } from "@udus/notion-types";

export const Italic: ItalicAnnotationItem = ({ children }) => {
  return <em className="notion-italic">{children}</em>;
};
