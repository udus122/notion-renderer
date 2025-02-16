import type { BoldAnnotationItem } from "../../../types/notion/annotation/bold.js";

export const Bold: BoldAnnotationItem = ({ children }) => {
  return <strong className="notion-bold">{children}</strong>;
};
