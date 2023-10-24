import {
  type FC,
  type ComponentType,
  type ReactNode,
  createContext,
} from "react";

import { Link, type LinkProps } from "../Link.js";

export const LinkContext = createContext<ComponentType<LinkProps>>(Link);

export const LinkProvider: FC<{
  link?: ComponentType<LinkProps>;
  children: ReactNode;
}> = ({ link, children }) => {
  if (!link) {
    return children;
  }

  return <LinkContext.Provider value={link}>{children}</LinkContext.Provider>;
};
