import Image from "next/legacy/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio/>
    </>
  );
}
