"use client";

import { motion } from "framer-motion";
import { Cpu, Music, Code, Network } from "lucide-react";

export default function TheLab() {
  return (
    <section className="border-b-2 border-cyber-slate p-8 md:p-16">
      <div className="flex items-center gap-3 mb-16 text-terminal-green font-mono uppercase tracking-widest text-sm">
        <Cpu size={16} />
        <span>Hardware & Fabrication // The Lab</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Hardware Block */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="brutalist-border p-6 flex flex-col justify-between h-full group"
        >
          <div>
            <div className="flex items-center gap-3 text-neon-red mb-4">
              <Network size={20} />
              <h3 className="font-heading text-lg text-white">The Rage Box</h3>
            </div>
            <p className="font-mono text-sm text-text-secondary leading-relaxed mb-6">
              Boutique preamp and signal processor. Custom-fabricated analog distortion matrices designed for chaotic live modulation and feedback loops.
            </p>
          </div>
          <div className="border-t border-cyber-slate pt-4 mt-auto">
            <span className="text-xs font-mono text-terminal-green">STATUS: PROTOTYPE v2.4</span>
          </div>
        </motion.div>

        {/* Visual Workflow Block */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="brutalist-border p-6 flex flex-col justify-between h-full group"
        >
          <div>
            <div className="flex items-center gap-3 text-white mb-4">
              <Music size={20} />
              <h3 className="font-heading text-lg">Resolume Arena</h3>
            </div>
            <p className="font-mono text-sm text-text-secondary leading-relaxed mb-6">
              Live VJ mapping and reactive visual generation triggered by crowd metrics and live audio analysis protocols.
            </p>
          </div>
          <div className="border-t border-cyber-slate pt-4 mt-auto">
            <span className="text-xs font-mono text-cyber-slate group-hover:text-white transition-colors">INTEGRATION ACTIVE</span>
          </div>
        </motion.div>

        {/* Software Architecture Block */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="brutalist-border p-6 flex flex-col justify-between h-full group md:col-span-2 lg:col-span-1"
        >
          <div>
            <div className="flex items-center gap-3 text-white mb-4">
              <Code size={20} />
              <h3 className="font-heading text-lg">Next.js / Blender</h3>
            </div>
            <p className="font-mono text-sm text-text-secondary leading-relaxed mb-6">
              3D asset generation fused with high-performance edge computing. Our digital layer acts as the UI for the physical crowd experience.
            </p>
          </div>
          <div className="border-t border-cyber-slate pt-4 mt-auto">
            <span className="text-xs font-mono text-cyber-slate group-hover:text-white transition-colors">EDGE DEPLOYMENT</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
