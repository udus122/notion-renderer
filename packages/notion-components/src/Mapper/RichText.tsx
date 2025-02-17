import { RichTextItemContext, useMapper } from "../hooks";

import type { RichTextItemMapper } from "@udus/notion-types";
import type { FC, ReactNode } from "react";

export const RichTextItemProvider: FC<{
  mapper?: RichTextItemMapper;
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
