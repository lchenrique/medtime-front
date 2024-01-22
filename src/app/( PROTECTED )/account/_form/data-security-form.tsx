"use client";
import { registerFingerprint } from "@/actions/finger-print/regitser-fingerprint-credentials";

import { TextInput } from "@/components/form/text-input";
import { Card } from "@/components/general/card";
import { Flex } from "@/components/general/flex";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Camera, User } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { removeCredential } from "@/actions/finger-print/remove-fingerprint-credentials";
import ClipLoader from "react-spinners/ClipLoader";

export interface IDataSecurityFormProps {
  user: any;
}

const DataSecurityForm = ({ user }: IDataSecurityFormProps) => {
  const [isPending, startTransition] = useTransition();
  const [biometric, setBiometric] = useState(false);

  useEffect(() => {
    const existBiometric = JSON.parse(
      localStorage.getItem("credential-med-time")!
    );
    if (existBiometric?.credentialId) {
      setBiometric(true);
    }
  }, []);

  const handleFingerprint = async (checked: boolean) => {
    if (checked) {
      setBiometric(true);
      startTransition(async () => {
        const res = await registerFingerprint(user);
        if (res?.data.response) toast.success("Biometria registrada!");
      });

      return;
    }

    removeCredential();
    setBiometric(false);
  };

  return (
    <Card contentClassName="flex flex-col gap-4">
      <Flex className="justify-between">
        <span>Biometria:</span>
        {isPending ? (
          <ClipLoader loading color="inherit" size={20} />
        ) : (
          <Switch checked={biometric} onCheckedChange={handleFingerprint} />
        )}
      </Flex>
      <Separator />
      <Flex className="justify-between">
        <span>2FA:</span>
        <Switch />
      </Flex>
    </Card>
  );
};

export { DataSecurityForm };
