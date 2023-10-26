import type { CodeAnnotationItem } from "../../../types/notion/annotation/code.js";

export const Code: CodeAnnotationItem = ({ children }) => {
  return <code className="notion_inline_code">{children}</code>;
};
