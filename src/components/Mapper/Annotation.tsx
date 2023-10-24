import { createContext, useContext, type FC, type ReactNode } from "react";

import {
  Color,
  Bold,
  Italic,
  Strikethrough,
  Underline,
  InlineCode,
} from "../RichText/Annotation/index.js";

export const AnnotationContext = createContext({
  color: Color,
  bold: Bold,
  italic: Italic,
  strikethrough: Strikethrough,
  underline: Underline,
  code: InlineCode,
});

export const AnnotationProvider: FC<{
  mapper?: object;
  children: ReactNode;
}> = ({ mapper, children }) => {
  if (!mapper) {
    return children;
  }
  const annotationMapper = useContext(AnnotationContext);
  return (
    <AnnotationContext.Provider value={{ ...annotationMapper, ...mapper }}>
      {children}
    </AnnotationContext.Provider>
  );
};
