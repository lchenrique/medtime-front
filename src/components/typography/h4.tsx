import { cn } from "@/utils";

export interface H4Props extends React.HTMLAttributes<HTMLHeadingElement>{
  
}

const H4 = ({ children, className }: H4Props) => {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight",className)}>
      {children}
    </h4>
  );
};

export { H4 };
