"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ShieldAlert } from "lucide-react";
import { tryhackmeData } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function TryHackMe() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tryhackme" ref={ref} className="relative py-20 bg-[#070f1a]">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center gap-3 mb-4"
        >
          <span className="text-[#a2ea2a] font-mono text-sm">03.</span>
          <div className="h-px w-full max-w-[60px] bg-[#a2ea2a]/30" />
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-4xl md:text-5xl font-black mb-12 text-center"
        >
          TryHackMe <span className="text-[#a2ea2a]">Profile</span>
        </motion.h2>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="rounded-2xl p-1 bg-gradient-to-br from-[rgba(162,234,42,0.3)] to-transparent">
            <div className="bg-[#0a1628] rounded-xl p-6 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <ShieldAlert size={160} className="thm-color" />
              </div>

              <div className="flex flex-col items-center mb-10 relative z-10 text-center">
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src="/thm-logo.png"
                    alt="TryHackMe"
                    width={80}
                    height={80}
                    className="rounded bg-black/50 p-2 border border-[#a2ea2a]/30 mb-2"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div>
                    <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
                      TryHackMe
                      <div className="status-dot !bg-[#a2ea2a] !shadow-[0_0_8px_#a2ea2a]" />
                    </h3>
                    <a
                      href={tryhackmeData.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a2ea2a] text-base font-mono hover:underline flex items-center justify-center gap-1 mt-2"
                    >
                      @{tryhackmeData.username} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 relative z-10">
                <div className="bg-black/30 border border-[#a2ea2a]/20 rounded-lg p-5 text-center">
                  <div className="text-sm text-[#cbd5e1] mb-1">Rank</div>
                  <div className="text-xl font-bold thm-color font-mono">{tryhackmeData.rank}</div>
                  <div className="text-xs text-[#94a3b8] mt-1">{tryhackmeData.globalRank}</div>
                </div>
                <div className="bg-black/30 border border-[#a2ea2a]/20 rounded-lg p-5 text-center">
                  <div className="text-sm text-[#cbd5e1] mb-1">Points</div>
                  <div className="text-xl font-bold text-white font-mono">{tryhackmeData.points}</div>
                </div>
                <div className="bg-black/30 border border-[#a2ea2a]/20 rounded-lg p-5 text-center">
                  <div className="text-sm text-[#cbd5e1] mb-1">Rooms</div>
                  <div className="text-xl font-bold text-white font-mono">{tryhackmeData.roomsCompleted}</div>
                </div>
                <div className="bg-black/30 border border-[#a2ea2a]/20 rounded-lg p-5 text-center">
                  <div className="text-sm text-[#cbd5e1] mb-1">Streak</div>
                  <div className="text-xl font-bold text-[#fbbf24] font-mono">{tryhackmeData.streak} days 🔥</div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="text-base font-bold text-white mb-4">Recent Activity</div>
                <div className="flex flex-wrap justify-center gap-3">
                  {tryhackmeData.completedRooms.map((room) => (
                    <span
                      key={room}
                      className="px-4 py-2 text-sm rounded-full bg-[#a2ea2a]/10 border border-[#a2ea2a]/30 text-[#e2e8f0]"
                    >
                      {room}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
