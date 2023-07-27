import Image from "next/legacy/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
<<<<<<< HEAD
import StatsSection from "./components/StatsSection";
import TrustedBy from "./components/TrustedBy";

=======
import Portfolio from "./components/Portfolio";
>>>>>>> a0bd89bd0220e8351ded38111f8759aff91131a5
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
<<<<<<< HEAD
      <TrustedBy />
      <StatsSection />
=======
      <Portfolio/>
>>>>>>> a0bd89bd0220e8351ded38111f8759aff91131a5
    </>
  );
}
