"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const attributes = [
   {
      id: "one",
      title: "Resilience",
      description: "Works during Dumsor/Outages.",
      image: "/images/we-offer-3.jpg",
      large: true,
   },
   {
      id: "two",
      title: "Flexibility",
      description: "Move-in ready. Move-out easy. 100% Renter Friendly.",
      image: "/images/we-offer-1.jpg",
      large: true,
   },
   {
      id: "three",
      title: "Local",
      description: "Engineered for Accra's heat and voltage spikes.",
      image: "/images/we-offer-2.jpg",
      large: true,
   },
];

const Programs = () => {
   return (
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 space-y-4">
               <h3 className="text-sm font-semibold tracking-wider uppercase">Why Us</h3>
               <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">What We Offer</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
               {attributes.map((attribute, index) => (
                  <motion.div
                     key={attribute.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ delay: index * 0.1, duration: 0.5 }}
                     className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 ${attribute.large ? "lg:col-span-2 lg:flex lg:flex-row" : "flex flex-col"
                        }`}
                  >
                     <div className={`p-8 md:p-10 flex flex-col justify-center items-start space-y-4 max-w-xl ${attribute.large ? "lg:w-1/2" : "flex-1"}`}>
                        <h3 className="text-3xl font-semibold text-slate-900 leading-tight">{attribute.title}</h3>
                        <p className="text-slate-600 leading-relaxed">
                           {attribute.description}
                        </p>
                     </div>

                     <div className={`relative overflow-hidden bg-slate-100 ${attribute.large ? "h-64 lg:h-auto lg:w-1/2 min-h-80" : "h-64 min-h-70"
                        }`}>
                        <Image
                           src={attribute.image}
                           alt={attribute.title}
                           fill
                           className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Programs;