"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ProjectCard = ({
  title,
  description,
  features,
  tech,
  index
}: {
  title: string,
  description: string,
  features: string[],
  tech: string[],
  index: number
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="relative group glass rounded-3xl p-1 md:p-2 overflow-hidden border border-white/10"
    >
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundSize: "200% auto", animation: "gradient 3s linear infinite" }} />

      <div className="relative bg-black/90 rounded-2xl p-8 h-full flex flex-col justify-between z-10">
        <div>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-wider text-white group-hover:text-glow transition-all duration-300">
              {title}
            </h3>
            <span className="text-purple-500 font-sans text-sm tracking-widest">0{index + 1}</span>
          </div>

          <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base border-l-2 border-purple-500/50 pl-4">
            {description}
          </p>

          <div className="mb-8">
            <h4 className="text-xs text-gray-500 uppercase tracking-widest font-sans mb-3">Key Features</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.map((feature, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto">
          <h4 className="text-xs text-gray-500 uppercase tracking-widest font-sans mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-sans tracking-wide">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "COSM AI",
      description: "An AI-powered platform that combines intelligent assistance with real-time city-based experiences. Cosm AI delivers contextual AI insights, weather integration, events, recommendations, and immersive UI interactions through a futuristic interface.",
      features: [
        "AI-generated assistance",
        "City-aware UI",
        "Weather & event integration",
        "Immersive animations",
        "Futuristic interface"
      ],
      tech: ["Next.js", "Gemini API", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "AI Research Bot",
      description: "An AI-powered research assistant that searches, summarizes, and presents information in a clean and intelligent way. Designed to simplify research workflows and provide concise, source-backed insights through modern AI interactions.",
      features: [
        "AI summarization",
        "Source-backed answers",
        "Intelligent search workflows",
        "Clean research UI",
        "Contextual responses"
      ],
      tech: ["Next.js", "Gemini API", "Tavily API", "Tailwind CSS"]
    }
  ];

  return (
    <section id="projects" className="relative py-32 w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-wider mb-4">
            Deployment <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-glow">Logs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
