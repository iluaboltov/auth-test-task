import { FormError } from "@/components/ui/form-error/form-error";
import { Label } from "@/components/ui/label/label";
import Image from "next/image";
import React, { InputHTMLAttributes, forwardRef, useState } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
  error?: false | string;
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, containerClassName, defaultValue = "", error, label, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean | undefined>(type === "password" ? true : undefined);
    return (
      <div className={"max-w-full" + containerClassName}>
        {!!label && <Label>{label}</Label>}
        <div className={"relative"}>
          <input
            className={`placeholder:text-gray border p-3 pr-8 placeholder:text-2sm placeholder:font-normal focus:outline-none ${!!error ? "border-red-400" : "border-grey"} w-full rounded-md`}
            ref={ref}
            type={showPassword !== undefined ? (!showPassword ? "text" : "password") : type}
            {...props}
          />
          {showPassword !== undefined ? (
            showPassword ? (
              <Image
                alt={""}
                className={"absolute right-3.5 top-1/2 -translate-y-1/2"}
                height={20}
                onClick={() => setShowPassword(!showPassword)}
                src={"/images/eye-close-icon.png"}
                width={20}
              />
            ) : (
              <Image
                alt={""}
                className={"absolute right-3.5 top-1/2 -translate-y-1/2"}
                height={20}
                onClick={() => setShowPassword(!showPassword)}
                src={"/images/eye-open-icon.svg"}
                width={20}
              />
            )
          ) : null}
        </div>
        <FormError errorText={error} size={"sm"} />
      </div>
    );
  },
);
Input.displayName = "Input";
