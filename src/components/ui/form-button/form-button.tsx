import { Button } from "@/components/ui/button/button";
import React, { ReactNode } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
};

const FormButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, disabled, type, ...props }, ref) => {
  return (
    <Button disabled={disabled} ref={ref} type={type} variant={"primary"} {...props}>
      {children}
    </Button>
  );
});

FormButton.displayName = "FormButton";

export default FormButton;
