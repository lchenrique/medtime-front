"use client";
import { IInputBaseProps, InputBase } from "@/components/form/input-base";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";
import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";

type IInput = Parameters<typeof Input>[0];
export interface ISearchInputProps<T extends FieldValues>
  extends Omit<IInputBaseProps<T>, "component">,
    Omit<IInput, "name"> {}

const SearchInputBase = <T extends FieldValues>(
  { label, name, control, className, ...props }: ISearchInputProps<T>,
  ref: any
) => {
  return (
    <InputBase
      label={label}
      name={name}
      control={control}
      className={className}
      component={(fields) => {
        return (
          <div className="relative flex items-center max-w-2xl ">
            <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
            <Input {...fields} className={cn("pl-8", className)} {...props} />
          </div>
        );
      }}
    />
  );
};

export const SearchInput = React.forwardRef(SearchInputBase);
