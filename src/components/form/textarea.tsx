"use client";
import { IInputBaseProps, InputBase } from "@/components/form/input-base";
import React from "react";
import { FieldValues } from "react-hook-form";
import { TextareaProps, Textarea as ShadTextarea } from "../ui/textarea";



export interface ITextareaProps<T extends FieldValues>
  extends Omit<IInputBaseProps<T>, "component">,
    Omit<TextareaProps, "name"> {}

const TextareaBase = <T extends FieldValues>(
  { label, name, control, className,  ...props }: ITextareaProps<T>,
  ref: any
) => {
  return (
    <InputBase
      label={label}
      name={name}
      control={control}
      className={className}
      large={props.large}
      component={(fields) => {
        return <ShadTextarea {...fields} {...props} ref={ref} className={className} />;
      }}
    />
  );
};

export const Textarea = React.forwardRef(TextareaBase);
