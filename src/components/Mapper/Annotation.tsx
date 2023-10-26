import { AnnotationContext, useMapper } from "./hooks.js";

import type { AnnotationItemMapper } from "../../types/notion/mapper/annotationItem.js";
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
