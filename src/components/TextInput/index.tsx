import { IInputBaseProps, InputBase } from "@/components/input-base";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils";
import React from "react";
import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";

type IInput = Parameters<typeof Input>[0];
export interface ITextInputProps<T extends FieldValues>
  extends Omit<IInputBaseProps<T>, "component">,
    Omit<IInput, "name"> {}

const TextInputBase = <T extends FieldValues>(
  { label, name, control, ...props }: ITextInputProps<T>,
  ref: any
) => {
  return (
    <InputBase
      label={label}
      name={name}
      control={control}
      component={(fields) => {
        return <Input {...fields} {...props} />;
      }}
    />
  );
};

export const TextInput = React.forwardRef(TextInputBase);
