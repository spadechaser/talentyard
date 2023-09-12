import Image from "next/image";
import Hero from "./components/landingpage/Hero";
import { Lexend } from 'next/font/google'
import NavBar from "./components/landingpage/NavBar";

const lexend = Lexend({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });
export default function Home() {
  return (
    <main className={lexend.className}>
      <NavBar />
      <Hero />     
    </main>
  );
}
