import { type FC, type ComponentType, type ReactNode } from "react";

import { LinkContext } from "./context.js";
import { type LinkProps } from "../Link.js";

export const LinkProvider: FC<{
  link?: ComponentType<LinkProps>;
  children: ReactNode;
}> = ({ link, children }) => {
  if (!link) {
    return children;
  }

  return <LinkContext.Provider value={link}>{children}</LinkContext.Provider>;
};
