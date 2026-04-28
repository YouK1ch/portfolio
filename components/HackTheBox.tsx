"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Target } from "lucide-react";
import { hacktheboxData } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function HackTheBox() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hackthebox" ref={ref} className="relative py-20 bg-[#030712]">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center gap-3 mb-4"
        >
          <span className="text-[#9fef00] font-mono text-sm">04.</span>
          <div className="h-px w-full max-w-[60px] bg-[#9fef00]/30" />
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-4xl md:text-5xl font-black mb-12 text-center"
        >
          HackTheBox <span className="text-[#9fef00]">Stats</span>
        </motion.h2>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="rounded-2xl p-1 bg-gradient-to-br from-[rgba(159,239,0,0.3)] to-transparent">
            <div className="bg-[#0a1628] rounded-xl p-6 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Target size={160} className="htb-color" />
              </div>

              <div className="flex flex-col items-center mb-10 relative z-10 text-center">
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src="/htb-logo.png"
                    alt="HackTheBox"
                    width={80}
                    height={80}
                    className="rounded bg-black/50 p-2 border border-[#9fef00]/30 mb-2"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div>
                    <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
                      HackTheBox
                      <div className="status-dot !bg-[#9fef00] !shadow-[0_0_8px_#9fef00]" />
                    </h3>
                    <a
                      href={hacktheboxData.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9fef00] text-base font-mono hover:underline flex items-center justify-center gap-1 mt-2"
                    >
                      @{hacktheboxData.username} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 relative z-10">
                <div className="bg-black/30 border border-[#9fef00]/20 rounded-lg p-5 text-center">
                  <div className="text-sm text-[#cbd5e1] mb-1">Rank</div>
                  <div className="text-xl font-bold htb-color font-mono">{hacktheboxData.rank}</div>
                  <div className="text-xs text-[#94a3b8] mt-1">{hacktheboxData.globalRank}</div>
                </div>
                <div className="bg-black/30 border border-[#9fef00]/20 rounded-lg p-5 text-center">
                  <div className="text-sm text-[#cbd5e1] mb-1">Points</div>
                  <div className="text-xl font-bold text-white font-mono">{hacktheboxData.points}</div>
                </div>
                <div className="bg-black/30 border border-[#9fef00]/20 rounded-lg p-5 text-center">
                  <div className="text-sm text-[#cbd5e1] mb-1">Machines</div>
                  <div className="text-xl font-bold text-white font-mono">{hacktheboxData.machinesSolved}</div>
                </div>
                <div className="bg-black/30 border border-[#9fef00]/20 rounded-lg p-5 text-center">
                  <div className="text-sm text-[#cbd5e1] mb-1">Challenges</div>
                  <div className="text-xl font-bold text-white font-mono">{hacktheboxData.challengesSolved}</div>
                </div>
              </div>

              <div className="relative z-10 mt-auto flex flex-col items-center">
                 <div className="text-base font-bold text-white mb-4">Live Status</div>
                 <div className="w-full h-auto rounded-lg overflow-hidden border border-[#9fef00]/20 bg-black/50 p-6 flex items-center justify-center">
                    <div className="text-center font-mono text-[#9fef00] text-base flex flex-wrap justify-center gap-12">
                      <div>User ID: {hacktheboxData.userId}</div>
                      <div>Respect: {hacktheboxData.respect}</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
