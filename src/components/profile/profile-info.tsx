import { Profile } from "@/components/profile/profile";
import { ProfileFlex } from "@/components/profile/profile-flex";
import { ModeToggle } from "@/components/theme/mode";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { currentUser } from "@/lib/auth";
import useAuthStore from "@/store/user";

export interface IProfileInfoProps {}

const ProfileInfo = async (props: IProfileInfoProps) => {
  const user = await currentUser();

  return (
    <>
        <ProfileFlex >Olá, {user?.name}</ProfileFlex>
      <div className="flex items-center gap-3 min-w-[112px]">
        <Profile user={user} src={user?.image!} />
        <ModeToggle />
      </div>
    </>
  );
};

export default ProfileInfo;
