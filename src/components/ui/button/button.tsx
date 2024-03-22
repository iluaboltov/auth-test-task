import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

export const buttonVariants = cva("", {
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary: "min-h-12 w-full rounded-lg bg-blue text-base font-medium text-white",
      secondary: "",
    },
  },
});
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, variant, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <div>
        <Component className={buttonVariants({ className, variant })} ref={ref} {...props} />
      </div>
    );
  },
);
Button.displayName = "Button";
