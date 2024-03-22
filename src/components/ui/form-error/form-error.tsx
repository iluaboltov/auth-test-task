import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

export const inputVariants = cva("w-full font-normal text-red-600", {
  defaultVariants: {
    size: "md",
  },

  variants: {
    size: {
      md: "text-md",
      sm: "text-sm",
    },
  },
});

export type FormErrorType = false | null | string;

export type InputProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof inputVariants> & {
    className?: string;
    errorText?: FormErrorType;
  };

export const FormError: FC<InputProps> = ({ className, errorText, size }) => {
  // @ts-ignore
  return <div className={inputVariants(size) + className}>{errorText}</div>;
};
