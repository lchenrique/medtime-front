import { Stepper } from "@/components/stepper/stepper";
import { H4 } from "@/components/typography/h4";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils";
import { ChevronLeft, ChevronRight, CalendarCheck2 } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "react-daisyui";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import { stepForm } from "../med/_form/step-form";

export interface IPageFormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
> extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "title"> {
  form: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
  title?: ReactNode;
}

const PageForm = <T extends FieldValues>({
  form,
  title,
  className,
  children,
  onSubmit,
  ...props
}: IPageFormProps<T>) => {
  return (
    <div>
      {title && (
        <>
          <H4 className="text-neutral-500 dark:text-neutral-300 font-bold text-center   uppercase">
            {title}
          </H4>
          <Separator className="my-5 " />
        </>
      )}

      <FormProvider {...form}>
        <form
          {...props}
          onSubmit={(event)=> {
            event.preventDefault()
            onSubmit && onSubmit(event)
          }}
          className={cn(
            "flex flex-col gap-5 w-full h-auto rounded-lg p-5 dark:bg-card bg-white border-border border ",
            className
          )}
        >
          <div className="flex flex-col gap-5 w-full  justify-center items-center  flex-1 ">{children}</div>
        </form>
      </FormProvider>
    </div>
  );
};

export { PageForm };
