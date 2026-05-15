"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="journey" ref={containerRef} className="relative py-32 w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black uppercase tracking-widest mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-600">
          FUTURE DRIVEN <br /> <span className="text-glow text-white">DEVELOPMENT</span>
        </h2>

        <div className="space-y-8 glass p-10 md:p-16 rounded-3xl border border-white/10 relative">

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500 rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500 rounded-bl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-3xl"></div>

          <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
            My current trajectory involves a deep dive into the underlying mechanics of <span className="text-purple-400 font-sans tracking-wide uppercase text-sm">Artificial Intelligence</span>.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            I am actively constructing projects that push the boundaries of conventional web development, integrating AI to create systems that are not just reactive, but intelligent and proactive.
          </p>

          <div className="pt-6 border-t border-white/10">
            <p className="text-lg text-blue-300 font-sans tracking-wide uppercase">
              Primary Directive: To engineer impactful AI architectures that redefine human-computer interaction.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
