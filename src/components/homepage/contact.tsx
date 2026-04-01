"use client";

import { motion } from "framer-motion";
import {
  // Mail,
  //  Phone,
  //  MapPin,
  ArrowRight,
} from "lucide-react";
// import Link from "next/link";

const Contact = () => {
  // const contactMethods = [
  //   {
  //     icon: <Mail className="w-8 h-8" />,
  //     title: "Email",
  //     description: "Send us a message anytime during business hours",
  //     action: "info@insideoutautomation.com",
  //     href: "mailto:info@insideoutautomation.com",
  //   },
  //   {
  //     icon: <Phone className="w-8 h-8" />,
  //     title: "Phone",
  //     description: "Call us to discuss which service fits your needs",
  //     action: "+233 57 393 4405",
  //     href: "tel:+233753934405",
  //   },
  //   {
  //     icon: <MapPin className="w-8 h-8" />,
  //     title: "Location",
  //     description: "You can find us at",
  //     action: "XYZ Street Road Accra, Ghana",
  //     href: "https://maps.google.com",
  //   },
  // ];

  return (
    <section className="py-5 bg-white" id="contact">
      <div className="container mx-auto px-1 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="bg-slate-100 text-black flex p-2 py-4 justify-between rounded-2xl mx-3 sm:mx-0 md:mx-0">
            <div className="flex items-center mx-1">
              <p>Have a question or need help choosing the right solution? </p>
            </div>
            <div className="flex items-center font-medium bg-brand-evergreen rounded-3xl p-1 hover:shadow-xl transition-all duration-100">
              <button className="flex p-1 w-35">
                <span className="bg-brand-bud rounded-3xl p-1 ">
                  <ArrowRight className="text-white md:size-5" />
                </span>
                <p className="flex items-center ml-1 text-white">Contact us</p>
              </button>
            </div>
          </div>
        </motion.div>

        {/* <div className=" flex text-slate-600 bg-slate-300 rounded-3xl p-1 mb-8">
          <button className="bg-brand-spring rounded-4xl p-1">
            <ArrowRight className="text-white size-5"/>
          </button>
          <p className="flex items-center pl-1 font-bold">Contact Us</p>
        </div> */}

        {/* Contact Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex flex-col bg-slate-50 p-5 rounded-2xl items-start">
              <div className="mb-6 text-slate-900">{method.icon}</div>
              <h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">
                {method.title}
              </h3>
              <p className="text-slate-600 mb-8 font-light leading-relaxed">
                {method.description}
              </p>
              <Link
                href={method.href}
                className="text-slate-900 font-medium hover:text-slate-700 transition-colors"
              >
                {method.action}
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
