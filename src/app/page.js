import CaseStudies from "@/components/CaseStudies";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Solutions from "@/components/Solutions";

import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1280px] container">
      <Hero />
      <Solutions />
      <CaseStudies />
      <Newsletter />
    </div>
  );
}
