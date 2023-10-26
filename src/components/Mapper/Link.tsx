import { type FC, type ComponentType, type ReactNode } from "react";

import { type LinkProps } from "src/types/notion/link.js";

import { LinkContext } from "./hooks.js";

export const LinkProvider: FC<{
  link?: ComponentType<LinkProps>;
  children: ReactNode;
}> = ({ link, children }) => {
  if (!link) {
    return children;
  }

  return <LinkContext.Provider value={link}>{children}</LinkContext.Provider>;
};
