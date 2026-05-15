"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">

      <motion.div style={{ y: yText, opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-silver-500 font-sans tracking-widest-plus text-xs uppercase mb-6"
          >
            The Vision
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-sans font-light uppercase tracking-wide leading-tight text-white"
          >
            Technology <br className="hidden md:block" />
            <span className="font-black text-gradient-silver tracking-mega">Presented as Art.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="max-w-3xl mx-auto space-y-8 text-silver-300 font-light text-lg md:text-xl leading-relaxed"
        >
          <p>
            I am a First-year CSE student exploring the intersection of design, motion, and artificial intelligence. My focus is on crafting digital experiences that feel intuitive, immersive, and fundamentally human.
          </p>
          <p>
            Rather than building generic interfaces, I aim to design intelligent systems that communicate with elegance—merging robust engineering with cinematic visual storytelling.
          </p>
        </motion.div>

        {/* Elegant structural line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-px h-24 bg-gradient-to-b from-white/30 to-transparent mx-auto mt-20"
        />

      </motion.div>
    </section>
  );
}
