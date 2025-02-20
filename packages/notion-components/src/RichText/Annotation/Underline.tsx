import type { UnderlineAnnotationItem } from "@udus/notion-types";

export const Underline: UnderlineAnnotationItem = ({ children }) => {
  return <u className="notion-underline">{children}</u>;
};
