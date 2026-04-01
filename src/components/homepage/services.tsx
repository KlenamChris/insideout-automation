"use client";

import Image from "next/image";
import Link from "next/link";
import { BatteryFull, ChevronRight, PlugZap2, Wifi } from "lucide-react";

const services = [
  {
    number: "01",
    label: "Smart Living",
    subLabel: "B2C / Residential",
    title: "Upgrade Your Home",
    description:
      "Scallable, renter-friendly kits that stay online when the power goes off. Security, energy and comfort without the landlord drama.",
    buttons: [{ text: "Explore Smart Kits", href: "#", variant: "link" }],
    image: "/images/smart-homes/smart-home2.jpeg",
  },
  {
    number: "02",
    label: "3D Tours",
    subLabel: "B2B / Commercial",
    title: "3D Services & Equipment",
    description:
      "Sell properties faster with immersive digital twins. Professional 3D tour creation and equipment rentals for developers and agents.",
    buttons: [
      {
        text: "View Business Solutions",
        href: "#",
        variant: "outline",
      },
    ],
    image: "/images/3d-services/3d-printer2.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100" id="services">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={service.number} style={{ backgroundImage: `url(${service.image})`}} className="flex group rounded-2xl bg-cover shadow-sm flex-col justify-end items-end  h-96 p-5 hover:scale-105 hover:shadow-xl transition-all. duration-300">
            {service.buttons.map((btn, i) => (
            <button key={btn.href} className="absolute text-slate-50 border rounded-3xl backdrop-blur-sm text-xs shadow-sm p-2 group-hover:scale-105">{btn.text}</button>
              
            ))}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
