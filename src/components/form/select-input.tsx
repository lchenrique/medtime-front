"use client";
import { IInputBaseProps, InputBase } from "@/components/form/input-base";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/utils";
import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";

type ISelect = Parameters<typeof SelectTrigger>[0];
export interface SelectInputProps<T extends FieldValues>
  extends Omit<IInputBaseProps<T>, "component">,
    Omit<ISelect, "name"> {
  options?: { label: ReactNode; value: string }[];
}

const SelectInput = <T extends FieldValues>({
  label,
  name,
  options,
  control,
  className,
  ...props
}: SelectInputProps<T>) => {
  return (
    <InputBase
      label={label}
      name={name}
      control={control}
      className={className}
      component={({ onChange, value, ...fields }) => {
        return (
          <Select onValueChange={onChange} value={value} {...fields} >
            <SelectTrigger {...props}>
              <SelectValue placeholder="Select item" />
            </SelectTrigger>
            <SelectContent className="border-border ">
              {options?.map((item) => {
                return (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        );
      }}
    />
  );
};

export { SelectInput };
