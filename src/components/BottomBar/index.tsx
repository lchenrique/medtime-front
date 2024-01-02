"use client";
import { Home, LineChart, Plus, Settings } from "lucide-react";
import { Card } from "@/components/Card";
import { useState } from "react";
import { auth } from "@/firebase";
import { useParams, usePathname, useRouter } from "next/navigation";
import { BottomNavigation, Button } from "react-daisyui";
import { useAuth } from "@/hooks/useAuth.hook";

function BottomBar() {
  const [active, setActive] = useState<string>("");
  const router = useRouter();
  const path = usePathname();

  const handleSelect = (e: any) => {
    if ((e.target.attributes as NamedNodeMap).getNamedItem("data-name")) {
      setActive(
        (e.target.attributes as NamedNodeMap).getNamedItem("data-name")
          ?.value as string
      );
    }
  };

  const handleCreate = () => {
    router.push("/create");
  };

  const not = (e: any) => {
    if ("Notification" in window && "serviceWorker" in navigator) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // Register a service worker
          navigator.serviceWorker.register("/sw.js").then((registration) => {
            // Display a notification using the service worker
            registration.showNotification("Hora do remédio!", {
              body: `Paracetamol - ${new Date().getHours()}:${String(
                new Date().getMinutes()
              ).padStart(2, "0")}`,
              actions: [
                {
                  action: "showNotification",
                  title: "Show Notification",
                },
              ],
            });
          });
        }
      });
    }
  };

  const agendar = async () => {
    const data = await fetch(
      "https://ewe-simple-polecat.ngrok-free.app/agendar-lembrete",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          userId: "28iL5y4UDqRcRdo5HwAS",
          horario: "2023-12-27 03:15:00",
        }),
      }
    );

    console.log("data", data);
  };

  return (
    <BottomNavigation className="bg-base-100 border-t border-base-200">
      <BottomNavigation.Item color="primary" active={active === "home"}>
        <div data-name="home" onClick={handleSelect}>
          <Home
            data-active={active}
            className="data-[active=home]:text-primary-primary-100 pointer-events-none text-neutral-neutral-4"
          />
        </div>
      </BottomNavigation.Item>
      <BottomNavigation.Item color="primary" active={active === "statistics"}>
        <div data-name="statistics" onClick={handleSelect}>
          <LineChart
            data-active={active}
            className="data-[active=statistics]:text-primary-primary-100 pointer-events-none text-neutral-neutral-4"
          />
        </div>
      </BottomNavigation.Item>
      <BottomNavigation.Item>
        <Settings />
      </BottomNavigation.Item>
      {path === "/create" ? null : (
        <BottomNavigation.Item>
          <Button onClick={handleCreate} color="primary" shape="circle">
            <Plus className="text-white" size={28} strokeWidth={3} />
          </Button>
        </BottomNavigation.Item>
      )}
    </BottomNavigation>
  );
}

export { BottomBar };
