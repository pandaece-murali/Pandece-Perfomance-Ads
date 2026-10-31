"use client";

import React, { useState, useEffect } from "react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 600px, hide near the lead-form at the bottom
      const scrolled = window.scrollY > 600;
      const leadFormEl = document.getElementById("lead-form");
      if (leadFormEl) {
        const rect = leadFormEl.getBoundingClientRect();
        // If lead form is in viewport, hide sticky bar
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(false);
          return;
        }
      }
      setVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToLeadForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-2xl animate-fade-in transition-all">
      <div className="rounded-2xl bg-[#101D35]/95 backdrop-blur-md border border-white/20 p-3 sm:px-5 sm:py-3 shadow-2xl shadow-black/40 flex items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></div>
          <div className="truncate">
            <span className="text-xs font-bold block truncate">
              Planning your 2026–27 intake?
            </span>
            <span className="text-[10px] text-slate-300 hidden sm:block truncate">
              Audit your student acquisition cost leaks before scaling budget.
            </span>
          </div>
        </div>

        <button
          onClick={scrollToLeadForm}
          className="shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r from-[#2864F0] to-[#5B8CFF] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
        >
          <span>Get Free Review</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

