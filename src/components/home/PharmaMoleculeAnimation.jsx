import React, { useState, useEffect } from 'react';
import { Pill, Atom } from 'lucide-react';

export default function PharmaMoleculeAnimation() {
  const [activeTab, setActiveTab] = useState(0);
  const [rotation, setRotation] = useState(0);

  const molecules = [
    {
      name: "CLAVANEX-625",
      type: "Antibacterial Complex",
      purity: "99.98%",
      nodes: [
        { label: "Amoxicillin", x: "22%", y: "26%", color: "bg-teal-600" },
        { label: "Clavulanic Acid", x: "78%", y: "30%", color: "bg-emerald-600" },
        { label: "Core Matrix", x: "50%", y: "78%", color: "bg-slate-700" }
      ],
      purityLabel: "99.98% Purity Assay",
      speed: "< 15 Mins Dissolution"
    },
    {
      name: "PANCON-DSR",
      type: "Enteric PPI Complex",
      purity: "99.94%",
      nodes: [
        { label: "Pantoprazole", x: "24%", y: "28%", color: "bg-slate-700" },
        { label: "Domperidone", x: "76%", y: "32%", color: "bg-teal-600" },
        { label: "Target Release", x: "50%", y: "78%", color: "bg-emerald-600" }
      ],
      purityLabel: "Triple Layer Pellet",
      speed: "24-Hour Sustained"
    },
    {
      name: "VITALIFE-9G",
      type: "Nutraceutical Matrix",
      purity: "100%",
      nodes: [
        { label: "Ginseng 3%", x: "22%", y: "24%", color: "bg-amber-600" },
        { label: "Omega-3", x: "78%", y: "30%", color: "bg-teal-600" },
        { label: "24 Minerals", x: "50%", y: "78%", color: "bg-emerald-600" }
      ],
      purityLabel: "9G Pure Extracts",
      speed: "Max Bioavailability"
    }
  ];

  // Smooth rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.6) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const cur = molecules[activeTab];

  return (
    <div className="bg-navy-900 border border-slate-800 rounded-3xl p-6 shadow-2xl text-white">
      {/* Clean Header & Tab Switcher */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-pharma-600 text-white flex items-center justify-center shrink-0">
            <Atom className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-white">{cur.name}</h4>
            <p className="text-xs text-slate-400 font-body">{cur.type}</p>
          </div>
        </div>

        {/* Minimal Tabs */}
        <div className="flex gap-1 bg-navy-950 p-1 rounded-xl border border-slate-800">
          {['Antibiotic', 'Gastro', 'Nutra 9G'].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition font-heading ${
                activeTab === idx 
                  ? 'bg-pharma-600 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Neat Orbital Canvas */}
      <div className="relative w-full aspect-[16/11] bg-navy-950 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center p-4">
        {/* Subtle Orbit Rings */}
        <div 
          className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-dashed border-teal-500/20 pointer-events-none"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <div 
          className="absolute w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-slate-800 pointer-events-none"
          style={{ transform: `rotate(${-rotation * 1.2}deg)` }}
        />

        {/* Chemical Link Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-teal-500/25" strokeWidth="1.5" strokeDasharray="3 3">
          <line x1="22%" y1="26%" x2="50%" y2="50%" />
          <line x1="78%" y1="30%" x2="50%" y2="50%" />
          <line x1="50%" y1="78%" x2="50%" y2="50%" />
        </svg>

        {/* Central Core */}
        <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-900 border-2 border-pharma-500 flex flex-col items-center justify-center shadow-lg">
          <Pill className="w-6 h-6 text-pharma-400 transform -rotate-45" />
          <span className="text-[10px] font-bold text-teal-300 font-mono mt-0.5">{cur.purity}</span>
        </div>

        {/* Molecular Nodes */}
        {cur.nodes.map((node, i) => (
          <div
            key={i}
            className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
            style={{ left: node.x, top: node.y }}
          >
            <div className={`px-2.5 py-1 rounded-lg border border-white/10 text-center shadow-md ${node.color}`}>
              <p className="text-xs font-bold font-heading text-white">{node.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Minimal 2-Pill Bar */}
      <div className="flex items-center justify-between mt-3.5 pt-3 border-t border-slate-800 text-xs font-heading">
        <span className="text-slate-400 font-medium">{cur.purityLabel}</span>
        <span className="text-pharma-400 font-bold">{cur.speed}</span>
      </div>
    </div>
  );
}

