import Hero from "../components/hero";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${redHatDisplay.className} bg-charcoal-black`}>
      <Hero />
    </main>
  );
}
