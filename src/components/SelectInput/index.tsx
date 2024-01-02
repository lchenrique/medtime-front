import { cn } from "@/utils";
import { ReactNode } from "react";
import { Input, Select } from "react-daisyui";

type TDaisyUIInput = Parameters<typeof Select>[0];

export interface ITextInputProps extends Omit<TDaisyUIInput, "children"> {
  label?: ReactNode;
  invalid?: ReactNode;
  placeholder?: string;
  options?: { label: ReactNode; value: string }[];
}

const SelectInput = ({
  label,
  invalid,
  className,
  options,
  ...props
}: ITextInputProps) => {
  return (
    <div className="form-control w-full ">
      {label && (
        <label className="label">
          <div className="label-text text-lg">{label}</div>
        </label>
      )}
      <Select size="lg" {...props}>
        {options?.map((item) => (
          <Select.Option value={item.value}>{item.label}</Select.Option>
        )) || <></>}
      </Select>
      {invalid && (
        <label className="label">
          <span className="label-text-alt text-base text-status-error">
            {invalid}
          </span>
        </label>
      )}
    </div>
  );
};

export { SelectInput };
