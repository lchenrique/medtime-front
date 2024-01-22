"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils";
import { ReactElement, ReactNode } from "react";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
  UseControllerProps,
} from "react-hook-form";
import { H4 } from "../typography/h4";

export interface IInputBaseProps<T extends FieldValues> {
  label?: ReactNode;
  name: UseControllerProps<T>["name"];
  control?: Control<any>;
  className?: string;
  component: (field: ControllerRenderProps<T, Path<T>>) => ReactElement;
  large?: boolean;
}

const InputBase = <T extends FieldValues>(props: IInputBaseProps<T>) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className={props.className}>
          {props.label && (
            <FormLabel>
              {props.large ? (
                <H4 className="text-neutral-600 dark:text-neutral-300 text-lg">
                  {props.label}
                </H4>
              ) : (
                props.label
              )}
            </FormLabel>
          )}
          <FormControl>{props.component(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { InputBase };
