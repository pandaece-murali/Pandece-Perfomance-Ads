"use client";

import React from "react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    "Google Ads Management",
    "Meta Ads Management",
    "Landing Page Development",
    "Conversion Tracking & Reporting",
    "CRM & Marketing Automation",
  ];

  return (
    <footer className="bg-[#0B1324] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#2864F0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Punchline Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#101D35] to-[#1A2D52] border border-white/15 text-center mb-16 shadow-2xl">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#5B8CFF] block mb-3">
            The PANDAeCe Mandate
          </span>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight max-w-4xl mx-auto leading-snug">
            “Stop judging admission campaigns by enquiry volume. Start measuring cost, quality and revenue per student acquired.”
          </h3>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => scrollTo("lead-form")}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#2864F0] to-[#5B8CFF] text-white font-bold text-sm shadow-lg shadow-[#2864F0]/30 hover:shadow-[#2864F0]/50 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Request Your 2026–27 Intake Review</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2864F0] to-[#5B8CFF] flex items-center justify-center text-white font-black text-xl shadow-md shadow-[#2864F0]/30">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black tracking-tight text-white">
                  PANDA<span className="text-[#5B8CFF]">eCe</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300 -mt-1">
                  Performance Marketing for Education
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Engineering high-intent student acquisition architectures for universities, B-schools, medical & engineering colleges, and premier educational institutions across India.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Accepting selective institutions for the upcoming admission intake.</span>
            </div>
          </div>

          {/* Services Col */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Core Performance Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {services.map((svc, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-[#5B8CFF] transition-colors">
                  <span className="text-[#2864F0] font-bold">›</span>
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button onClick={() => scrollTo("outcomes")} className="hover:text-white transition-colors">
                  Business Outcomes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("before-after")} className="hover:text-white transition-colors">
                  Before vs. After (Case Study)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("strategy")} className="hover:text-white transition-colors">
                  5-Step Admission Funnel
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("calculator")} className="hover:text-white transition-colors">
                  Admission Economics Calculator
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("lead-form")} className="hover:text-white transition-colors">
                  Request Intake Review
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            © 2026 PANDAeCe. All rights reserved. Performance Marketing for Higher Education.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Advisory</span>
            <span>Lead Verification Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
