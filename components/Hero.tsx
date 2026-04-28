"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Shield, Zap, Eye } from "lucide-react";
import { personalInfo } from "@/lib/data";

// Floating particle component
function Particle({ x, y, size, delay, duration }: { x: number; y: number; size: number; delay: number; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(0,245,255,0.6), transparent)`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Typing effect
function TypingText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");

  useEffect(() => {
    const current = texts[index];
    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("waiting"), 2000);
        return () => clearTimeout(t);
      }
    } else if (phase === "waiting") {
      const t = setTimeout(() => setPhase("deleting"), 500);
      return () => clearTimeout(t);
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setIndex((i) => (i + 1) % texts.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, index, texts]);

  return (
    <span className="text-[#00f5ff]">
      {displayed}
      <span className="cursor-blink text-[#00ff88]">▋</span>
    </span>
  );
}



export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [particleList, setParticleList] = useState<{ x: number, y: number, size: number, delay: number, duration: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: i * 0.3,
      duration: 3 + Math.random() * 3,
    }));
    setParticleList(generated);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 30;
    const y = (e.clientY - top - height / 2) / 30;
    heroRef.current.style.setProperty("--mx", `${x}px`);
    heroRef.current.style.setProperty("--my", `${y}px`);
  };

  const scrollToAbout = () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  const scrollToHub = () =>
    document.querySelector("#hub")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #030712 0%, #070f1a 50%, #030b15 100%)" }}
    >
      {/* Animated grid bg */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 w-32 h-32 border-l-2 border-t-2 border-[rgba(0,245,255,0.2)] rounded-tl-lg" />
      <div className="absolute bottom-20 right-8 w-32 h-32 border-r-2 border-b-2 border-[rgba(0,245,255,0.2)] rounded-br-lg" />
      <div className="absolute top-20 right-8 w-16 h-16 border-r-2 border-t-2 border-[rgba(0,255,136,0.15)] rounded-tr-lg" />
      <div className="absolute bottom-20 left-8 w-16 h-16 border-l-2 border-b-2 border-[rgba(0,255,136,0.15)] rounded-bl-lg" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particleList.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.4)] to-transparent pointer-events-none"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute" }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,245,255,0.2)] bg-[rgba(0,245,255,0.04)] mb-8"
        >
          <div className="status-dot" />
          <span className="text-xs font-mono text-[#94a3b8]">
            SYSTEM ONLINE · {personalInfo.university}
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
            <span className="text-white">{personalInfo.name.split(" ")[0]} </span>
            <span className="gradient-text-cyan">{personalInfo.name.split(" ")[1]}</span>
          </h1>
        </motion.div>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-mono text-lg md:text-2xl mb-6 h-10"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="text-[#475569]">$ whoami → </span>
          <TypingText
            texts={[
              "Cybersecurity Student",
              "Penetration Tester",
              "OSINT Researcher",
              "Network Analyst",
              "Future Red Teamer",
              "Security Engineer",
            ]}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.year} · {personalInfo.university} ·{" "}
          Focused on building a career in{" "}
          <span className="text-[#00f5ff]">offensive security</span> and{" "}
          <span className="text-[#00ff88]">cyber defense</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={scrollToHub}
            className="btn-neon group flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-mono font-semibold text-sm text-black"
            style={{
              background: "linear-gradient(135deg, #00f5ff, #00ff88)",
              boxShadow: "0 0 30px rgba(0,245,255,0.3), 0 0 60px rgba(0,245,255,0.1)",
            }}
          >
            <Zap size={16} className="group-hover:scale-110 transition-transform" />
            VIEW CYBER HUB
          </button>
          <button
            onClick={scrollToAbout}
            className="btn-neon group flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-mono font-semibold text-sm text-[#00f5ff] border border-[rgba(0,245,255,0.3)] bg-[rgba(0,245,255,0.03)] hover:border-[rgba(0,245,255,0.6)] transition-all"
          >
            <Eye size={16} className="group-hover:scale-110 transition-transform" />
            EXPLORE PROFILE
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-8 md:gap-16 flex-wrap"
        >
          {[
            { icon: <Shield size={16} />, val: "46+", label: "THM Rooms", color: "#a2ea2a" },
            { icon: <Zap size={16} />, val: "8+", label: "HTB Machines", color: "#9fef00" },
            { icon: <Eye size={16} />, val: "10+", label: "Cisco Certs", color: "#049fd9" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1" style={{ color: stat.color }}>
                {stat.icon}
                <span className="text-2xl font-black" style={{ color: stat.color, fontFamily: "'JetBrains Mono', monospace" }}>
                  {stat.val}
                </span>
              </div>
              <span className="text-xs font-mono text-[#475569] uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#475569] hover:text-[#00f5ff] transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}
