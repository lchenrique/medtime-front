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
import {
  Button,
  Card,
  Dropdown,
  Indicator,
  Modal,
  Navbar,
} from "react-daisyui";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

function Header() {
  const [visible, setVisible] = useState<boolean>(false);

  const { user, signOutUser } = useAuth();
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
    <Navbar className="rounded-box  bg-primary z-50  rounded-t-none fixed top-0">
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
          <Button tag="a" className="text-xl normal-case" color="ghost">
            Olá, Carlos
          </Button>
        )}
      </div>
      <div className="flex-none">
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
        <Dropdown end>
          <Button
            tag="label"
            tabIndex={0}
            color="ghost"
            className="avatar"
            shape="circle"
          >
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </Button>
          <Dropdown.Menu className="mt-3 z-[1] w-52 menu-lg">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge badge-primary ">New</span>
              </a>
            </li>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Modal.Legacy open={visible}>
        <Modal.Header className="font-bold">Você esta saindo!</Modal.Header>
        <Modal.Body>Tem certeza que deseja sair?</Modal.Body>

        <Modal.Actions>
          <Button onClick={signOutUser}>Sim</Button>
          <Button color="primary" onClick={toggleVisible}>
            Close
          </Button>
        </Modal.Actions>
      </Modal.Legacy>
    </Navbar>
  );
}

export { Header };
