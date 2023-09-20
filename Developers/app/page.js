'use client'
import Image from "next/image";
import Hero from "./components/landingpage/Hero";
import { Lexend } from 'next/font/google'
import NavBar from "./components/landingpage/NavBar";
import TalentPromptSearch from "./components/landingpage/TalentPromptSearch";
import VettedTalentsCategory from "./components/landingpage/VettedTalentsCategory";
import Features from "./components/landingpage/Features";
import HoverFrameCTA from "./components/HoverFrameCTA_comp";
import { useEffect, useState } from "react";

const lexend = Lexend({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });
export default function Home() {
  const [showHoverFrame, setShowHoverFrame] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const middleScrollPosition = documentHeight / 2 - windowHeight / 2;

      const threshold = 100;

      if (scrollPosition > middleScrollPosition - threshold && scrollPosition < middleScrollPosition + threshold) {
        setShowHoverFrame(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main className={lexend.className}>
      {showHoverFrame && <HoverFrameCTA />}
      <NavBar />
      <Hero />
      <div className="mt-12 md:mt-0 z-10 relative font-lexend">
        <TalentPromptSearch />
      </div>
      <div className="mt-12 md:mt-24 z-10 relative">
        <Features />
      </div>
      <div className="mt-12 md:mt-24 z-10 relative">
        <VettedTalentsCategory />
      </div>
    </main>
  );
}
