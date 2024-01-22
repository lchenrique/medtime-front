"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { IInputBaseProps, InputBase } from "@/components/form/input-base";
import { Input } from "@/components/ui/input";
import { FieldValues } from "react-hook-form";

type IInput = Parameters<typeof Input>[0];
export interface ISearchInputProps<T extends FieldValues>
  extends Omit<IInputBaseProps<T>, "component">,
    Omit<IInput, "name"> {}

const DatePickerBase = <T extends FieldValues>(
  { label, name, control, className, ...props }: ISearchInputProps<T>
) => {
  const sizeLarge = props.large
  ? "col-span-1 h-14 bg-transparent text-lg "
  : "";

  return (
    <InputBase
      label={label}
      name={name}
      control={control}
     large={props.large}
      component={(field) => {
        return (
          <div className="relative flex items-center max-w-2xl ">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground", sizeLarge,className
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP", {locale:ptBR})
                  ) : (
                    <span>Escolha uma data</span>
                  )}
                  <CalendarIcon className="ml-auto h-6 w-6 text-neutral-600 dark:text-inherit" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 border-border" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  className={props.large?"text-lg":""}
                  disabled={(date) =>
                     date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        );
      }}
    />
  );
};

export const DatePicker = DatePickerBase
