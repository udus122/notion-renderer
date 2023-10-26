import { useContext, type FC, type ReactNode } from "react";

import { RichTextItemContext } from "./hooks.js";

export const RichTextItemProvider: FC<{
  mapper?: object;
  children: ReactNode;
}> = ({ mapper, children }) => {
  if (!mapper) {
    return children;
  }

  const richTextItemMapper = useContext(RichTextItemContext);

  return (
    <RichTextItemContext.Provider value={{ ...richTextItemMapper, ...mapper }}>
      {children}
    </RichTextItemContext.Provider>
  );
};
