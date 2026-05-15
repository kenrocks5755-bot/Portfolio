"use client";

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    "Artificial Intelligence", "Machine Learning", "Python", "Next.js",
    "Creative Development", "Motion Design", "UI/UX Systems", "AI Agents"
  ];

  return (
    <section id="skills" className="relative py-32 w-full min-h-[70vh] flex flex-col items-center justify-center bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 w-full text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-sm font-sans tracking-widest-plus text-silver-500 uppercase mb-4">Core Disciplines</h2>
          <p className="text-3xl md:text-5xl font-sans font-black tracking-mega uppercase text-white">
            SYSTEMS. <span className="text-silver-500 font-light">MOTION.</span> INTELLIGENCE.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="px-6 py-3 border border-white/10 rounded-full bg-white/5 hover:bg-white text-silver-300 hover:text-black transition-colors duration-500 cursor-default"
            >
              <span className="font-sans text-xs tracking-widest uppercase">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
