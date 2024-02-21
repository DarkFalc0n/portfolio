import Hero from "../components/hero";
import { Red_Hat_Display, Sulphur_Point } from "next/font/google";

export default function Home() {
  return (
    <main className={`font-heading bg-charcoal-black`}>
      <Hero />
    </main>
  );
}
