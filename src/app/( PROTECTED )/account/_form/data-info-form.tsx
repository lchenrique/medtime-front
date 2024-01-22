"use client"
import { TextInput } from "@/components/form/text-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera, User } from "lucide-react";

export interface IDataInfoFormProps {
  user: any;
}

const DataInfoForm = ({ user }: IDataInfoFormProps) => {

  
  return (
    <div className="w-full  gap-4 flex items-center justify-center flex-col">
      {!user?.isOAuth && (
        <div className="w-full flex justify-center p-3 rounded-md gap-3">
          <div className="relative w-min">
            <Avatar className="h-28 w-28 outline outline-offset-4 outline-primary">
              <AvatarImage src={user?.image!} />
              <AvatarFallback>
                <User className="text-primary" size="5rem" />
              </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute rounded-full  bottom-0 right-0"
            >
              <Camera />
            </Button>
          </div>
        </div>
      )}

      <TextInput
        name="name"
        label="Nome"
        type="text"
        defaultValue={user?.name!}
        large
      />
      <TextInput
        name="email"
        label="E-mail"
        type="email"
        defaultValue={user?.email!}
        large
      />

      <Button className="w-full " size="lg">
        Salvar
      </Button>
    </div>
  );
};

export { DataInfoForm };
