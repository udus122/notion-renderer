import { AnnotationContext, useMapper } from "../hooks";

import type { AnnotationItemMapper } from "@udus/notion-types";
import type { FC, ReactNode } from "react";

export const AnnotationItemProvider: FC<{
  mapper?: AnnotationItemMapper;
  children: ReactNode;
}> = ({ mapper, children }) => {
  if (!mapper) {
    return children;
  }

  const annotationMapper = useMapper();

  return (
    <AnnotationContext.Provider value={{ ...annotationMapper, ...mapper }}>
      {children}
    </AnnotationContext.Provider>
  );
};
