"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Feather,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

const AboutClient = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="flex flex-col overflow-hidden bg-slate-50">
      <section className="relative min-h-[60vh] flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about2.jpg"
            alt="About Hero"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-50/0 via-slate-50/50 to-slate-50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Smart Living.
              <span className="text-brand-evergreen"> For Modern Homes.</span>
            </h1>
            <p className="text-xl text-black leading-relaxed">
              Insideout Automation creates smart technology solutions that make
              homes and properties safer, simpler and more intelligent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Our mission
              </h3>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
                Smart Automation for Better Living
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  We aim to make smart living accessible, reliable and practical
                  for homeowners, developers and businesses across Ghana and
                  beyond.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="#"
                  className="px-8 py-3.5 bg-brand-evergreen text-white font-medium rounded-md hover:bg-brand-spring transition-colors"
                >
                  Explore Our Solutions
                </Link>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-4 bg-linear-to-tr from-sky-200 to-violet-200 rounded-3xl opacity-40 blur-2xl transform rotate-3" />
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                <Image
                  src="/images/about5.jpg"
                  alt="pexels-image"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core values */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-4xl font-medium text-slate-900 mb-6">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                icon: <Lightbulb className="w-8 h-8" />,
                desc: "We continuously explore smarter ways to enhance modern living through technology.",
              },
              {
                title: "Reliability",
                icon: <Handshake className="w-8 h-8" />,
                desc: "Our solutions are built to perform consistently and dependably.",
              },
              {
                title: "Simplicity",
                icon: <Feather className="w-8 h-8" />,
                desc: "Technology should make life easier, not more complicated.",
              },
              {
                title: "Customer Focus",
                icon: <Users className="w-8 h-8" />,
                desc: "Every project starts with understanding the needs of our clients and delivering solutions that exceed expectations.",
              },
              {
                title: "Integrity",
                icon: <ShieldCheck className="w-8 h-8" />,
                desc: "We operate with transparency, professionalism and accountability in everything we do.",
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
      </section>

      {/* Our Vision */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Our Vision
              </h3>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
                Leading Africa&apos;s future in Smart Home Innovation
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  To become Africa&apos;s leading smart home and property
                  automation company, empowering modern living through
                  innovative and locally relevant technology solutions.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-4 bg-linear-to-tr from-sky-200 to-violet-200 rounded-3xl opacity-40 blur-2xl transform rotate-3" />
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                <Image
                  src="/images/about4.jpg"
                  alt="pexels-image"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div
              variants={itemVariants}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-linear-to-bl from-sky-200 to-indigo-200 rounded-3xl opacity-40 blur-2xl transform -rotate-3" />
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                <Image
                  src="/images/about3.jpg"
                  alt="Pexels image"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 space-y-8"
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Our Story
              </h3>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
                Redefining Smart Living in Ghana and Africa
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  As cities grow and technology evolves, property owners face
                  increasing demands for security, energy efficiency,
                  convenience and connectivity. Unfortunately, many smart home
                  solutions available globally are not designed for the local
                  infrastructure, lifestyle, or environmental conditions of
                  African cities.
                </p>
                <p>Insideout Automation bridges this gap.</p>
                <p>
                  We combine global technology with local insight to create
                  smart automation systems that truly work for Ghanaian homes
                  and urban environments. From smart security and lighting to
                  integrated property systems, we design solutions that make
                  homes safer, more efficient and easier to manage.
                </p>
                <p>
                  Our approach focuses on simplicity, reliability and seamless
                  integration, ensuring that technology enhances your living
                  experience without complicating it.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutClient;
