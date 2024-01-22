"use client";
import { ReactNode, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { H4 } from "../typography/h4";
import { Separator } from "../ui/separator";

export interface IStepperProps {
  activeStep: number;
  items: {
    step: number;
    stepItem: ReactNode;
    icon?: ReactNode;
  }[];
  onChange?:(step:number)=> void
}

const Stepper = (props: IStepperProps) => {
  const [active, setActive] = useState(props.activeStep);

  useEffect(() => {
    setActive(props.activeStep);
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.activeStep]);

  useEffect(() => {
    if(props?.onChange){
      props?.onChange(active)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]); // eslint-disable-next-line react-hooks/exhaustive-deps

  const onChangeStep = (step: number) => {
    setActive(step);
  };

  return (
    <div className="w-full">

      <div className="flex items-center justify-between w-full mb-10">
        {props.items.map((item, i) => {
          return (
              <div key={item.step} className={i > 0 ?"flex w-full items-center":""}>
              {i > 0 ? (
                <div  className="h-[1px] mx-3 w-full  border-b border-dashed " /> 
                
              ) : (
                null
              )}
              <Button
               
                onClick={() => onChangeStep(item.step)}
                variant={item.step <= active? "default":"secondary"}
                className={cn("rounded-full min-h-10 min-w-10", item.step <= active? "":"text-neutral-500" )}
                size="icon"
              >
                {item.icon|| item.step}
              </Button>
            </div>

          );
        })}
      </div>
     
      <div className="w-full flex flex-col gap-5">
        {props.items
          .filter((item) => item.step === active)
          .map((item) => <Slot key={item.step} >{item.stepItem}</Slot>)}
      </div>
    </div>
  );
};

export { Stepper };
