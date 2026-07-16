"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";

export default function HeroTerminal() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center border-b-2 border-cyber-slate p-8 md:p-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <div className="flex items-center gap-3 text-terminal-green mb-6 font-mono text-sm tracking-widest uppercase">
          <Terminal size={16} />
          <span>System Boot // Sequence Initiated</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-8 uppercase">
          Architecting Decentralized <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-terminal-green to-neon-red glitch-hover inline-block">
            Experiential Reality.
          </span>
        </h1>
        
        <p className="text-text-secondary text-lg md:text-xl font-mono max-w-2xl mb-12 border-l-2 border-cyber-slate pl-4">
          Down Special Labs is a tactical engineering group building physical hardware and software systems for the live localization of crowds.
        </p>
        
        <button className="brutalist-border group relative inline-flex items-center gap-4 bg-cyber-black px-8 py-4 text-white font-heading font-bold uppercase tracking-widest hover:bg-terminal-green hover:text-cyber-black transition-all">
          <span>Enter Hard Reset [Live MMO]</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-terminal-green/50"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-terminal-green/50"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-terminal-green/50"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-terminal-green/50"></div>
    </section>
  );
}
