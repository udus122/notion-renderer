export type LinkProps = React.ComponentPropsWithRef<"a">;

type Props = LinkProps;

export const Link: React.FC<Props> = ({
  href,
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
  children,
  ...props
}) => (
  <a
    href={href}
    className={`notion_link ${className}`}
    target={target}
    rel={rel}
    {...props}
  >
    {children}
  </a>
);
