"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const links = [
    { name: "GitHub", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Email", url: "mailto:hello@example.com" }
  ];

  return (
    <section id="contact" className="relative h-[80vh] w-full flex flex-col items-center justify-center bg-[#050505]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-[#050505] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-sans font-black uppercase tracking-mega text-white mb-16">
            CONNECT
          </h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-24">
          {links.map((link, index) => {
            return (
              <motion.a
                key={index}
                href={link.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group flex items-center gap-2"
              >
                <span className="font-sans text-sm tracking-widest uppercase text-silver-300 group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                <ArrowUpRight className="w-4 h-4 text-silver-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="border-t border-white/10 pt-12 mt-12 w-full max-w-2xl mx-auto"
        >
          <p className="text-sm font-sans tracking-widest text-silver-500 uppercase">
            &copy; {new Date().getFullYear()} Ken Rodrigues. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
