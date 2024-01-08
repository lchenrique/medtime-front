import { ReactNode } from "react";

export interface IAlertProps {
  children: ReactNode;
}

const Toast = (props: IAlertProps) => {
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-info">
        <span>{props.children}</span>
      </div>
    </div>
  );
};

export { Toast };
