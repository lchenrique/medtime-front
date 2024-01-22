"use client"
import {
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { ReactNode } from "react";

export interface IModalProps {
  title: string;
  content: ReactNode;
}

const Modal = (props: IModalProps) => {
  return (
    <DialogContent className="border-border">
      <DialogHeader>
        <DialogTitle className="mb-4">{props.title}</DialogTitle>
        <DialogDescription className="text-left">
          {props.content}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export { Modal };
