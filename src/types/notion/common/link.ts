import type { ReactNode } from "react";

export type LinkProps = {
  prefix?: string;
  link: string;
  children?: ReactNode;
};

export type LinkComponent = React.ComponentType<LinkProps>;
