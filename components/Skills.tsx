"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-28 bg-[#030712]">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center gap-3 mb-4"
        >
          <span className="text-[#00f5ff] font-mono text-sm">02.</span>
          <div className="h-px w-full max-w-[60px] bg-[rgba(0,245,255,0.3)]" />
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-4xl md:text-5xl font-black mb-16 section-title text-center block mx-auto w-fit"
        >
          Technical <span className="gradient-text-cyan">Arsenal</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              custom={idx + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="card-cyber rounded-xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="text-2xl">{category.icon}</div>
                <h3 className="text-xl font-bold text-white" style={{ color: category.color }}>
                  {category.category}
                </h3>
              </div>

              <div className="space-y-6">
                {category.items.map((skill, sIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2 font-mono">
                      <span className="text-[#e2e8f0]">{skill.name}</span>
                      <span style={{ color: category.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-[#0a1628] rounded-full overflow-hidden border border-[#1e293b]">
                      <motion.div
                        className="h-full rounded-full relative"
                        style={{ background: category.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + sIdx * 0.1, ease: "easeOut" }}
                      >
                        <div className="absolute inset-0 bg-white/20" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
