import type { LinkComponent } from "../../types/notion/common/link.js";

export const Link: LinkComponent = ({
  href,
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
  children,
  ...props
}) => (
  <a
    href={href}
    className={`notion-link ${className}`}
    target={target}
    rel={rel}
    {...props}
  >
    {children}
  </a>
);
