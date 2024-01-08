"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReactElement } from "react";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
  UseControllerProps,
} from "react-hook-form";

export interface IInputBaseProps<T extends FieldValues> {
  label?: string;
  name: UseControllerProps<T>["name"];
  control?: Control<any>;
  component: (field: ControllerRenderProps<T, Path<T>>) => ReactElement;
}

const InputBase = <T extends FieldValues>(props: IInputBaseProps<T>) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <FormControl>{props.component(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { InputBase };
