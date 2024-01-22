"use client"
import Image from "next/image";

export interface IEmptyProps {
  size?: number;
  text?: string;
}

const Empty = (props:IEmptyProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/empty.svg" alt="empty" width={props.size || 100} height={props.size|| 100} />
      {props.text}
    </div>
  );
};

export {Empty};