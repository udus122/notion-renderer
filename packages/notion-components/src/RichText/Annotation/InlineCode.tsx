import type { CodeAnnotationItem } from "@udus/notion-types";

export const InlineCode: CodeAnnotationItem = ({ children }) => {
  return <code className="notion-inline-code">{children}</code>;
};
