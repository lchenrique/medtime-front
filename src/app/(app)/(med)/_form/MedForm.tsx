"use client";
import { SelectInput } from "@/components/SelectInput";
import { TextInput } from "@/components/TextInput";
import { Input } from "react-daisyui";

export interface IMedFormProps {}

const MedForm = (props: IMedFormProps) => {
  return (
    <form className="flex flex-col gap-3 w-full">
      <TextInput label="Nome"  />
      <TextInput label="Descrição" />

      <SelectInput
        label="Forma do medicamento"
        options={[
          { label: "tetse", value: "trse" },
          { label: "tetsew", value: "trsew" },
        ]}
      />
    </form>
  );
};

export { MedForm };
