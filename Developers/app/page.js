import Image from "next/image";
import Hero from "./components/landingpage/Hero";
import { Lexend } from 'next/font/google'
import NavBar from "./components/landingpage/NavBar";
import TalentPromptSearch from "./components/landingpage/TalentPromptSearch";
import VettedTalentsCategory from "./components/landingpage/VettedTalentsCategory";

const lexend = Lexend({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });
export default function Home() {
  return (
    <main className={lexend.className}>
      <NavBar />
      <Hero />
      <div className="mt-12 md:mt-0 z-10 relative">
        <TalentPromptSearch />
      </div>
      <div className="mt-12 md:mt-24 z-10 relative">
        <VettedTalentsCategory />
      </div>
    </main>
  );
}
