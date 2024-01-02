import { cn } from "@/utils";
import { ReactNode } from "react";
import { Input } from "react-daisyui";

type TDaisyUIInput = Parameters<typeof Input>[0];

export interface ITextInputProps extends TDaisyUIInput {
  label?: ReactNode;
  invalid?: ReactNode;
  placeholder?: string;
}

const TextInput = ({
  label,
  invalid,
  className,
  ...props
}: ITextInputProps) => {
  return (
    <div className="form-control w-full ">
      {label && (
        <label className="label">
          <div className="label-text text-lg">{label}</div>
        </label>
      )}
      <Input
        className={cn("w-full", className)}
        color={invalid ? "error" : "neutral"}
        size="lg"
        {...props}
      />
      {invalid && (
        <label className="label">
          <span className="label-text-alt text-status-error">{invalid}</span>
        </label>
      )}
    </div>
  );
};

export { TextInput };
