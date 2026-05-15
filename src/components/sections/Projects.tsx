"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ProjectSection = ({
  title,
  description,
  index,
  align
}: {
  title: string,
  description: string,
  index: number,
  align: 'left' | 'right'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden snap-center group">
      {/* Cinematic Image/Abstract Background Placeholder */}
      <motion.div
        style={{ scale: scaleImage }}
        className="absolute inset-0 z-0 bg-matte-800"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay" />
      </motion.div>

      <div className={`relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col ${align === 'left' ? 'items-start text-left' : 'items-end text-right'}`}>
        <motion.div style={{ y: yText, opacity }} className="max-w-2xl">
          <div className="overflow-hidden mb-4">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-silver-500 font-sans tracking-widest-plus text-xs uppercase block"
            >
              0{index + 1} &mdash; Product Reveal
            </motion.span>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h3
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-sans font-black uppercase tracking-wider text-white leading-tight"
            >
              {title}
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-silver-300 leading-relaxed md:text-lg font-light mb-10"
          >
            {description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="group/btn flex items-center gap-4 text-xs font-sans uppercase tracking-widest text-white"
          >
            <span className="border-b border-white/30 pb-1 group-hover/btn:border-white transition-colors duration-300">Discover</span>
            <div className="w-8 h-px bg-white/30 group-hover/btn:w-16 group-hover/btn:bg-white transition-all duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "COSM AI",
      description: "An AI-powered platform combining contextual assistance, real-time city experiences, intelligent recommendations, and immersive modern UI systems.",
      align: 'left' as const
    },
    {
      title: "AI RESEARCH BOT",
      description: "A modern AI research assistant that searches, summarizes, and presents concise source-backed insights through intelligent workflows and clean interactive experiences.",
      align: 'right' as const
    }
  ];

  return (
    <section id="projects" className="relative w-full bg-[#050505]">
      {/* Title Section */}
      <div className="relative h-[50vh] flex items-center justify-center">
         <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-mega text-silver-300 text-center"
          >
            CREATING WHAT&apos;S <span className="text-white">NEXT</span>
          </motion.h2>
      </div>

      {projects.map((project, index) => (
        <ProjectSection key={index} {...project} index={index} />
      ))}
    </section>
  );
}
