"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0"></div>

      <div className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 tracking-widest-plus mb-4 text-sm md:text-base font-sans uppercase"
        >
          HEY, I&apos;M
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-9xl font-sans font-black mb-6 text-glow tracking-wider uppercase text-white"
        >
          Ken Rodrigues
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-purple-300 font-sans tracking-wide mb-8"
        >
          Tech Enthusiast. AI Explorer. Future Builder.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300 max-w-2xl text-center mb-12 leading-relaxed text-sm md:text-base glass p-6 rounded-xl border-glow"
        >
          I&apos;m a Computer Science Engineering student passionate about AI, machine learning, web development, and building futuristic digital experiences that merge technology, creativity, and real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#projects" className="relative group overflow-hidden px-8 py-4 rounded-full border border-purple-500 bg-purple-900/20 hover:bg-purple-900/40 transition-all duration-300 backdrop-blur-sm box-glow">
            <span className="relative z-10 font-sans tracking-widest text-sm uppercase">Explore My Work</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-600/50 to-blue-600/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full border border-gray-700 hover:border-gray-400 hover:bg-white/5 transition-all duration-300 font-sans tracking-widest text-sm uppercase backdrop-blur-sm">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
