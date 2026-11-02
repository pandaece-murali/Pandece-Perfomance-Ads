"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function BeforeAfterSection() {
  const [viewMode, setViewMode] = useState<"side-by-side" | "table">("side-by-side");

  const scrollToLeadForm = () => {
    const el = document.getElementById("admission-form") || document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const input = document.getElementById("full-name-input") as HTMLInputElement | null;
        if (input) input.focus();
      }, 600);
    }
  };

  const metricsData = [
    {
      label: "Monthly Ad Spend",
      before: "₹3,00,000",
      after: "₹3,00,000",
      delta: "Same Spend",
      deltaType: "neutral",
      beforeVal: 300000,
      afterVal: 300000,
      unit: "₹",
      desc: "Zero budget increase needed for growth",
    },
    {
      label: "Total Enquiries",
      before: "1,000",
      after: "1,500",
      delta: "+50%",
      deltaType: "positive",
      beforeVal: 1000,
      afterVal: 1500,
      unit: "",
      desc: "Filtered search & social intent targeting",
    },
    {
      label: "Qualified Leads (CPQL)",
      before: "300",
      after: "600",
      delta: "+100% (2x)",
      deltaType: "positive",
      beforeVal: 300,
      afterVal: 600,
      unit: "",
      desc: "Pre-screened for eligibility, city & fees",
    },
    {
      label: "Confirmed Admissions",
      before: "30",
      after: "75",
      delta: "+150% (+45 Seats)",
      deltaType: "highlight",
      beforeVal: 30,
      afterVal: 75,
      unit: "",
      desc: "Actual fee-paying enrolled students",
    },
    {
      label: "Cost Per Lead (CPL)",
      before: "₹300",
      after: "₹200",
      delta: "-33% Lower",
      deltaType: "positive",
      beforeVal: 300,
      afterVal: 200,
      unit: "₹",
      desc: "Optimised landing page conversion rate",
    },
    {
      label: "Cost Per Qualified Lead (CPQL)",
      before: "₹1,000",
      after: "₹500",
      delta: "50% Lower",
      deltaType: "highlight",
      beforeVal: 1000,
      afterVal: 500,
      unit: "₹",
      desc: "Halved acquisition cost on verified prospects",
    },
    {
      label: "Cost Per Admission (CPA)",
      before: "₹10,000",
      after: "₹4,000",
      delta: "60% Lower",
      deltaType: "highlight",
      beforeVal: 10000,
      afterVal: 4000,
      unit: "₹",
      desc: "True marketing spend per occupied classroom seat",
    },
    {
      label: "Assumed Revenue / Admission",
      before: "₹50,000",
      after: "₹50,000",
      delta: "Benchmark",
      deltaType: "neutral",
      beforeVal: 50000,
      afterVal: 50000,
      unit: "₹",
      desc: "Identical course economics in both periods",
    },
    {
      label: "Attributed Fee Revenue",
      before: "₹15,00,000",
      after: "₹37,50,000",
      delta: "+₹22,50,000 (+150%)",
      deltaType: "highlight",
      beforeVal: 1500000,
      afterVal: 3750000,
      unit: "₹",
      desc: "Verified institutional fee collection",
    },
    {
      label: "Revenue-to-Ad-Spend (ROAS)",
      before: "5x",
      after: "12.5x",
      delta: "+150% Lift (2.5x)",
      deltaType: "highlight",
      beforeVal: 5,
      afterVal: 12.5,
      unit: "x",
      desc: "Defendable return on marketing investment",
    },
  ];

  return (
    <section id="before-after" className="py-10 sm:py-14 bg-[#101D35] text-white relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 left-[-100px] w-96 h-96 bg-[#2864F0]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-100px] w-96 h-96 bg-[#5B8CFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2864F0]/20 border border-[#2864F0]/40 text-[#5B8CFF] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Illustrative Case Study | Education Sector</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3 uppercase">
              SAME ₹3,00,000 BUDGET. <br />
              <span className="text-[#5B8CFF]">30 ADMISSIONS OR 75?</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              An institution spending ₹3,00,000/month on ads — and closing just 30 admissions. The real issue wasn't enquiry volume. It was zero visibility into lead quality, conversion and true cost per student.
            </p>

            {/* Toggle view buttons */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                onClick={() => setViewMode("side-by-side")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "side-by-side"
                    ? "bg-[#2864F0] text-white shadow-md shadow-[#2864F0]/30"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                Side-by-Side Visual Dashboard
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "table"
                    ? "bg-[#2864F0] text-white shadow-md shadow-[#2864F0]/30"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                Complete Metric Breakdown Table
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Big Visual Impact Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2864F0]/25 to-white/[0.03] border border-[#2864F0]/40 text-center relative overflow-hidden">
            <div className="text-xs uppercase font-extrabold tracking-wider text-[#5B8CFF] mb-1">
              Admission Surge
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white font-display mb-1">
              +150%
            </div>
            <p className="text-xs text-slate-300 font-medium">
              45 extra students on identical ₹3L spend
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-white/[0.03] border border-emerald-500/30 text-center relative overflow-hidden">
            <div className="text-xs uppercase font-extrabold tracking-wider text-emerald-300 mb-1">
              Cost Per Qualified Lead
            </div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-display mb-1">
              50% Lower
            </div>
            <p className="text-xs text-slate-300 font-medium">
              ₹1,000 drop down to ₹500 CPQL
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-white/[0.03] border border-indigo-500/30 text-center relative overflow-hidden">
            <div className="text-xs uppercase font-extrabold tracking-wider text-indigo-300 mb-1">
              Cost Per Admission
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white font-display mb-1">
              60% Lower
            </div>
            <p className="text-xs text-slate-300 font-medium">
              ₹10,000 slash down to ₹4,000 CPA
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/20 to-white/[0.03] border border-amber-500/30 text-center relative overflow-hidden">
            <div className="text-xs uppercase font-extrabold tracking-wider text-amber-300 mb-1">
              Attributed ROAS
            </div>
            <div className="text-3xl sm:text-4xl font-black text-amber-400 font-display mb-1">
              5x → 12.5x
            </div>
            <p className="text-xs text-slate-300 font-medium">
              ₹15L to ₹37.5L collected revenue
            </p>
          </div>
        </div>

        {/* View Mode 1: Interactive Side-by-Side Dashboard */}
        {viewMode === "side-by-side" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
            
            {/* BEFORE PANEL */}
            <div className="rounded-3xl bg-slate-900/80 border border-rose-500/30 p-6 sm:p-8 backdrop-blur-md relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
                    Before PANDAeCe System
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/20">
                  Unqualified High-Leak Funnel
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-sm text-slate-300">Monthly Ad Spend</span>
                  <span className="font-mono font-bold text-white text-base">₹3,00,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-sm text-slate-300">Total Enquiries</span>
                  <span className="font-mono font-bold text-white text-base">1,000 enquiries</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-sm text-slate-300">Qualified Leads (Only 30%)</span>
                  <span className="font-mono font-bold text-rose-300 text-base">300 qualified</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
                  <div>
                    <span className="text-xs uppercase font-extrabold text-rose-400 block">Confirmed Admissions</span>
                    <span className="text-2xl font-black text-white font-mono">30 Admissions</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-300 block">Cost Per Admission</span>
                    <span className="text-lg font-bold text-rose-300 font-mono">₹10,000</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-sm text-slate-300">Cost per Qualified Lead</span>
                  <span className="font-mono font-bold text-rose-300 text-base">₹1,000 CPQL</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-sm text-slate-300">Attributed Revenue</span>
                  <span className="font-mono font-bold text-white text-base">₹15,00,000</span>
                </div>
                <div className="flex justify-between items-center p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-sm font-bold text-slate-200">Revenue-to-Ad-Spend</span>
                  <span className="font-mono font-black text-rose-300 text-lg">5.0x ROAS</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-800/40 text-xs text-rose-200">
                <strong>The Symptoms:</strong> Counsellor burnout chasing 700 dead form fills, no course-level attribution, high acquisition cost, and anxious management meetings.
              </div>
            </div>

            {/* AFTER PANEL */}
            <div className="rounded-3xl bg-slate-900/90 border-2 border-[#2864F0] p-6 sm:p-8 backdrop-blur-md relative shadow-2xl shadow-[#2864F0]/20">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-black uppercase tracking-widest text-[#5B8CFF]">
                    After PANDAeCe System
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  +150% Net Admissions
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-sm text-slate-300">Monthly Ad Spend</span>
                  <span className="font-mono font-bold text-white text-base">₹3,00,000 <span className="text-xs font-sans text-slate-300">(Unchanged)</span></span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-sm text-slate-300">Total Enquiries</span>
                  <span className="font-mono font-bold text-white text-base">1,500 <span className="text-xs text-emerald-400">(+50%)</span></span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-sm text-slate-300">Qualified Leads (Doubled!)</span>
                  <span className="font-mono font-bold text-emerald-400 text-base">600 qualified <span className="text-xs">(+100%)</span></span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-[#2864F0]/20 border border-[#2864F0]/50 shadow-inner">
                  <div>
                    <span className="text-xs uppercase font-extrabold text-[#5B8CFF] block">Confirmed Admissions</span>
                    <span className="text-3xl font-black text-white font-mono">75 Admissions</span>
                    <span className="text-xs font-bold text-emerald-400 block mt-0.5">+45 Extra Students</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-300 block">Cost Per Admission</span>
                    <span className="text-2xl font-black text-emerald-400 font-mono">₹4,000</span>
                    <span className="text-xs text-emerald-300 block">60% Drop</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-sm text-slate-300">Cost per Qualified Lead</span>
                  <span className="font-mono font-bold text-emerald-400 text-base">₹500 CPQL <span className="text-xs">(50% Lower)</span></span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-sm text-slate-300">Attributed Revenue</span>
                  <span className="font-mono font-bold text-white text-base">₹37,50,000 <span className="text-xs text-emerald-400">(+₹22.5L)</span></span>
                </div>
                <div className="flex justify-between items-center p-3.5 rounded-xl bg-gradient-to-r from-[#2864F0]/30 to-emerald-500/20 border border-[#2864F0]">
                  <span className="text-sm font-bold text-white">Revenue-to-Ad-Spend</span>
                  <span className="font-mono font-black text-emerald-400 text-2xl">12.5x ROAS</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#2864F0]/15 border border-[#2864F0]/30 text-xs text-slate-200">
                <strong className="text-white">The Outcome:</strong> High-intent applicant pipeline, enthusiastic counselling desk, transparent seat economics, and a board report with 12.5x attributed ROAS.
              </div>
            </div>

          </div>
        ) : (
          /* View Mode 2: Complete Metric Breakdown Table */
          <div className="mb-14 overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-xs uppercase font-extrabold text-slate-300 tracking-wider">
                  <th className="p-4">Key Metric</th>
                  <th className="p-4 text-rose-300">Before PANDAeCe</th>
                  <th className="p-4 text-[#5B8CFF]">After PANDAeCe</th>
                  <th className="p-4 text-emerald-400">Net Improvement</th>
                  <th className="p-4 hidden md:table-cell">Strategic Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-medium">
                {metricsData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                    <td className="p-4 font-bold text-white">{row.label}</td>
                    <td className="p-4 font-mono text-slate-300">{row.before}</td>
                    <td className="p-4 font-mono font-bold text-white">{row.after}</td>
                    <td className="p-4 font-mono font-bold">
                      <span className={`px-2.5 py-1 rounded-md text-xs ${
                        row.deltaType === 'highlight' 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                          : row.deltaType === 'positive' 
                          ? 'bg-[#2864F0]/20 text-[#5B8CFF]' 
                          : 'bg-white/10 text-slate-300'
                      }`}>
                        {row.delta}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-slate-300 hidden md:table-cell">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* "What Changed" Five Strategic Pillars */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/15 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-xl bg-[#2864F0] flex items-center justify-center text-white font-black text-sm">
                ✓
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                What Changed in This Scenario
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover-card-lift">
                <span className="text-xs font-mono font-bold text-[#5B8CFF] block mb-1">01. Targeting Rebuilt</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rebuilt around real course, location and intent signals rather than broad keywords.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover-card-lift">
                <span className="text-xs font-mono font-bold text-[#5B8CFF] block mb-1">02. Landing Pages</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Aligned to each programme, with clear information and one focused enquiry action.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover-card-lift">
                <span className="text-xs font-mono font-bold text-[#5B8CFF] block mb-1">03. Lead Quality Scored</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Scored dynamically instead of counting every junk form fill equally.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover-card-lift">
                <span className="text-xs font-mono font-bold text-[#5B8CFF] block mb-1">04. CRM Connected</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Leads connected to admissions using available CRM and verified conversion data.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover-card-lift">
                <span className="text-xs font-mono font-bold text-[#5B8CFF] block mb-1">05. Budget Shifted</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Budget reallocated continuously against measured admissions performance.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Closing Action Banner */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-base sm:text-lg font-semibold text-white mb-6">
              Your campaigns deserve the same scorecard. Enquiries aren't the finish line. Qualified prospects, confirmed admissions, acquisition cost and attributable revenue are.
            </p>
            <button
              onClick={scrollToLeadForm}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#2864F0] to-[#5B8CFF] text-white font-bold text-base shadow-xl shadow-[#2864F0]/30 hover:shadow-[#2864F0]/50 hover:-translate-y-0.5 transition-all cursor-pointer inline-flex items-center gap-3 hover-card-lift"
            >
              <span>Get Your Admission Marketing Reviewed</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

