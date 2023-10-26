import { type FC, type ReactNode } from "react";

import { RichTextItemContext, useMapper } from "./hooks.js";

export const RichTextItemProvider: FC<{
  mapper?: object;
  children: ReactNode;
}> = ({ mapper, children }) => {
  if (!mapper) {
    return children;
  }

  const { richTextItemMapper } = useMapper();

  return (
    <RichTextItemContext.Provider value={{ ...richTextItemMapper, ...mapper }}>
      {children}
    </RichTextItemContext.Provider>
  );
};
