"use client";
import { useForm } from "react-hook-form";
import { PageForm } from "../../_components/page-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, ChevronRight, User } from "lucide-react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import ProfileAvatar from "@/components/profile/profile-avatar";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/form/text-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { H4 } from "@/components/typography/h4";
import { Session } from "next-auth/types";
import { useHeader } from "@/hooks/useHeader";
import { Lock, Shield, Bell } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DataInfoForm } from "./data-info-form";
import { Modal } from "@/components/modal";
import { DataSecurityForm } from "./data-security-form";
export interface IProfileFormProps {
  user: Session["user"] | null;
}

const AccountForm = ({ user }: IProfileFormProps) => {
  const form = useForm<any>({});
  useHeader("Voltar", "/home");

  const menu = [
    { title: "Meus dados", icon: User, render: DataInfoForm },
    { title: "Notificações", icon: Bell, render: DataInfoForm },
    { title: "Segurança", icon: Lock, render: DataSecurityForm },
    { title: "Privacidade", icon: Shield, render: DataInfoForm },
  ];

  return (
    <PageForm form={form} title="Minha conta">
      <Command className="bg-transparent">
        <CommandList className="text-lg border-border mt-3">
          <CommandGroup>
            {menu.map((item) => {
              const ItemRender = item.render;
              const IconRender = item.icon;
              return (
                <Dialog key={item.title}>
                  <DialogTrigger className="w-full">
                    <CommandItem className="h-14">
                      <IconRender className="mr-2 h-4 w-4" />
                      <span className="text-base">{item.title}</span>
                      <CommandShortcut>
                        <ChevronRight />
                      </CommandShortcut>
                    </CommandItem>
                  </DialogTrigger>
                  <Modal
                    title={item.title}
                    content={<ItemRender user={user} />}
                  />
                </Dialog>
              );
            })}
          </CommandGroup>
        </CommandList>
      </Command>
    </PageForm>
  );
};

export { AccountForm };
