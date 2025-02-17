import { PropertyItemContext, useMapper } from "../hooks";

import type { PropertyItemMapper } from "@udus/notion-types";
import type { FC, ReactNode } from "react";

export const PropertyItemProvider: FC<{
  mapper?: PropertyItemMapper;
  children: ReactNode;
}> = ({ mapper, children }) => {
  if (!mapper) {
    return children;
  }

  const { propertyItemMapper } = useMapper();

  return (
    <PropertyItemContext.Provider value={{ ...propertyItemMapper, ...mapper }}>
      {children}
    </PropertyItemContext.Provider>
  );
};
