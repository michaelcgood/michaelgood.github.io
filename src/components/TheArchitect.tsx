"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Fingerprint } from "lucide-react";

export default function TheArchitect() {
  return (
    <section className="p-8 md:p-16 relative bg-[#050505]">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6 text-neon-red font-mono uppercase tracking-widest text-sm">
            <Fingerprint size={16} />
            <span>Identity Protocol</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading mb-8 uppercase text-white">
            The Architect
          </h2>
          
          <div className="space-y-6 font-mono text-text-secondary leading-relaxed border-l-2 border-cyber-slate pl-6">
            <p>
              Operating at the intersection of Enterprise Cyber Security, distributed systems architecture, and underground music production. 
            </p>
            <p>
              With a background engineering for the Intelligence Community and holding a DoD Top Secret Clearance, the mission is simple: Engineer decentralized unity. By fusing high-level software architecture (Kubernetes, Java, Next.js) with aggressive analog hardware and alternative/emo-rap aesthetics, we are building systems that force human connection in physical spaces.
            </p>
            <p className="text-terminal-green">
              This is not a software company. This is a behavioral engineering lab.
            </p>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="brutalist-border aspect-square bg-[#0a0a0a] flex items-center justify-center p-8 relative overflow-hidden"
          >
            {/* Abstract aesthetic placeholder for the founder */}
            <ShieldAlert size={120} className="text-cyber-slate opacity-20 absolute" />
            
            <div className="relative z-10 text-center font-mono">
              <div className="text-2xl text-white mb-2">MICHAEL C. GOOD</div>
              <div className="text-terminal-green text-sm tracking-widest uppercase mb-6">Founder // Lead Engineer</div>
              
              <div className="grid grid-cols-2 gap-4 text-left text-xs border-t border-cyber-slate pt-6">
                <div>
                  <div className="text-cyber-slate mb-1">DOMAIN</div>
                  <div className="text-text-primary">Cyber / Full-Stack / Audio</div>
                </div>
                <div>
                  <div className="text-cyber-slate mb-1">CLEARANCE</div>
                  <div className="text-neon-red">LEVEL_0 (ROOT)</div>
                </div>
              </div>
            </div>
            
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
