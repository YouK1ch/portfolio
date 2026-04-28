"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ExternalLink, MessageSquare, Send, CodeXml } from "lucide-react";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden bg-[#070f1a]">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.2)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center gap-3 mb-4"
        >
          <span className="text-[#00f5ff] font-mono text-sm">06.</span>
          <div className="h-px w-full max-w-[60px] bg-[rgba(0,245,255,0.3)]" />
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-4xl md:text-5xl font-black mb-16 section-title text-center block mx-auto w-fit"
        >
          Establish <span className="gradient-text-cyan">Connection</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Contact Info */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <MessageSquare className="text-[#00f5ff]" />
              Let's talk security.
            </h3>
            <p className="text-[#cbd5e1] leading-relaxed mb-8 text-lg text-center">
              Whether you're looking for a cybersecurity researcher, a junior SOC analyst, or just want to discuss the latest threat vectors, my inbox is always open.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00f5ff]/10 flex items-center justify-center text-[#00f5ff] group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#475569] uppercase tracking-widest">Email</div>
                  <div className="text-white font-medium">{personalInfo.email}</div>
                </div>
                <ExternalLink size={16} className="ml-auto text-[#475569] group-hover:text-[#00f5ff]" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#b347ff]/50 hover:bg-[#b347ff]/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#b347ff]/10 flex items-center justify-center text-[#b347ff] group-hover:scale-110 transition-transform">
                  <CodeXml size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#475569] uppercase tracking-widest">GitHub</div>
                  <div className="text-white font-medium">@YouK1ch</div>
                </div>
                <ExternalLink size={16} className="ml-auto text-[#475569] group-hover:text-[#b347ff]" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Simple Contact Form (Cyber style) */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="card-cyber rounded-2xl p-8"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#00f5ff] uppercase tracking-widest">Identity</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#00f5ff]/50 focus:ring-1 focus:ring-[#00f5ff]/20 transition-all font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#00f5ff] uppercase tracking-widest">Frequency (Email)</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#00f5ff]/50 focus:ring-1 focus:ring-[#00f5ff]/20 transition-all font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#00f5ff] uppercase tracking-widest">Payload (Message)</label>
                <textarea
                  rows={4}
                  placeholder="Transmit your message..."
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#00f5ff]/50 focus:ring-1 focus:ring-[#00f5ff]/20 transition-all font-mono text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-neon w-full flex items-center justify-center gap-2 py-4 rounded-lg font-mono font-bold text-sm text-black"
                style={{
                  background: "linear-gradient(135deg, #00f5ff, #00ff88)",
                  boxShadow: "0 0 20px rgba(0,245,255,0.2)",
                }}
              >
                <Send size={16} />
                TRANSMIT MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
