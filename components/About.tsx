"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Target, MapPin, Calendar } from "lucide-react";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-28 overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(179,71,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(0,245,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center gap-3 mb-4"
        >
          <span className="text-[#00f5ff] font-mono text-sm">01.</span>
          <div className="h-px w-full max-w-[60px] bg-[rgba(0,245,255,0.3)]" />
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-4xl md:text-5xl font-black mb-16 section-title text-center block mx-auto w-fit"
        >
          About <span className="gradient-text-cyan">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            {personalInfo.bio.map((para, i) => (
              <motion.p
                key={i}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="text-[#cbd5e1] leading-relaxed mb-5 text-base text-center"
              >
                {para}
              </motion.p>
            ))}

            {/* Education card */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="card-cyber rounded-xl p-5 mt-8"
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ background: "rgba(0,245,255,0.06)", border: "1px solid rgba(0,245,255,0.12)" }}
                >
                  <GraduationCap size={22} className="text-[#00f5ff]" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#00f5ff] mb-1 uppercase tracking-widest">
                    Education
                  </div>
                  <div className="font-bold text-white text-base mb-1">
                    {personalInfo.university}
                  </div>
                  <div className="text-sm text-[#64748b] flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {personalInfo.year} Cadet
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {personalInfo.location}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Cybersecurity", "Network Defense", "Criminal Law", "IT Security"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded font-mono"
                          style={{
                            background: "rgba(0,245,255,0.06)",
                            border: "1px solid rgba(0,245,255,0.12)",
                            color: "#94a3b8",
                          }}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Career Goals */}
          <div>
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex items-center gap-2 mb-6"
            >
              <Target size={16} className="text-[#00ff88]" />
              <span className="text-sm font-mono text-[#00ff88] uppercase tracking-widest">
                Career Targets
              </span>
            </motion.div>

            <div className="space-y-4">
              {personalInfo.goals.map((goal, i) => (
                <motion.div
                  key={goal.label}
                  custom={i + 4}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  whileHover={{ x: 8 }}
                  className="card-cyber rounded-xl p-5 flex items-center gap-4 cursor-default group"
                >
                  <div className="text-3xl flex-shrink-0">{goal.icon}</div>
                  <div>
                    <div className="font-bold text-white group-hover:text-[#00f5ff] transition-colors">
                      {goal.label}
                    </div>
                    <div className="text-sm text-[#64748b]">{goal.desc}</div>
                  </div>
                  <div className="ml-auto">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#00f5ff", boxShadow: "0 0 6px #00f5ff" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Terminal-style info block */}
            <motion.div
              custom={8}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="mt-8 rounded-xl p-5 font-mono text-sm"
              style={{
                background: "rgba(3, 7, 18, 0.9)",
                border: "1px solid rgba(0,245,255,0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs text-[#475569]">terminal</span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[#475569]">$ </span>
                  <span className="text-[#00f5ff]">cat profile.json</span>
                </div>
                <div className="text-[#64748b] pl-2">
                  <div>{"{"}</div>
                  <div className="pl-4">
                    <span className="text-[#00ff88]">"name"</span>
                    {": "}
                    <span className="text-[#fbbf24]">"Denys Stolyk"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00ff88]">"handle"</span>
                    {": "}
                    <span className="text-[#fbbf24]">"YouK1ch"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00ff88]">"focus"</span>
                    {": "}
                    <span className="text-[#fbbf24]">"CyberSec & Red Team"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00ff88]">"status"</span>
                    {": "}
                    <span className="text-[#00ff88]">"learning & hacking"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00ff88]">"openToWork"</span>
                    {": "}
                    <span className="text-[#00f5ff]">true</span>
                  </div>
                  <div>{"}"}</div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-[#475569]">$ </span>
                  <span className="cursor-blink text-[#00ff88]">▋</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
