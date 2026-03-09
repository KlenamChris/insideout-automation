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
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-32">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-12">
              {/* Step Header */}
              <div className="flex items-baseline gap-4 border-b border-slate-200 pb-8">
                <span className="text-sm font-bold text-slate-900">
                  {service.number}
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  {service.label}
                </h3>
              </div>

              {/* Step Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="flex flex-col items-start space-y-6 max-w-xl">
                  <div className="space-y-2">
                    <span className="text-sm font-semibold text-slate-900">
                      {service.subLabel}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-6 pt-4">
                    {service.buttons.map((btn, i) => (
                      <Link
                        key={i}
                        href={btn.href}
                        className={`inline-flex items-center text-sm font-semibold transition-colors ${
                          btn.variant === "outline"
                            ? "px-8 py-3.5 rounded-md border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300"
                            : "text-slate-900 group"
                        }`}
                      >
                        {btn.text}
                        {btn.variant === "link" && (
                          <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-slate-100 shadow-sm hover:scale-105 duration-700">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-200"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 border-t border-gray-200 pt-10">
        <p className="text-center text-sm font-semibold text-black uppercase. tracking-widest mb-6">
          Engineered for African Realities
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-brand-evergreen">
              <Wifi />
            </span>{" "}
            6 Ready
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-brand-evergreen">
              <PlugZap2 />
            </span>{" "}
            Shield
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-brand-evergreen">
              <BatteryFull />
            </span>{" "}
            Backed
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-brand-evergreen">Matterport</span>{" "}
            Pro
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
