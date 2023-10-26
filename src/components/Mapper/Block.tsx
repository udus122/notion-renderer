import React from "react";

import { BlockContext, useMapper } from "./hooks.js";

export const BlockProvider: React.FC<{
  mapper?: object;
  children: React.ReactNode;
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
