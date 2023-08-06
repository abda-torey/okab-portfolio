'use client'
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import TrustedBy from "@/components/TrustedBy";
import Portfolio from "@/components/Portfolio";
import PageNotFound from "@/components/PageNotFound";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
 const router = useRouter();

 useEffect(()=>{
    // Listen for route changes
    const handleRouteChange = (url) => {
      // Redirect to 404 page for unmatched routes
      if (!url.startsWith('/PageNotFound')) {
        router.push('/404');
      }
    };

    router.events?.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events?.off('routeChangeStart', handleRouteChange);
    };
  }, []);
 
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
