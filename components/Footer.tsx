"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const scrollTo = (id: string) => {
    const targetId = id === "lead-form" ? "admission-form" : id;
    const el = document.getElementById(targetId) || document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (id === "lead-form" || targetId === "admission-form") {
        setTimeout(() => {
          const input = document.getElementById("full-name-input") as HTMLInputElement | null;
          if (input) input.focus();
        }, 600);
      }
    }
  };

  const services = [
    "Google Ads Management",
    "Meta Ads Management",
    "Landing Page Development",
    "Conversion Tracking & Reporting",
    "CRM & Marketing Automation",
  ];

  return (
    <footer className="bg-[#0B1324] text-white pt-10 pb-8 sm:pt-14 sm:pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#2864F0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Punchline Banner */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#101D35] to-[#1A2D52] border border-white/15 text-center mb-8 sm:mb-10 shadow-2xl">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#5B8CFF] block mb-2">
            The PANDAeCe Mandate
          </span>
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight max-w-4xl mx-auto leading-snug">
            “Stop judging admission campaigns by enquiry volume. Start measuring cost, quality and revenue per student acquired.”
          </h3>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => scrollTo("lead-form")}
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#2864F0] to-[#5B8CFF] text-white font-bold text-sm shadow-lg shadow-[#2864F0]/30 hover:shadow-[#2864F0]/50 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Request Your Admission Marketing Review</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-10 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-white p-0.5 shadow-md shadow-[#2864F0]/30 overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="PANDAeCe Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <span className="font-display text-2xl font-black tracking-tight text-white">
                PANDA<span className="text-[#5B8CFF]">eCe</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Performance marketing and full-funnel student acquisition architectures built specifically for Indian colleges, universities, B-schools and EdTech companies.
            </p>

            <div className="pt-2 text-xs font-mono text-[#5B8CFF] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Intake Advisory &amp; Attribution Specialists</span>
            </div>
          </div>

          {/* Core Services */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {services.map((s, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#2864F0] font-bold">›</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-4">
              Explore Funnel
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => scrollTo("outcomes")} className="hover:text-white transition-colors cursor-pointer">
                  Target Outcomes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("before-after")} className="hover:text-white transition-colors cursor-pointer">
                  Before vs After Maths
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("strategy")} className="hover:text-white transition-colors cursor-pointer">
                  5-Step Growth Funnel
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("calculator")} className="hover:text-white transition-colors cursor-pointer">
                  Admission Economics Calculator
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("lead-form")} className="hover:text-white transition-colors cursor-pointer">
                  Request Intake Review
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 PANDAeCe. All rights reserved. Performance Marketing for Colleges, Universities &amp; EdTech Brands.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Advisory</span>
            <span className="hover:text-slate-200 cursor-pointer">Attribution Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
