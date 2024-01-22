import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

import { Clock, Clock2 } from "lucide-react";

export interface ITimerPickerProps {
  large?: boolean;
}
const n = 5




const TimerPicker = (props: ITimerPickerProps) => {

  return (
    <div
     className="relative"
    >
   <Clock className="absolute right-4 top-1/2 text-neutral-600 dark:text-inherit  -translate-y-1/2 transform"  />
   <Input type="time" large={props.large} className="text-center" />
    </div>
  );
};

export { TimerPicker };

