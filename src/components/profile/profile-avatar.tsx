"use client";

import { currentUser } from "@/lib/auth";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { User  as IUser} from "next-auth";

export interface IProfileAvatarProps {
  user?: IUser;
}

const ProfileAvatar = async (props: IProfileAvatarProps) => {
  return (
    <Avatar className="h-8 w-8  outline outline-offset-2 outline-card">
      <AvatarImage src={props?.user?.image!} />
      <AvatarFallback>
        <User className="text-primary" />
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
