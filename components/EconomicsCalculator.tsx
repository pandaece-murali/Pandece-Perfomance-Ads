"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function EconomicsCalculator() {
  const [monthlySpend, setMonthlySpend] = useState<number>(300000);
  const [avgCourseFee, setAvgCourseFee] = useState<number>(50000);
  const [currentCPL, setCurrentCPL] = useState<number>(300);

  // Calculations
  // Baseline (Generic agency approach)
  const baseEnquiries = Math.round(monthlySpend / currentCPL);
  const baseQualifiedLeads = Math.round(baseEnquiries * 0.30); // 30% qualification benchmark
  const baseAdmissions = Math.round(baseQualifiedLeads * 0.10); // 10% conversion to admission
  const baseCPA = baseAdmissions > 0 ? Math.round(monthlySpend / baseAdmissions) : 0;
  const baseRevenue = baseAdmissions * avgCourseFee;
  const baseROAS = monthlySpend > 0 ? (baseRevenue / monthlySpend).toFixed(1) : "0.0";

  // PANDAeCe System (Simulated model from source document)
  const pandeceCPL = Math.round(currentCPL * 0.67); // 33% lower CPL
  const pandeceEnquiries = Math.round(monthlySpend / pandeceCPL);
  const pandeceQualifiedLeads = Math.round(pandeceEnquiries * 0.40); // 40% qualification (+100% lift)
  const pandeceAdmissions = Math.round(pandeceQualifiedLeads * 0.125); // higher quality leads convert at 12.5%
  const pandeceCPA = pandeceAdmissions > 0 ? Math.round(monthlySpend / pandeceAdmissions) : 0;
  const pandeceRevenue = pandeceAdmissions * avgCourseFee;
  const pandeceROAS = monthlySpend > 0 ? (pandeceRevenue / monthlySpend).toFixed(1) : "0.0";

  const extraSeats = pandeceAdmissions - baseAdmissions;
  const extraRevenue = pandeceRevenue - baseRevenue;

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

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-10 sm:py-14 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2864F0]/10 border border-[#2864F0]/20 text-[#2864F0] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Interactive Simulator</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#101D35] tracking-tight mb-3 uppercase">
              Test Your Admission Unit Economics
            </h2>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Move the sliders to match your monthly digital ad budget and course fee. See the difference between vanity lead gen and full-funnel seat acquisition.
            </p>
          </div>
        </ScrollReveal>

        {/* Calculator Body */}
        <ScrollReveal animation="scale-up" delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F5F8FF] p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover-card-lift">
          
          {/* Left Column: Sliders */}
          <div className="lg:col-span-6 space-y-7">
            {/* Slider 1: Monthly Budget */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-[#101D35]">
                  Monthly Advertising Spend
                </label>
                <span className="font-mono text-base font-extrabold text-[#2864F0] bg-white px-3 py-1 rounded-lg border border-slate-200">
                  {formatINR(monthlySpend)}
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={2000000}
                step={25000}
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2864F0]"
              />
              <div className="flex justify-between text-[11px] text-[#64748B] mt-1 font-medium">
                <span>₹50,000</span>
                <span>₹5,00,000</span>
                <span>₹10,00,000</span>
                <span>₹20,00,000</span>
              </div>
            </div>

            {/* Slider 2: Average Course Fee */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-[#101D35]">
                  Average Fee per Student / Intake
                </label>
                <span className="font-mono text-base font-extrabold text-[#2864F0] bg-white px-3 py-1 rounded-lg border border-slate-200">
                  {formatINR(avgCourseFee)}
                </span>
              </div>
              <input
                type="range"
                min={20000}
                max={500000}
                step={10000}
                value={avgCourseFee}
                onChange={(e) => setAvgCourseFee(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2864F0]"
              />
              <div className="flex justify-between text-[11px] text-[#64748B] mt-1 font-medium">
                <span>₹20,000</span>
                <span>₹1,00,000</span>
                <span>₹2,50,000</span>
                <span>₹5,00,000</span>
              </div>
            </div>

            {/* Slider 3: Current Cost Per Lead */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-[#101D35]">
                  Current Raw Cost per Lead (CPL)
                </label>
                <span className="font-mono text-base font-extrabold text-slate-700 bg-white px-3 py-1 rounded-lg border border-slate-200">
                  {formatINR(currentCPL)}
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={1000}
                step={25}
                value={currentCPL}
                onChange={(e) => setCurrentCPL(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2864F0]"
              />
              <div className="flex justify-between text-[11px] text-[#64748B] mt-1 font-medium">
                <span>₹100 (Unfiltered)</span>
                <span>₹300 (Standard)</span>
                <span>₹600</span>
                <span>₹1,000 (Premium)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-[#64748B]">
              💡 <strong>Model Note:</strong> This simulator applies the exact mathematical model from the PANDAeCe case study scenario (+150% admission efficiency on identical budget).
            </div>
          </div>

          {/* Right Column: Comparison Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
                Projected Monthly Admissions
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                +{extraSeats} Extra Confirmed Seats
              </span>
            </div>

            {/* Big Delta Display */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xs text-[#64748B] font-bold block mb-1">
                  Generic Agency Model
                </span>
                <span className="font-mono text-3xl font-black text-slate-600">
                  {baseAdmissions}
                </span>
                <span className="text-xs text-[#64748B] block mt-1">
                  Admissions @ {formatINR(baseCPA)} CPA
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#2864F0]/10 border border-[#2864F0]/30 text-center">
                <span className="text-xs text-[#2864F0] font-bold block mb-1">
                  PANDAeCe Model
                </span>
                <span className="font-mono text-3xl font-black text-[#2864F0]">
                  {pandeceAdmissions}
                </span>
                <span className="text-xs text-[#2864F0] block mt-1 font-semibold">
                  Admissions @ {formatINR(pandeceCPA)} CPA
                </span>
              </div>
            </div>

            {/* Financial Metrics Strip */}
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-[#64748B]">Attributed Course Revenue</span>
                <div className="text-right">
                  <span className="text-xs text-slate-400 line-through mr-2">{formatINR(baseRevenue)}</span>
                  <span className="font-mono font-bold text-[#101D35]">{formatINR(pandeceRevenue)}</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-[#64748B]">Attributed ROAS</span>
                <div className="text-right">
                  <span className="text-xs text-slate-400 line-through mr-2">{baseROAS}x</span>
                  <span className="font-mono font-black text-emerald-600 text-base">{pandeceROAS}x</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-[#64748B]">Incremental Fee Revenue</span>
                <span className="font-mono font-black text-emerald-600 text-base">
                  +{formatINR(extraRevenue)}
                </span>
              </div>
            </div>

            <button
              onClick={scrollToLeadForm}
              className="w-full py-3.5 rounded-xl bg-[#2864F0] text-white font-bold text-sm shadow-md hover:bg-[#1E50C7] transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01]"
            >
              <span>Audit Your Institution's Unit Economics</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

