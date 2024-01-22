"use client";
import ProfileMenu from "@/components/profile/profile-menu";
import { ChevronDown, User } from "lucide-react";
import ProfileAvatar from "./profile-avatar";

export interface IProfileProps {
  src?: string;
  user?: any;
}

const Profile = (props: IProfileProps) => {
  return (
    <ProfileMenu user={props.user}>
      <div className="flex items-center gap-1 cursor-pointer">
        <ProfileAvatar user={props.user} />
        <ChevronDown />
      </div>
    </ProfileMenu>
  );
};

export { Profile };
