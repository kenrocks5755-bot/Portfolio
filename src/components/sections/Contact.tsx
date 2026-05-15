"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const links = [
    { name: "GitHub", url: "#", icon: "GitHub", color: "hover:bg-gray-800" },
    { name: "LinkedIn", url: "#", icon: "LinkedIn", color: "hover:bg-blue-900/50" },
    { name: "Email", url: "mailto:hello@example.com", icon: "Email", color: "hover:bg-purple-900/50" }
  ];

  return (
    <section id="contact" className="relative py-32 w-full min-h-[80vh] flex flex-col items-center justify-center border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-sans tracking-widest-plus text-purple-400 uppercase mb-4">Establish Connection</h2>
          <h3 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-wider mb-16 text-glow">
            Initiate Contact
          </h3>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-24">
          {links.map((link, index) => {
            return (
              <motion.a
                key={index}
                href={link.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 glass ${link.color} transition-all duration-300 group`}
              >
                <span className="font-sans text-sm tracking-widest uppercase text-gray-300 group-hover:text-white transition-colors">
                  {link.name}
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t border-white/10 pt-12 mt-12"
        >
          <p className="text-xl md:text-3xl font-sans font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400">
            &ldquo;Building the future through AI, design, and intelligent systems.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
