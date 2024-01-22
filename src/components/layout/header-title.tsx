"use client";
import { H4 } from "@/components/typography/h4";
import { Button } from "@/components/ui/button";
import { useHeaderStore } from "@/store/header";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export interface IHeaderTitleProps {}

const HeaderTitle = (props: IHeaderTitleProps) => {
  const { title, backUrl } = useHeaderStore();
  
  return (
    <>
      {(title || backUrl) && (
        <>
          {backUrl && (
            <Button  className="flex items-center justify-start min-w-[112px] text-white p-2 pl-1" asChild>
              <Link href="/home">
                <MdOutlineArrowBackIosNew />
                {title && <span >{title}</span>}
              </Link>
            </Button>
          )}
         
        </>
      )}
    </>
  );
};

export { HeaderTitle };
