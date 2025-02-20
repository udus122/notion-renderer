import type { LinkComponent } from "@udus/notion-types";

export const Link: LinkComponent = ({ prefix = "", link, children = null }) => (
  <a href={`${prefix}${link}`} className="notion-internal-link">
    {children}
  </a>
);
