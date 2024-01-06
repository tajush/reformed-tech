import CaseStudies from "@/components/CaseStudies";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Solutions />
      <CaseStudies />
    </div>
  );
}
