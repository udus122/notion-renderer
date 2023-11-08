import { PropertyItemContext, useMapper } from "../hooks.js";

import type { PropertyItemMapper } from "../../types/notion/mapper/propertyItem.js";
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
