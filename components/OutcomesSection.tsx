"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function OutcomesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

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

  const outcomes = [
    {
      num: "01",
      targetNumber: "20–30%",
      direction: "Target Reduction",
      title: "Cost per Qualified Lead",
      tag: "Top-Funnel Efficiency",
      gap: "Anyone can buy enquiries. Buying enquiries from students who match your course, city, eligibility and fee bracket is the hard part.",
      whatWeDo: [
        "Programme- and location-split campaigns",
        "Qualification-first ad messaging",
        "Audience refinement & intent negative filters",
        "Aggressive exclusion of irrelevant search terms",
      ],
      measuredBy: "Cost per qualified lead, qualification rate, qualified enquiry volume.",
      metricPill: "CPQL Target Drop",
      iconSvg: (
        <svg className="w-6 h-6 text-[#2864F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      ),
    },
    {
      num: "02",
      targetNumber: "15–25%",
      direction: "Target Reduction",
      title: "Cost per Admission",
      tag: "Unit Economics",
      gap: "Cheap leads are not cheap admissions. A ₹120 lead that never enrols is your most expensive lead.",
      whatWeDo: [
        "Track every lead: counselling → application → confirmation",
        "Pinpoint drop-off stages in real time",
        "Compare acquisition cost course by course",
        "Shift budget to campaigns producing verified admissions",
      ],
      measuredBy: "Ad spend per confirmed admission.",
      metricPill: "CPA Optimization",
      iconSvg: (
        <svg className="w-6 h-6 text-[#2864F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      ),
    },
    {
      num: "03",
      targetNumber: "10–20%",
      direction: "Target Improvement",
      title: "Lead-to-Admission Conversion",
      tag: "Sales Desk Velocity",
      gap: "Enquiries die between the ad and the admission desk — unclear eligibility, missing fee information, slow follow-up.",
      whatWeDo: [
        "Match ad message directly to course landing page",
        "State eligibility, curriculum and fees upfront",
        "Rebuild high-intent enquiry forms & conversion tracking",
        "Connect marketing data directly to admissions follow-up",
      ],
      measuredBy: "Confirmed admissions ÷ total enquiries × 100.",
      metricPill: "Intake Conversion Lift",
      iconSvg: (
        <svg className="w-6 h-6 text-[#2864F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      num: "04",
      targetNumber: "5x → 12.5x",
      direction: "Boardroom Ready",
      title: "A ROAS Target You Can Report Upward",
      tag: "Executive Reporting",
      gap: "Spend and lead counts tell you nothing about revenue. The board needs to see fee revenue generated per rupee invested.",
      whatWeDo: [
        "Attribute admission revenue to specific campaigns",
        "Track confirmations and verified fee collections",
        "Import offline admissions conversions where feasible",
        "Reallocate budget on verified revenue data, not vanity clicks",
      ],
      measuredBy: "Attributed admission revenue ÷ ad spend.",
      metricPill: "Verified ROAS Multiplier",
      iconSvg: (
        <svg className="w-6 h-6 text-[#2864F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="outcomes" className="py-10 sm:py-14 bg-[#F5F8FF] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#2864F0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#5B8CFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2864F0]/10 border border-[#2864F0]/20 text-[#2864F0] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Proposed Optimisation Targets</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#101D35] tracking-tight mb-4 uppercase">
              Four Numbers That Decide <br className="hidden sm:block" />
              <span className="text-[#2864F0]">Your Next Intake.</span>
            </h2>
            
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Stop tracking generic enquiry volumes that burn your admission desk. We re-engineer campaign architectures to hit targeted unit economics.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {outcomes.map((item, index) => (
            <ScrollReveal key={item.num} animation="fade-up" delay={index * 120}>
              <div
                onMouseEnter={() => setActiveCard(index)}
                className={`rounded-2xl bg-white border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between hover-card-lift ${
                  activeCard === index
                    ? "border-[#2864F0] shadow-xl shadow-[#2864F0]/10 -translate-y-1"
                    : "border-slate-200/90 shadow-sm hover:border-slate-300"
                }`}
              >
                <div>
                  {/* Top Meta Line: Number + Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-[#F5F8FF] border border-slate-200 flex items-center justify-center font-mono text-xs font-bold text-[#2864F0]">
                        {item.num}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#F5F8FF] border border-slate-100">
                      {item.iconSvg}
                    </div>
                  </div>

                  {/* Big Metric Display */}
                  <div className="mb-4">
                    <div className="text-4xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight font-display flex items-baseline gap-2">
                      <span>{item.targetNumber}</span>
                    </div>
                    <div className="text-sm font-bold text-[#2864F0] uppercase tracking-wide mt-1">
                      {item.direction}
                    </div>
                    <h3 className="text-xl font-extrabold text-[#101D35] mt-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* The Gap */}
                  <div className="mb-5 p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/15">
                    <span className="text-[11px] font-extrabold text-amber-700 uppercase tracking-wider block mb-1">
                      The Institutional Gap
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      "{item.gap}"
                    </p>
                  </div>

                  {/* What We Do */}
                  <div className="mb-5">
                    <span className="text-xs font-extrabold text-[#101D35] uppercase tracking-wider block mb-2.5">
                      What PANDAeCe Does:
                    </span>
                    <ul className="space-y-2">
                      {item.whatWeDo.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17243A]">
                          <svg className="w-4 h-4 text-[#2864F0] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom: Measured By */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-bold text-[#64748B]">Measured by: </span>
                    <span className="font-medium text-[#17243A]">{item.measuredBy}</span>
                  </div>
                  <span className="shrink-0 px-2 py-1 rounded bg-[#2864F0]/10 text-[#2864F0] font-bold text-[11px]">
                    {item.metricPill}
                  </span>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Button */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="text-center">
            <button
              onClick={scrollToLeadForm}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#2864F0] text-white font-bold text-base shadow-lg shadow-[#2864F0]/25 hover:bg-[#1E50C7] hover:shadow-xl hover:shadow-[#2864F0]/35 transition-all cursor-pointer group"
            >
              <span>Discuss Your Admission Targets</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

