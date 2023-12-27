import type { LinkComponent } from "../../types/notion/common/link.js";

export const Link: LinkComponent = ({ prefix = "", link, children = null }) => (
  <a
    href={`${prefix}${link}`}
    className="notion-internal-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
