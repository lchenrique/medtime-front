import { HeaderTitle } from "@/components/layout/header-title";
import ProfileInfo from "@/components/profile/profile-info";
import { H4 } from "@/components/typography/h4";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currentUser } from "@/lib/auth";
import { useHeaderStore } from "@/store/header";
import { cn } from "@/utils";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

const Header = async () => {
  return (
    <div className="fixed top-2 w-full  ">
      <Card className="bg-primary border-none mx-3 min-h-14 flex items-center">
        <CardHeader
          className={cn(
            "text-white space-y-0  flex flex-row items-center justify-between py-1 px-5 w-full"
          )}
        >
          <HeaderTitle />
          <ProfileInfo />
        </CardHeader>
      </Card>
    </div>
  );
};

export default Header;
