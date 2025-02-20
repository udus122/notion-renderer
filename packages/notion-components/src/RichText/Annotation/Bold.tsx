import type { BoldAnnotationItem } from "@udus/notion-types";

export const Bold: BoldAnnotationItem = ({ children }) => {
  return <strong className="notion-bold">{children}</strong>;
};
