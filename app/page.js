import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StatsSection from "./components/StatsSection";
import TrustedBy from "./components/TrustedBy";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TrustedBy />
      <StatsSection />
    </>
  );
}
