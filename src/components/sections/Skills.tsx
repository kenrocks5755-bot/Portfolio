"use client";

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: "AI & ML", level: 85, color: "from-purple-500 to-purple-800" },
    { name: "Python", level: 90, color: "from-blue-400 to-blue-700" },
    { name: "Next.js", level: 80, color: "from-gray-300 to-gray-600" },
    { name: "Web Development", level: 85, color: "from-emerald-400 to-emerald-700" },
    { name: "APIs", level: 75, color: "from-cyan-400 to-cyan-700" },
    { name: "Automation", level: 70, color: "from-orange-400 to-orange-700" },
    { name: "AI Agents", level: 80, color: "from-pink-400 to-pink-700" },
    { name: "Frontend Development", level: 85, color: "from-yellow-400 to-yellow-700" },
    { name: "UI/UX", level: 75, color: "from-indigo-400 to-indigo-700" },
    { name: "Problem Solving", level: 95, color: "from-red-400 to-red-700" },
  ];

  return (
    <section id="skills" className="relative py-32 w-full min-h-screen flex items-center bg-black/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-wider mb-4">
            System <span className="text-purple-500">Capabilities</span>
          </h2>
          <p className="text-gray-400 font-sans tracking-widest text-sm">HOLOGRAPHIC SKILL MODULES</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex justify-between items-end mb-2">
                <span className="font-sans text-sm uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <span className="font-sans text-xs text-gray-500">{skill.level}%</span>
              </div>

              <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden border border-white/5 relative">
                {/* Glowing background track */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skill.color} relative`}
                >
                  {/* Leading edge glow */}
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-sm mix-blend-overlay"></div>
                </motion.div>
              </div>

              {/* Hover highlight effect */}
              <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
