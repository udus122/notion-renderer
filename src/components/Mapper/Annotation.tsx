import { useContext, type FC, type ReactNode } from "react";

import { AnnotationContext } from "./hooks.js";

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
