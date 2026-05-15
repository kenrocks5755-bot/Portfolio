"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Decorative background elements */}
      <motion.div style={{ y: y1 }} className="absolute left-10 top-20 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl z-0"></motion.div>
      <motion.div style={{ y: y2 }} className="absolute right-10 bottom-20 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl z-0"></motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <motion.div style={{ opacity }} className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-wider text-glow">
            System.<span className="text-purple-500">Init()</span>
          </h2>

          <div className="space-y-6 text-gray-300 glass p-8 rounded-2xl border-glow relative overflow-hidden">
             {/* Scanning line effect */}
            <motion.div
              animate={{ top: ["-10%", "110%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.8)] z-20"
            />

            <p className="text-lg leading-relaxed">
              First-year CSE student initializing sequence. Passionate about AI & ML architectures, currently focused on optimizing the bridge between theoretical models and practical applications.
            </p>
            <p className="text-lg leading-relaxed">
              My current operational parameters include exploring startups, automation protocols, and intelligent systems. I believe in learning through execution—building projects that challenge my current processing capabilities.
            </p>
            <p className="text-lg leading-relaxed text-purple-300">
              Active modules: AI agents, research systems, and immersive web experiences.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 h-full relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-2 glass p-6 rounded-xl border border-white/10 flex items-center justify-between group hover:border-purple-500/50 transition-colors"
          >
            <div>
              <h3 className="text-purple-400 font-sans tracking-widest text-xs uppercase mb-1">Status</h3>
              <p className="text-2xl font-sans">Learning & Building</p>
            </div>
            <div className="w-12 h-12 rounded-full border border-purple-500/30 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-shadow">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                 className="w-8 h-8 border-t-2 border-r-2 border-purple-500 rounded-full"
               />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-6 rounded-xl border border-white/10 flex flex-col justify-between"
          >
            <h3 className="text-gray-500 font-sans tracking-widest text-xs uppercase mb-4">Focus Area</h3>
            <p className="text-xl font-sans text-blue-300">Intelligent Systems</p>
            <div className="w-full h-1 bg-gray-800 mt-4 rounded-full overflow-hidden">
               <motion.div
                 initial={{ width: 0 }}
                 whileInView={{ width: "85%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 0.5 }}
                 className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
               />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-6 rounded-xl border border-white/10 flex flex-col justify-between"
          >
            <h3 className="text-gray-500 font-sans tracking-widest text-xs uppercase mb-4">Current Obj</h3>
            <p className="text-xl font-sans text-emerald-300">AI Agents</p>
            <div className="w-full h-1 bg-gray-800 mt-4 rounded-full overflow-hidden">
               <motion.div
                 initial={{ width: 0 }}
                 whileInView={{ width: "70%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 0.7 }}
                 className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
               />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
