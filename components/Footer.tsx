import { personalInfo } from "@/lib/data";
import { Shield, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5 bg-[#030712] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-[#00f5ff]" />
              <span className="font-mono text-sm font-bold text-white tracking-tight">
                DENYS<span className="text-[#00f5ff]">.STOLYK</span>
              </span>
            </div>
            <p className="text-[#475569] text-xs font-mono max-w-xs text-center md:text-left leading-relaxed">
              Cybersecurity Researcher · KNUIA Cadet · Offensive & Defensive Specialist
            </p>
          </div>

          {/* Copyright & Status */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-4 text-[#64748b] text-[10px] font-mono uppercase tracking-[0.2em] mb-2">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
                Server Status: Operational
              </span>
              <span className="flex items-center gap-1">
                <Terminal size={10} />
                Encrypted Session
              </span>
            </div>
            <div className="text-[#475569] text-[10px] font-mono">
              &copy; {currentYear} DENYS STOLYK. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
