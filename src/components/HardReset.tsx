"use client";

import { motion } from "framer-motion";
import { Activity, Users, MapPin, Radio } from "lucide-react";

export default function HardReset() {
  return (
    <section className="border-b-2 border-cyber-slate p-8 md:p-16 bg-[#0a0a0a]">
      <div className="flex items-center gap-3 mb-16 text-neon-red font-mono uppercase tracking-widest text-sm">
        <Radio className="animate-pulse" size={16} />
        <span>Live Deployment Status</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-heading mb-6">Hard Reset</h2>
          <p className="text-text-secondary font-mono mb-8 border-l-2 border-neon-red/30 pl-4">
            The flagship cooperative MMO experience. Bridging the gap between digital interfaces and physical underground showcases. Real-time metrics tracked via Edge architecture.
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="brutalist-border bg-cyber-black p-6 relative group"
          >
            <div className="absolute top-2 right-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-terminal-green animate-ping rounded-full"></span>
              <span className="text-xs text-terminal-green font-mono">LIVE</span>
            </div>
            <h3 className="text-xl font-heading text-white mb-2">Version 1.0</h3>
            <div className="flex items-center gap-2 text-text-secondary font-mono text-sm mb-6">
              <MapPin size={14} />
              <span>Washington D.C. [July 23]</span>
            </div>
            
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center border-b border-cyber-slate pb-2">
                <span className="text-text-secondary flex items-center gap-2"><Users size={14}/> Node Capacity</span>
                <span className="text-white">100% (450/450)</span>
              </div>
              <div className="flex justify-between items-center border-b border-cyber-slate pb-2">
                <span className="text-text-secondary flex items-center gap-2"><Activity size={14}/> Sync Variance</span>
                <span className="text-terminal-green">12ms</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="brutalist-border bg-cyber-black p-6 opacity-70 hover:opacity-100 transition-opacity relative"
          >
            <div className="absolute top-2 right-2">
              <span className="text-xs text-neon-red font-mono border border-neon-red px-2 py-1">ENCRYPTED</span>
            </div>
            <h3 className="text-xl font-heading text-white mb-2">Version 1.1</h3>
            <div className="flex items-center gap-2 text-text-secondary font-mono text-sm mb-6">
              <MapPin size={14} />
              <span>Mexico City [October 22]</span>
            </div>
            
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center border-b border-cyber-slate pb-2">
                <span className="text-text-secondary flex items-center gap-2"><Users size={14}/> Node Capacity</span>
                <span className="text-text-secondary">SCALING...</span>
              </div>
              <div className="flex justify-between items-center border-b border-cyber-slate pb-2">
                <span className="text-text-secondary flex items-center gap-2"><Activity size={14}/> Protocol</span>
                <span className="text-text-secondary">PENDING</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
