import type { CodeAnnotationItem } from "../../../types/notion/annotation/code.js";

export const InlineCode: CodeAnnotationItem = ({ children }) => {
  return <code className="notion-inline-code">{children}</code>;
};
