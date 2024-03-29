import type { ItalicAnnotationItem } from "../../../types/notion/annotation/italic.js";

export const Italic: ItalicAnnotationItem = ({ children }) => {
  return <em className="notion-italic">{children}</em>;
};
