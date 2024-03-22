import { Control, FieldPathByValue, FieldValues, PathValue, useController } from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input/input";
import { ReactElement } from "react";

export type FormInputProps<
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, boolean | number | string>,
> = Omit<InputProps, "defaultValue" | "onBlur" | "onChange" | "value"> & {
  control: Control<TFieldValues>;
  defaultValue?: PathValue<TFieldValues, TPath>;
  name: TPath;
};

const FormInput = <
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, boolean | number | string>,
>({
  control,
  defaultValue,
  name,
  ...props
}: FormInputProps<TFieldValues, TPath>): ReactElement | null => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <Input
      {...props}
      {...field}
      error={fieldState.isTouched && (fieldState.error?.message ?? fieldState.error?.type)}
    />
  );
};

export default FormInput;
