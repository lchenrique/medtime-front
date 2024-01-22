"use client";
import { H4 } from "@/components/typography/h4";
import { Paragraph } from "@/components/typography/paragraph";
import { Button } from "@/components/ui/button";
import { useHeader } from "@/hooks/useHeader";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// export const runtime = "edge";

const Home = () => {
  useHeader("", "");

  return (
    <div className="flex flex-col gap-3 w-full items-center mt-10">
      <Image src="/empty.svg" alt="empty" width={300} height={300} />
      <H4> Sua caixa está vazia</H4>
      <Paragraph>Comece a criar seus lembretes</Paragraph>

      <Button size="lg" className="mt-5" asChild>
        <Link href="/med/create">
          <Plus  /> Agendar um novo medicamento
        </Link>
      </Button>
    </div>
  );
};

export default Home;
