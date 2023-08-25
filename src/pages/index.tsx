import { Ball } from "@/components/Ball";
import { MuscleBrain } from "@/components/MuscleBrain";

export default function Home() {
  return (
    <main className={"w-full h-full flex flex-wrap gap-4"}>
      <Ball />
      <MuscleBrain />
    </main>
  );
}
