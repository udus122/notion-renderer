import type { UnderlineAnnotationItem } from "../../../types/notion/annotation/underline.js";

export const Underline: UnderlineAnnotationItem = ({ children }) => {
  return <u className="notion-underline">{children}</u>;
};
