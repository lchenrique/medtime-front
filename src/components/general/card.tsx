import { ReactNode } from "react";
import {
  Card as ShadCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { cn } from "@/utils";

export interface ICardProps {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  contentClassName?: string;
}

const Card = ({ title, description, children, footer , contentClassName}: ICardProps) => {
  return (
    <ShadCard>
     {(title ||description) && <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>}
      <CardContent className={cn("pt-6", contentClassName)}>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </ShadCard>
  );
};

export { Card };
