import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TryHackMe from "@/components/TryHackMe";
import HackTheBox from "@/components/HackTheBox";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-screen bg-[#030712]" />
        <div className="absolute top-[20vh] left-[10vw] w-[40vw] h-[40vw] bg-[#00f5ff]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10vh] right-[5vw] w-[30vw] h-[30vw] bg-[#b347ff]/5 blur-[100px] rounded-full" />
      </div>

      {/* Interface Layers */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <TryHackMe />
        <HackTheBox />
        <Certifications />
        <Contact />
        <Footer />
      </div>

      {/* Decorative Scan Lines Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      </div>
    </main>
  );
}
