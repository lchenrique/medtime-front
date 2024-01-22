"use client";
import { MedForm } from "@/app/( PROTECTED )/med/_form/med-form";
import { H4 } from "@/components/typography/h4";
import { useHeader } from "@/hooks/useHeader";
import { ArrowBigLeft } from "lucide-react";
import { Metadata } from "next";
import {} from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

export interface ICreateProps {}


const Create = (props: ICreateProps) => {
  useHeader("Voltar", "/home");

  
  return (
    <div className="w-full max-w-2xl h-full p-3">
      <MedForm />
    </div>
  );
};

export default Create;
