import { X, XCircle } from "lucide-react";
import { ReactNode } from "react";
import { Button, Alert as DaisyAlert } from "react-daisyui";

export interface IAlertProps {
  children: ReactNode;
  onClose?: () => void;
}

const Alert = (props: IAlertProps) => {
  return (
    <DaisyAlert
      className="flex justify-between py-1 px-2 outline bg-white outline-red-600 outline-offset-2 outline-1"
      icon={<XCircle className="text-status-error" />}
    >
      <span className="text-status-error text-base  ">{props.children}</span>
      <Button
        className="bg-white ring-0 border-0 shadow-none hover:bg-gray-100 focus:outline-none focus:bg-gray-200  focus:ring-gray-400"
        onClick={props.onClose}
        shape="circle"
        size="sm"
      >
        <X size={16} />
      </Button>
    </DaisyAlert>
  );
};

export { Alert };
