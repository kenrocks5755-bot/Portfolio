"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050505_100%)] z-0 opacity-80 pointer-events-none"></div>

      <div className="z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center w-full">

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-sans font-black tracking-mega uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-silver-500 leading-none py-2"
          >
            KEN RODRIGUES
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="h-px w-3/4 md:w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"
        />

        <div className="overflow-hidden mb-8">
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            className="text-sm md:text-lg text-silver-300 font-sans tracking-widest-plus uppercase"
          >
            Tech Enthusiast &bull; AI Explorer &bull; Creative Developer
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3, ease: "easeOut" }}
          className="text-silver-500 max-w-2xl text-center mb-16 leading-relaxed text-sm md:text-base font-light px-4"
        >
          A Computer Science Engineering student building immersive digital experiences, intelligent systems, and futuristic web products through the intersection of AI, design, and technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a href="#projects" className="relative group overflow-hidden px-10 py-4 rounded-full bg-white text-black transition-all duration-500 hover:scale-105">
            <span className="relative z-10 font-sans tracking-widest text-xs font-bold uppercase">Explore Projects</span>
            <div className="absolute inset-0 h-full w-full bg-gray-200 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
          </a>
          <a href="#contact" className="px-10 py-4 rounded-full border border-white/20 text-white hover:border-white/60 hover:bg-white/5 transition-all duration-500 font-sans tracking-widest text-xs uppercase backdrop-blur-md">
            Contact
          </a>
        </motion.div>
      </div>

      {/* Cinematic Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 overflow-hidden"
      >
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"
        />
      </motion.div>
    </section>
  );
}
