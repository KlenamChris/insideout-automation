"use client";

import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";
import Image from "next/image";

export function Footer() {
  const navigation = {
    programs: [
      { name: "Smart Home Kits", href: "#" },
      { name: "Energy & Backup Hubs", href: "#" },
      { name: "Professional 3D Tours", href: "#" },
    ],
    explore: [
      { name: "Home", href: "/" },
      { name: "Smart Homes", href: "#" },
      { name: "3D Tours", href: "#" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const socialLinks = [
    {
      href: "https://www.facebook.com/insideoutautomation",
      icon: RiFacebookFill,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/smartinsideout",
      icon: RiInstagramFill,
      label: "Instagram",
    },
    {
      href: "https://x.com/insideoutautomation",
      icon: RiTwitterXFill,
      label: "X (Twitter)",
    },
  ];
  return (
    <footer className="relative bg-brand-evergreen pt-20 pb-8 rounded-t-[2.5rem] overflow-hidden">
      {/* Subtle decorative top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white-/5 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* CTA block */}
          <div className="lg:col-span-5 xl:col-span-6 space-y-6">
            <p className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
              Ready for an upgrade? <br />
              <span className="text-brand-bud">We have a solution</span>
            </p>
            <p className="text-lg text-white max-w-md leading-relaxed">
              Smart-living and property-technology designed for Ghanaian homes
              and urban realities. Reliable. Renter-friendly. Outage-ready.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3.5 bg-brand-bud text-gray-800 font-medium rounded-xl hover:bg-brand-bud/40 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-brand-spring-700/25"
              >
                Explore
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3.5 bg-white/90 border border-slate-200 text-gray-800 font-medium rounded-xl hover:bg-white/75 hover:border-gray-200 hover:text-gray-800 transition-all duration-200"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-wrap gap-12 sm:gap-16 lg:justify-end lg:pt-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-bud mb-4">
                Solutions
              </p>
              <ul className="flex flex-col gap-3">
                {navigation.programs.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-brand-bud transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-bud mb-4">
                Company
              </p>
              <ul className="flex flex-col gap-3">
                {navigation.explore.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-brand-bud transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-bud mb-4">
                Contact
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href={"mailto:info@insideoutautomation.com"}
                    className="text-white hover:text-brand-bud transition-colors duration-200"
                  >
                    info@insideoutautomation.com
                  </Link>
                </li>
                <li>
                  <Link
                    href={"tel:+23357394405"}
                    className="text-white hover:text-brand-bud transition-colors duration-200"
                  >
                    +233 57 393 4405
                  </Link>
                </li>
                <li>
                  <span className="flex flex-col gap-3 text-white">
                    P.O. Box ABC 1455
                    <br />
                    XYZ Street Road
                    <br />
                    Accra, Ghana
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo, tagline & avatars */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 py-10 border-y border-gray-600">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Insideout Automation – Home"
          >
            <Image
              src="/images/logo-bud.png"
              alt=""
              width={72}
              height={72}
              className="object-cover shrink-0"
            />
            <div>
              <span className="text-lg font-semibold text-brand-bud block">
                Insideout Automation
              </span>
              <span className="text-sm text-white">
                Smart Living & 3D Virtual Tours in Ghana
              </span>
            </div>
          </Link>

          {/* <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-500 hidden sm:block">Our community</span>
                  <div className="flex -space-x-3">
                     {avatars.slice(0, 6).map((src, i) => (
                        <div
                           key={i}
                           className="relative w-10 h-10 rounded-full ring-2 ring-white overflow-hidden bg-slate-200 shadow-sm hover:z-10 hover:scale-110 transition-transform duration-200"
                        >
                           <Image
                              src={src}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="40px"
                           />
                        </div>
                     ))}
                  </div>
               </div> */}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Insideout Automation Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white mr-2 hidden sm:inline">
              Follow us
            </span>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-brand-evergreen/85 bg-white border border-slate-200/80 hover:bg-brand-bud hover:text-white hover:border-sky-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
