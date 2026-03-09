"use client";


import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center py-20 overflow-hidden bg-slate-50"
      style={{
        backgroundImage: "url('/images/hero3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <div
            className="absolute inset-0 transition-transform duration-1000 hover:scale-105"
            aria-hidden
            style={{
              backgroundImage: "url('/hero.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-black/70" aria-hidden />

          <div className="relative z-10 flex min-h-[60vh] md:min-h-[75vh] items-center py-20 px-8 md:px-12">
            <div className="w-full">
              <div className="max-w-4xl mx-auto text-center space-y-8 text-brand-bud">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
                >
                  Smart Living. <br className="md:hidden" />
                  <span className="text-brand-spring">Designed for Ghana.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto"
                >
                  Outage-resilient smart homes for renters and professional 3D
                  virtual tours for real estate. Select your path below.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
                >
                  <Link href="/programs">
                    <button className="w-full sm:w-auto rounded-md text-white bg-brand-evergreen px-8 py-3.5 text-base font-medium shadow-lg hover:bg-brand-spring transition-all duration-300">
                      Explore Smart Living
                    </button>
                  </Link>
                  <Link href="/about">
                    <button className="w-full sm:w-auto rounded-md bg-white/30 backdrop-blur-md text-white px-8 py-3.5 text-base font-medium border border-white/30 hover:bg-black/20 transition-all duration-300">
                      See 3D Services
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
