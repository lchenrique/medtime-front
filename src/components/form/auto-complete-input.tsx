"use client";

import { FieldValues} from "react-hook-form";

import { cn,} from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
} from "@/components/ui/command";
import { IInputBaseProps, InputBase } from "./input-base";
import React, {useRef } from "react";
import { Input } from "../ui/input";
import { useMediaQuery, useOnClickOutside, useTimeout } from "usehooks-ts";
import { suggestionsMeds } from "@/data/suggestions";
import { SuggestionList } from "./suggestion-list";
import { DialogClose } from "../ui/dialog";

type IInput = Parameters<typeof Input>[0];
export interface ISearchInputProps<T extends FieldValues>
  extends Omit<IInputBaseProps<T>, "component">,
    Omit<IInput, "name"> {
  options?: { label: string; value: string }[];
  wrapperClassName?: string;
  commandClassName?: string;
  suggestionClassName?: string;
  modal?: boolean;
}

export const AutoCompleteInputBase = <T extends FieldValues>({
  label,
  name,
  control,
  className,
  options,
  wrapperClassName,
  commandClassName,
  suggestionClassName,
  modal,
  ...props
}: ISearchInputProps<T>) => {
  const [opacity, setOpacity] = React.useState(0);
  const [display, setDisplay] = React.useState("none");
  const [suggestion, setSuggestion] = React.useState<string[]>([]);
  const ref = useRef<HTMLInputElement>(null);
  const [selected, setSelected] = React.useState<number>(0);
  const isMobile = useMediaQuery("(max-width: 468px)");

  const handleClickOutside = () => {
    if (!modal) {
      if (opacity == 1) {
        setOpacity(0);
        setTimeout(() => {
          setDisplay("none");
        }, 300);
      }
    }
  };

  const handleClickOutsideMobile = () => {
    if (opacity == 1) {
      setOpacity(0);  
      setTimeout(() => {
        setDisplay("none");
      }, 300);
    }
  };

  const handleClickInside = () => {
    if (opacity == 0) {
      setDisplay("block");
      setTimeout(() => {
        setOpacity(1);
      }, 1);
    }
  };

  useOnClickOutside(ref, handleClickOutside);

  let arr: any = [];

  const filteredOptions = async (field: any) => {
    if (field.value) {
      if (!opacity) {
        setSelected(0);
      }
      handleClickInside();

      const meds = await suggestionsMeds(field.value);
      meds?.forEach((item, _, array) => {
        if (
          item.toLocaleLowerCase().includes(field.value.toLocaleLowerCase())
        ) {
          arr = array.filter((item) =>
            item.toLocaleLowerCase().includes(field.value.toLocaleLowerCase())
              ? item
              : false
          );

          return;
        }
        if (item === field.value) {
          arr = array;
          return;
        }
      });
      setSuggestion(arr);
    }
  };

  return (
    <InputBase
      label={label}
      name={name}
      control={control}
      // className={className}
      large={props.large}
      component={({ value, ...field }) => {
        return (
          <>
            <div
              className={cn(
                "rounded-lg  relative w-full flex items-center",
                wrapperClassName
              )}
              ref={!isMobile ? ref : undefined}
            >
              <Command className={cn("w-0 h-[40px]", commandClassName)}>
                <Input
                  {...field}
                  {...props}
                  className={cn("absolute", className)}
                  value={value}
                  onKeyUp={(event) => {
                    if (event.key !== "Enter" && value.length > 3) {
                      filteredOptions({ value });
                      return;
                    }
                    handleClickOutside();
                  }}
                />
                {!modal && (
                  <SuggestionList
                    value={value}
                    onChange={(value) => {
                      field.onChange(value);
                      handleClickOutside();
                    }}
                    suggestion={suggestion}
                    selected={selected}
                    style={{
                      opacity,
                      display,
                      transform: opacity ? "scale(1)" : "scale(0.9)",
                    }}
                    className={cn(
                      "absolute top-[44px] shadow-md rounded-md transition-all z-[9999999]",
                      suggestionClassName
                    )}
                  />
                )}
              </Command>
              {modal && (
                <CommandDialog
                  open={!!opacity}
                  onOpenChange={(open) => {
                    if (open) {
                      handleClickInside();
                    } else {
                      handleClickOutsideMobile();
                    }
                  }}
                >
                  <DialogClose asChild></DialogClose>
                  <div className="px-1 pt-12 pb-7">
                    <Input
                      {...field}
                      {...props}
                      className={className}
                      value={value}
                      onKeyUp={(event) => {
                        if (event.key !== "Enter") {
                          filteredOptions({ value });
                        }
                      }}
                    />
                  </div>
                  <SuggestionList
                    value={value}
                    onChange={(value) => {
                      field.onChange(value);
                      handleClickOutsideMobile();
                    }}
                    suggestion={suggestion}
                    selected={selected}
                    style={{
                      opacity,
                      display,
                      transform: opacity ? "scale(1)" : "scale(0.9)",
                    }}
                  />
                </CommandDialog>
              )}
            </div>
          </>
        );
      }}
    />
  );
};

export const AutoCompleteInput = AutoCompleteInputBase;
