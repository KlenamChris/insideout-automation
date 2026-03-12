import HeroSection from "@/components/homepage/hero";
import Programs from "@/components/homepage/we-offer";
import Services from "@/components/homepage/services";
import Contact from "@/components/homepage/contact";
import { Metadata } from "next";
import WhatWeDo from "@/components/homepage/what-we-do";

export const metadata: Metadata = {
  title: "Insideout Automation - Smart Living & Property Tech",
  description:
    "Outage-resilient smart home kits and professional 3D virtual tours designed for Ghanaian realities. Upgrade your space today.",
  openGraph: {
    title: "Insideout Automation - Smart Living & 3D Virtual Tours in Ghana",
    description:
      "Outage-resilient smart home kits and professional 3D virtual tours designed for Ghanaian realities. Upgrade your space today.",
    images: ["/images/hero3.png"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Programs />
      <WhatWeDo />
      <Contact />
    </>
  );
}
