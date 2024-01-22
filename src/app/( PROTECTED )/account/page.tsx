import { currentUser } from "@/lib/auth";
import { AccountForm } from "./_form/account-form";
export interface IProfilePageProps {}

const AccountPage = async (props: IProfilePageProps) => {
  const  user  = await currentUser();
  
  return <div className="w-full max-w-2xl h-full p-3">
    <AccountForm user={user!} />

  </div>;
};

export default AccountPage;
