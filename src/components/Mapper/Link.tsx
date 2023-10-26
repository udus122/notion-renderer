import { type LinkProps } from "../../types/notion/link.js";

import { LinkContext } from "./hooks.js";

import type { FC, ComponentType, ReactNode } from "react";

export const LinkProvider: FC<{
  link?: ComponentType<LinkProps>;
  children: ReactNode;
}> = ({ link, children }) => {
  if (!link) {
    return children;
  }

  return <LinkContext.Provider value={link}>{children}</LinkContext.Provider>;
};
