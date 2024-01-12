import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Process from "@/components/Process";
import Solutions from "@/components/Solutions";
import Team from "@/components/Team";
import Technologies from "@/components/Technologies";
import WhyReformedtech from "@/components/WhyReformedtech";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Solutions />
      <CaseStudies />
      <Technologies />
      <Team />
      <WhyReformedtech />
      <Process />

      <Newsletter />
      <Footer />
    </div>
  );
}
