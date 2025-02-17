import { BlockContext, useMapper } from "../hooks";

import type { BlockMapper } from "@udus/notion-types";
import type { FC, ReactNode } from "react";

export const BlockProvider: FC<{
  mapper?: BlockMapper;
  children: ReactNode;
}> = ({ mapper, children }) => {
  if (!mapper) {
    return children;
  }

  const { blockMapper } = useMapper();

  return (
    <BlockContext.Provider value={{ ...blockMapper, ...mapper }}>
      {children}
    </BlockContext.Provider>
  );
};
