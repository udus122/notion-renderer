import { createContext, useContext, type FC, type ReactNode } from "react";

import { InlineEquation } from "../RichText/InlineEquation.js";
import { Mention } from "../RichText/Mention.js";
import { Text } from "../RichText/Text.js";

export const RichTextItemContext = createContext({
  text: Text,
  equation: InlineEquation,
  mention: Mention,
});

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
