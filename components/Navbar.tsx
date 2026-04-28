"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, Terminal } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#030712]/90 backdrop-blur-xl border-b border-[rgba(0,245,255,0.12)] shadow-[0_4px_40px_rgba(0,245,255,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Shield
                size={22}
                className="text-[#00f5ff] group-hover:scale-110 transition-transform duration-300"
                style={{ filter: "drop-shadow(0 0 8px rgba(0,245,255,0.6))" }}
              />
            </div>
            <div className="flex items-center gap-1">
              <span
                className="font-mono text-sm font-bold text-[#00f5ff]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="text-[#94a3b8]">~/</span>denys
                <span className="text-[#00ff88]">.stolyk</span>
              </span>
              <Terminal size={12} className="text-[#00f5ff] cursor-blink ml-1" />
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md group ${
                  active === link.href
                    ? "text-[#00f5ff]"
                    : "text-[#94a3b8] hover:text-[#e2e8f0]"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-[rgba(0,245,255,0.06)] border border-[rgba(0,245,255,0.15)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 font-mono text-xs">
                  {link.label}
                </span>
              </button>
            ))}
            <a
              href="mailto:deni.s201811111111@gmail.com"
              className="ml-3 px-4 py-2 text-xs font-mono font-semibold rounded-md border border-[#00f5ff] text-[#00f5ff] hover:bg-[rgba(0,245,255,0.1)] transition-all duration-300"
              style={{ boxShadow: "0 0 12px rgba(0,245,255,0.15)" }}
            >
              [CONTACT]
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#94a3b8] hover:text-[#00f5ff] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#070f1a]/95 backdrop-blur-xl border-b border-[rgba(0,245,255,0.1)] md:hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`px-4 py-3 text-sm font-mono rounded-md text-left transition-all ${
                    active === link.href
                      ? "text-[#00f5ff] bg-[rgba(0,245,255,0.06)]"
                      : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
