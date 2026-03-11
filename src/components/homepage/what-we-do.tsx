"use client";

import { motion } from "framer-motion";
import { Building, Home, Puzzle, Shield, Zap } from "lucide-react";

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column - Sticky Header */}
          <div className="lg:w-5/12 lg:sticky lg:top-24 lg:self-start space-y-6">
            <span className="text-sm font-bold tracking-wider uppercase text-slate-900">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight">
              Unveiling Our Features
            </h2>
            <p className="text-lg text-slate-600">
              Insideout Automation specializes in designing and implementing
              smart technology solutions for residential and commercial spaces.
              Our services include:
            </p>
          </div>

          {/* Right Column - Scrollable List */}
          <div className="flex flex-col lg:w-12/12 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Smart Home Automation",
                  icon: <Home className="w-8 h-8" />,
                  desc: "We integrate intelligent systems that allow homeowners to control lighting, climate security and appliances effortlessly from one central platform.",
                },
                {
                  title: "Security & Surveillance Systems",
                  icon: <Shield className="w-8 h-8" />,
                  desc: "We provide advanced security technologies including smart cameras, access control systems and remote monitoring solutions designed to protect homes and properties.",
                },
                {
                  title: "Property Technology Solutions",
                  icon: <Building className="w-8 h-8" />,
                  desc: "We help property developers and real estate managers integrate smart infrastructure that increases property value and improves operational efficiency.",
                },
                {
                  title: "Smart Energy & Efficiency",
                  icon: <Zap className="w-8 h-8" />,
                  desc: "Our solutions help optimize energy use through automated lighting, power management and intelligent scheduling.",
                },
                {
                  title: "System Integration",
                  icon: <Puzzle className="w-8 h-8" />,
                  desc: "We bring multiple technologies into one seamless ecosystem so users can manage their environment through simple interfaces",
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                >
                  {value.icon}
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
