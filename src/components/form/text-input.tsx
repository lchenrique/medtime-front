"use client";
import { IInputBaseProps, InputBase } from "@/components/form/input-base";
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
  { label, name, control, className, large,   ...props }: ITextInputProps<T>,
  ref: any
) => {
  return (
    <InputBase
      label={label}
      name={name}
      control={control}
      large={large}
      component={(fields) => {
        return <Input {...fields} {...props}  large={large} ref={ref} className={cn("w-full",className)} />;
      }}
    />
  );
};

export const TextInput = React.forwardRef(TextInputBase);
