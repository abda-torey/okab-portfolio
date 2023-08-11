import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import TrustedBy from "@/components/TrustedBy";
import Portfolio from "@/components/Portfolio";
import PageNotFound from "@/components/PageNotFound";



export default function Home() {
 
  return (
    < >
      
      <Hero />
      <Services />
      {/* <TrustedBy /> */}
      <StatsSection />
      <Portfolio/>
     
    </>
  );
}
