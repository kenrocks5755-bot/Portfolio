"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section id="journey" ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">

      {/* Subtle cinematic background texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_#111111_0%,_#050505_100%)] opacity-50"></div>

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full"
      >
        <div className="overflow-hidden mb-8">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-light uppercase tracking-widest text-white leading-tight"
          >
            BUILDING <br />
            <span className="font-black text-gradient-dark tracking-mega">EXPERIENCES</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="max-w-2xl mx-auto mt-8"
        >
          <p className="text-xl md:text-2xl font-light text-silver-300 leading-relaxed">
            Exploring the mechanics of modern interfaces, integrating intelligent logic to create seamless, proactive digital environments.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
