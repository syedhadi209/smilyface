import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, CheckCircle2, Shield, Cpu, Activity, Clock } from 'lucide-react';
import TiltCard from './TiltCard';

interface OrthodonticSolutionsProps {
  onOpenAppointment: () => void;
}

export default function OrthodonticSolutions({ onOpenAppointment }: OrthodonticSolutionsProps) {
  const [showSolutionsModal, setShowSolutionsModal] = useState(false);

  return (
    <>
      {/* Main Orthodontic Solutions Section exactly as in screenshot */}
      <section className="py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Related Orthodontic / Treatment Image wrapped in 3D interactive Tilt */}
          <TiltCard className="aspect-[16/10] w-full" intensity={6} hoverScale={1.01}>
            <div className="relative group overflow-hidden rounded-[32px] shadow-xl border border-gray-100 w-full h-full bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000" 
                alt="Professional dentist or orthodontist explaining clear aligner treatment to patient using high-precision 3D dental model" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle high-contrast lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Elegant details tag */}
              <span className="absolute bottom-5 left-5 bg-[#0B151E]/90 backdrop-blur-md text-white/95 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00A896]" />
                Smilly Face Clinical Center
              </span>
            </div>
          </TiltCard>

          {/* Right Column: Copywriting absolutely identical to user's screenshot */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight leading-tight text-[#0B151E]" id="ortho-solutions-heading">
              <span className="text-[#00A896] block mb-2">Explore Our Range of</span>
              <span>Modern Aligner Systems</span>
            </h2>
            
            <p className="text-gray-700 text-lg md:text-xl font-normal leading-relaxed">
              At Smilly Face, we are dedicated to streamlining your practice's workflow, freeing you from tedious digital setups.
            </p>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Access professionally curated, specialist-approved alignment treatments at cost-effective rates. We provide unmatched quality control and dimensional accuracy to enhance patient satisfaction. Experience complete real-time dashboard tracking and effortless communication with our dedicated support staff.
            </p>

            <div className="pt-4">
              <button 
                onClick={() => setShowSolutionsModal(true)}
                className="bg-[#4E5BA6] hover:bg-[#3E4A8D] text-white px-8 py-3.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-indigo-600/10 active:scale-95 cursor-pointer flex items-center gap-2"
                id="btn-ortho-know-more"
              >
                Learn More
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Know More Modal */}
      <AnimatePresence>
        {showSolutionsModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop blurring the screen */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
              onClick={() => setShowSolutionsModal(false)} />
            
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="bg-white rounded-[32px] shadow-2xl relative z-10 w-full max-w-2xl overflow-hidden border border-black/5"
              id="ortho-solutions-modal"
            >
              <button 
                onClick={() => setShowSolutionsModal(false)}
                className="absolute top-5 right-5 p-2 bg-gray-100 hover:bg-gray-200 text-[#0B151E] rounded-full transition-colors z-20 cursor-pointer"
                id="btn-close-solutions-modal"
              >
                <X size={16} />
              </button>

              <div className="p-8 space-y-6">
                <div>
                  <span className="px-3.5 py-1 bg-[#4E5BA6]/10 text-[#4E5BA6] text-[10px] font-bold uppercase tracking-wider rounded-full inline-block">
                    Precision Orthodontic Design
                  </span>
                  <h3 className="text-3xl font-serif font-bold text-[#0B151E] mt-3">State-of-the-Art Digital Craftsmanship</h3>
                  <p className="text-sm text-gray-500 mt-1.5">
                    We engineer seamless treatment pathways that optimize clinical accuracy and remove technical roadblocks.
                  </p>
                </div>

                {/* Key Benefits Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Cpu className="text-[#00A896]" size={20} />,
                      title: "Next-Gen Teeth Planning",
                      desc: "Uses dynamic predictive analysis to assess optimal placement for dental structures and roots."
                    },
                    {
                      icon: <Shield className="text-[#4E5BA6]" size={20} />,
                      title: "Certified Specialist Inspections",
                      desc: "Every digital design undergoes intensive custom evaluation by a licensed orthodontic authority."
                    },
                    {
                      icon: <Activity className="text-[#00A896]" size={20} />,
                      title: "Live Treatment Dashboard",
                      desc: "Secure, around-the-clock digital access offering immediate check-ins and smooth adjustments."
                    },
                    {
                      icon: <Clock className="text-[#4E5BA6]" size={20} />,
                      title: "Express 24-Hour Design Delivery",
                      desc: "Go from digital scan upload to an interactive dental pathway in under one day with fixed pricing."
                    }
                  ].map((feat, i) => (
                    <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-white rounded-lg shadow-sm">
                          {feat.icon}
                        </div>
                        <h4 className="font-bold text-sm text-[#0B151E]">{feat.title}</h4>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-teal-500/5 p-4 rounded-2xl flex items-center justify-between text-xs text-[#00A896] border border-teal-500/10">
                  <span className="flex items-center gap-2 font-medium">
                    <CheckCircle2 size={16} />
                    Independently verified smile transformations exceeding 99.2%
                  </span>
                  <span className="font-mono text-[10px] font-bold bg-[#00A896]/10 px-2 py-0.5 rounded uppercase font-semibold">SmillyClear™</span>
                </div>

                {/* Modal footer CTAs */}
                <div className="flex gap-3 pt-2">
                  <button 
                    onClick={() => {
                      setShowSolutionsModal(false);
                      onOpenAppointment();
                    }}
                    className="flex-1 bg-[#00A896] hover:bg-[#009080] text-white py-3.5 rounded-xl font-bold text-center text-xs transition-all cursor-pointer shadow-md shadow-teal-500/10"
                  >
                    Schedule a Free Diagnostics Visit
                  </button>
                  <button 
                    onClick={() => {
                      setShowSolutionsModal(false);
                      const element = document.getElementById('submit');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.hash = "#submit";
                      }
                    }}
                    className="flex-1 bg-[#0B151E] hover:bg-black text-white py-3.5 rounded-xl font-bold text-center text-xs transition-all cursor-pointer"
                  >
                    Submit Patient Scan Directly
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
