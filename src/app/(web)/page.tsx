import HeroSection from "@/components/homepage/hero";
// import Partners from "@/components/homepage/partners";
import Programs from "@/components/homepage/we-offer";
import Services from "@/components/homepage/services";
// import Testimonials from "@/components/homepage/testimonials";
// import Impact from "@/components/homepage/impact";
// import Gallery from "@/components/homepage/gallery";
// import News from "@/components/homepage/news";
// import CTA from "@/components/homepage/cta";
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
    images: ["/hero.png"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <Partners /> */}
      <Services />
      <Programs />
      <WhatWeDo />
      {/* <Testimonials /> */}
      {/* <Impact /> */}
      {/* <Gallery /> */}
      {/* <News /> */}
      {/* <CTA /> */}
      <Contact />
    </>
  );
}
