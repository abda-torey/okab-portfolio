import Hero from "../components/Hero";
import Services from "../components/Services";
import StatsSection from "../components/StatsSection";
import TrustedBy from "../components/TrustedBy";
import Portfolio from "../components/Portfolio";
export default function Home() {

  return (
    <div className="container mx-auto p-4 flex-grow" >
      
      <Hero />
      <Services />
      {/* <TrustedBy /> */}
      <StatsSection />
      <Portfolio/>
    </div>
  );
}
