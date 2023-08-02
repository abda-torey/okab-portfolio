import Image from "next/legacy/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StatsSection from "./components/StatsSection";
import TrustedBy from "./components/TrustedBy";

import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
export default function Home() {
  return (
    < >
      <Navbar />
      <Hero />
      <Services />
      {/* <TrustedBy /> */}
      <StatsSection />
      <Portfolio/>
      <Footer />
    </>
  );
}
