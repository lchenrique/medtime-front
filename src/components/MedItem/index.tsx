import { Card } from "@/components/Card";
import { Cross, Clock } from "lucide-react";

export interface IMedItemProps {
  title: string;
  description: string;
  nextHours: Date;
  recurrent?: boolean;
}

const MedItem = (props: IMedItemProps) => {
  return (
    <Card>
      <div className="flex items-center gap-6  overflow-hidden w-full">
        <Cross className="text-primary-primary-100 min-w-6" strokeWidth={3} />
        <div className="overflow-hidden w-full">
          <h2 className="font-bold text-neutral-neutral-1 text-base m-0 p-0 truncate overflow-hidden">
            {props.title}
          </h2>
          <p className="text-neutral-400 italic text-sm m-0 p-0 truncate overflow-hidden">
            {props.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-primary-primary-100 font-medium pl-3 min-w-24">
        <Clock />
        {new Date(props.nextHours).getHours()}:
        {String(new Date(props.nextHours).getMinutes()).padStart(2, "0")}
      </div>
    </Card>
  );
};

export { MedItem };
