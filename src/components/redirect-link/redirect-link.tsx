import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { UrlObject } from "node:url";
import { AnchorHTMLAttributes, FC, HTMLAttributes, ReactNode } from "react";
export const LinkVariants = cva("text-blue font-sm", {
  defaultVariants: {
    size: "medium",
  },
  variants: {
    size: {
      medium: "font-medium",
      normal: "font-normal",
    },
  },
});

type RedirectProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof LinkVariants> & {
    children?: ReactNode;
    classNames?: (HTMLAttributes<HTMLAnchorElement> & string) | undefined;
    href: UrlObject | string;
  };

const RedirectLink: FC<RedirectProps> = ({ children, className, href, size, ...props }) => {
  return (
    <Link className={LinkVariants({ className, size })} href={href} {...props}>
      {children}
    </Link>
  );
};
export default RedirectLink;
