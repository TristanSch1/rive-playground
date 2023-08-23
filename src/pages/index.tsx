import { Inter } from "next/font/google";
import { Ball } from "@/components/Ball";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={"w-full h-full flex flex-wrap gap-4"}>
      <Ball />
    </main>
  );
}
