"use client"
import { cn } from "@/utils";
import { CommandList, CommandGroup, CommandItem } from "@/components/ui/command";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { Paragraph } from "../typography/paragraph";
import { ScrollArea } from "../ui/scroll-area";

export interface ISuggestionListProps {
  onChange: (option: any) => void;
  value: string;
  style?: any;
  suggestion:any[]
  className?: string;
  selected?: number
}

const SuggestionList = ({ onChange, suggestion, value, className, style, selected}:ISuggestionListProps) => {
  return (
        <CommandList style={style} className={cn("overflow-hidden h-min w-full", className)} >
          <ScrollArea className={cn(" w-full rounded-md border border-border p-1 bg-background", suggestion.length === 0 ?"h-[115px]":  suggestion.length > 10 ?"h-[384px]":"")}>

          {suggestion.length === 0  && <>
          <div className="flex items-center justify-center flex-col">
            <Image src="/empty.svg" alt="empty" width={100} height={100} />
            <Paragraph>
              Nenhuma sugestão
            </Paragraph>
          </div>
          
          </>}
          <CommandGroup className="p-0" heading={suggestion.length > 0 &&"Sugestões"} style={style}>
            {suggestion?.map((option, i) => (
              <CommandItem
              tabIndex={i}
                value={option}
                key={option}
                className="text-lg"
                onSelect={() => {
                  onChange(option);
                }}
              >
                {option}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    option === value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
          </ScrollArea>

        </CommandList>
      );
    };

export {SuggestionList};