import React, { useContext } from "react";

import { BlockContext } from "./hooks.js";

export const BlockProvider: React.FC<{
  mapper?: object;
  children: React.ReactNode;
}> = ({ mapper, children }) => {
  if (!mapper) {
    return children;
  }

  const blockMapper = useContext(BlockContext);

  return (
    <BlockContext.Provider value={{ ...blockMapper, ...mapper }}>
      {children}
    </BlockContext.Provider>
  );
};
