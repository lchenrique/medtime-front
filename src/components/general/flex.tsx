import { cn } from "@/utils";

export interface IFlexProps extends React.HTMLAttributes<HTMLDivElement> {}

const Flex = ({ className, children,  ...props }: IFlexProps) => {
  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      {children}
    </div>
  );
};

export { Flex };
