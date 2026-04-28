"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import { certifications } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cisco" ref={ref} className="relative py-28 bg-[#030712]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-[#049fd9] opacity-5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center gap-3 mb-4"
        >
          <span className="text-[#049fd9] font-mono text-sm">05.</span>
          <div className="h-px w-full max-w-[60px] bg-[rgba(4,159,217,0.3)]" />
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-4xl md:text-5xl font-black mb-16 section-title text-center block mx-auto w-fit"
        >
          Cisco <span className="text-[#049fd9]">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              custom={idx + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="card-cyber rounded-xl p-6 group flex flex-col h-full"
            >
              <div className="flex flex-col items-center mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl border transition-colors duration-300 mb-4"
                  style={{
                    backgroundColor: `${cert.color}10`,
                    borderColor: `${cert.color}30`,
                  }}
                >
                  {cert.icon}
                </div>
                <span
                  className="text-xs font-mono px-2 py-1 rounded"
                  style={{
                    backgroundColor: `${cert.color}20`,
                    color: cert.color,
                  }}
                >
                  {cert.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f5ff] transition-colors text-center">
                {cert.name}
              </h3>
              
              <div className="text-sm text-[#cbd5e1] mb-4 text-center">
                {cert.issuer}
              </div>

              <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#64748b]">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award size={14} />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
