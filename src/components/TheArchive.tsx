"use client";

import { motion } from "framer-motion";
import { Database, Network, ShieldCheck, Terminal } from "lucide-react";

const TIMELINE_DATA = [
  {
    year: "2009 - 2014",
    title: "The Foundation",
    subtitle: "NYU / Pilot Creative / Eat Yo Beats",
    description: "Studied investment management at Duquesne University before transferring to NYU's prestigious Clive Davis Institute. Directed strategy at Pilot Creative Management for top-tier pop producers (Britney Spears, Maroon 5). Concurrently founded 'Eat Yo Beats', a music aggregator establishing strategic partnerships with Live Nation, Red Bull, and Google Ventures-backed DJZ.",
    icon: <Network size={20} />,
  },
  {
    year: "2012 - 2022",
    title: "The Infrastructure Pivot",
    subtitle: "AOW Solutions / Cyber Security / Clearance",
    description: "Founded 'AOW Solutions LLC', an international tech agency managing offshore engineering teams. During this period, marked a return to music production with the release of the project 'DAMNED'. Evolved into deep enterprise cyber security: engineering distributed systems and IAM protocols for the Intelligence Community and IRS (maintaining a DoD Top Secret Clearance). Concurrently founded the startup 'Raivana', raising capital and securing a US Patent (US20200410170A1) for translating natural language into logical access control policies.",
    icon: <ShieldCheck size={20} />,
  },
  {
    year: "2023 - PRESENT",
    title: "The Synthesis",
    subtitle: "U.S. Senate / Down Special Labs / Hard Reset",
    description: "Served as a Senior Identity Management Specialist at the Senate Sergeant at Arms, securing federal legislative infrastructure. Concurrently, the convergence of psychological identity systems, global software scaling, and underground electronic music culminated in founding Down Special Labs. Architecting decentralized experiential reality by deploying physical analog hardware (Rage Box) and edge-rendered digital tracking systems to build localized, real-time MMOs disguised as live performances.",
    icon: <Database size={20} />,
  },
];

export default function TheArchive() {
  return (
    <section className="p-8 md:p-16 relative bg-[#0a0a0a] border-t border-cyber-slate">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12 text-neon-red font-mono uppercase tracking-widest text-sm">
          <Terminal size={16} />
          <span>SYS_ARCHIVE // DECLASSIFIED</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-heading mb-16 uppercase text-white tracking-wide">
          The Codex
        </h2>

        <div className="space-y-12">
          {TIMELINE_DATA.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 border-l border-cyber-slate/50 hover:border-terminal-green transition-colors duration-300 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 bg-[#0a0a0a] border-2 border-cyber-slate group-hover:border-terminal-green w-6 h-6 rounded-none flex items-center justify-center text-cyber-slate group-hover:text-terminal-green transition-colors duration-300">
                {item.icon}
              </div>

              <div className="font-mono text-neon-red text-sm tracking-widest mb-2">
                {item.year}
              </div>
              <h3 className="text-2xl font-heading uppercase text-white mb-1">
                {item.title}
              </h3>
              <div className="text-terminal-green font-mono text-xs tracking-widest uppercase mb-4 opacity-70">
                {item.subtitle}
              </div>
              <p className="font-mono text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
