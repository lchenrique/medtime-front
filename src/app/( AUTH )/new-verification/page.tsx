import { NewVerificationForm } from "@/components/auth/verification-form";

export interface INewVerificationProps {
}

const NewVerificationPage = (props:INewVerificationProps) => {
  return (
      <NewVerificationForm />
  );
};

export default NewVerificationPage