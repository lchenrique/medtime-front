"use client";
import {
  ArrowBigLeft,
  Badge,
  Bell,
  ChevronLeft,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";
import logo from "../../../public/medtime.svg";
import { useAuth } from "@/hooks/useAuth.hook";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
  const [visible, setVisible] = useState<boolean>(false);
  const { data } = useSession();
  const path = usePathname();
  const router = useRouter();

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleBack = () => {
    router.push("/home");
  };
  const handleLogOut = () => {
    setVisible(true);
  };

  return (
    <div className="fixed top-0 w-full">
      <Card className="bg-primary rounded-t-none border-none ">
        <CardHeader className="text-white space-y-0 flex flex-row items-center justify-between p-3">
          <div>
            <CardTitle>Ola, {data?.user?.name}</CardTitle>
            <CardDescription className="text-neutral-300">
              {data?.user?.email}
            </CardDescription>
          </div>
          <Avatar className="cursor-pointer mt-0" onClick={() => signOut()}>
            <AvatarImage src={data?.user?.image} />
            <AvatarFallback className="text-primary font-bold">
              LC
            </AvatarFallback>
          </Avatar>
        </CardHeader>
      </Card>
      {/* <Navbar className="rounded-box  bg-primary z-50  rounded-t-none  top-0 px-10">
        <div className="flex-1 text-white">
          {path !== "/home" ? (
            <Button
              tag="a"
              className="p-1 normal-case capitalize"
              color="ghost"
              onClick={handleBack}
            >
              <ChevronLeft />
              {path.substring(1)}
            </Button>
          ) : (
            <h1 className="text-xl normal-case" color="ghost">
              Olá, {data?.user?.name}
            </h1>
          )}
        </div>
        <div className="flex gap-5">
          <Dropdown end>
            <Button tag="label" tabIndex={0} color="ghost" shape="circle">
              <Indicator>
                <span className="badge badge-sm badge-neutral indicator-item">
                  8
                </span>
                <Bell className="text-white" />
              </Indicator>
            </Button>
            <Dropdown.Menu className="mt-3 z-[1] card card-compact w-52 !p-0">
              <Card.Body>
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <Card.Actions>
                  <Button color="primary" fullWidth>
                    View cart
                  </Button>
                </Card.Actions>
              </Card.Body>
            </Dropdown.Menu>
          </Dropdown>
          <Avatar
            className="cursor-pointer"
            shape="circle"
            size="xs"
            src={data?.user?.image!}
            onClick={() => signOut()}
            innerClassName="rounded"
            border
          />
        </div>

        <Modal.Legacy open={visible}>
          <Modal.Header className="font-bold">Você esta saindo!</Modal.Header>
          <Modal.Body>Tem certeza que deseja sair?</Modal.Body>

          <Modal.Actions>
            <Button>Sim</Button>
            <Button color="primary" onClick={toggleVisible}>
              Close
            </Button>
          </Modal.Actions>
        </Modal.Legacy>
      </Navbar> */}
    </div>
  );
}

export { Header };
