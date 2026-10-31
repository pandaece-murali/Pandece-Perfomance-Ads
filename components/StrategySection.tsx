"use client";

import React, { useState } from "react";

export default function StrategySection() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const scrollToLeadForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const steps = [
    {
      num: "01",
      channel: "GOOGLE ADS",
      title: "Capture High-Intent Demand",
      summary: "Get in front of students already searching for your programme.",
      activities: [
        "Course- and city-level search targeting",
        "Campaigns structured by searcher intent (high vs casual)",
        "Relentless search-term and negative-keyword hygiene",
        "Ad copy written to the student's actual decision criteria",
      ],
      metrics: ["Cost per qualified lead", "Search-term quality", "Cost per admission"],
      badge: "Intent Engine",
      iconSvg: (
        <svg className="w-6 h-6 text-[#2864F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      num: "02",
      channel: "META ADS",
      title: "Reach the Right Student Audiences",
      summary: "Build demand where students and parents actually spend their attention.",
      activities: [
        "Programme- and geography-level segmentation",
        "Messaging tests on placement outcomes, eligibility & deadlines",
        "Conversion-data-driven audience lookalikes & signals",
        "Optimisation for verified lead quality, not cheap form fills",
      ],
      metrics: ["Qualified enquiries", "Qualification rate", "Cost per qualified lead"],
      badge: "Demand Generation",
      iconSvg: (
        <svg className="w-6 h-6 text-[#2864F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      num: "03",
      channel: "LANDING PAGES",
      title: "Convert the Traffic You're Already Paying For",
      summary: "Dedicated course pages that answer the questions a prospect asks before enquiring.",
      activities: [
        "Programme details and eligibility stated upfront",
        "Fees and key curriculum information where appropriate",
        "Placement proof points, accreditation & single clear CTA",
        "Continuous A/B testing of headlines, forms and mobile UX",
      ],
      metrics: ["Landing page conversion rate", "Cost per qualified lead"],
      badge: "Conversion Rate Ops",
      iconSvg: (
        <svg className="w-6 h-6 text-[#2864F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      num: "04",
      channel: "FULL-FUNNEL TRACKING",
      title: "Connect Ad Spend to Confirmed Admissions",
      summary: "Know exactly what happens after the form submit.",
      activities: [
        "Enquiry → qualified → counselling → application → admission tracking",
        "CRM & admissions integrations (LeadSquared, ExtraaEdge, etc.)",
        "Offline conversion imports where feasible into Google & Meta",
        "Bottleneck identification from real counselling desk data",
      ],
      metrics: ["Lead-to-admission conversion rate", "Cost per admission"],
      badge: "Attribution Engine",
      iconSvg: (
        <svg className="w-6 h-6 text-[#2864F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      num: "05",
      channel: "CONTINUOUS OPTIMISATION",
      title: "Allocate Budget on Revenue, Not Clicks",
      summary: "Scale budget only where verified admissions justify it.",
      activities: [
        "Performance compared by course, campaign, geography & audience",
        "Wasted spend identified and cut from low-converting cohorts",
        "Investment scaled aggressively on top-converting programmes",
        "Attributed revenue and acquisition cost monitored monthly",
      ],
      metrics: ["Attributed admission revenue", "ROAS", "Cost per admission"],
      badge: "Revenue Growth Loop",
      iconSvg: (
        <svg className="w-6 h-6 text-[#2864F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="strategy" className="py-24 bg-[#F5F8FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2864F0]/10 border border-[#2864F0]/20 text-[#2864F0] text-xs font-bold uppercase tracking-wider mb-4">
            <span>End-to-End Admission Architecture</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#101D35] tracking-tight mb-4 uppercase">
            FIVE MOVES. <br className="hidden sm:block" />
            <span className="text-[#2864F0]">ONE MEASURABLE ADMISSION FUNNEL.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Every step is designed to eliminate lead leakage and tie every rupee of ad spend to verified enrolled students.
          </p>
        </div>

        {/* 5-Step Visual Stepper Bar on Desktop */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10">
          {steps.map((st, i) => (
            <button
              key={st.num}
              onClick={() => setSelectedStep(i)}
              className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                selectedStep === i
                  ? "bg-white border-[#2864F0] shadow-lg shadow-[#2864F0]/10 ring-2 ring-[#2864F0]/20"
                  : "bg-white/60 border-slate-200 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-black ${selectedStep === i ? "text-[#2864F0]" : "text-slate-400"}`}>
                  {st.num}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${selectedStep === i ? "bg-[#2864F0]/10 text-[#2864F0]" : "bg-slate-100 text-slate-500"}`}>
                  {st.channel}
                </span>
              </div>
              <div className="text-xs font-extrabold text-[#101D35] truncate">
                {st.title}
              </div>
            </button>
          ))}
        </div>

        {/* Strategy Cards Display (Alternating / Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {steps.map((item, index) => (
            <div
              key={item.num}
              onClick={() => setSelectedStep(index)}
              className={`rounded-2xl bg-white border p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                selectedStep === index
                  ? "border-[#2864F0] shadow-xl shadow-[#2864F0]/10 ring-2 ring-[#2864F0]/20 -translate-y-1"
                  : "border-slate-200 shadow-sm hover:border-slate-300"
              }`}
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-sm font-black px-2.5 py-1 rounded-lg bg-[#2864F0]/10 text-[#2864F0]">
                      {item.num}
                    </span>
                    <span className="text-xs font-black tracking-wider text-[#2864F0] uppercase">
                      {item.channel}
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#F5F8FF] border border-slate-100">
                    {item.iconSvg}
                  </div>
                </div>

                {/* Card Headline */}
                <h3 className="text-lg font-black text-[#101D35] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#64748B] mb-5 font-medium leading-relaxed">
                  {item.summary}
                </p>

                {/* Key Activities List */}
                <div className="mb-5 space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#101D35] block">
                    Key Execution Activities:
                  </span>
                  <ul className="space-y-1.5">
                    {item.activities.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                        <span className="text-[#2864F0] font-bold">›</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Measurable KPIs */}
              <div className="pt-4 border-t border-slate-100 mt-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1.5">
                  Governing Metrics:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.metrics.map((met, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-[#F5F8FF] border border-slate-200 text-[10px] font-bold text-[#101D35]"
                    >
                      {met}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <button
            onClick={scrollToLeadForm}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#2864F0] text-white font-bold text-base shadow-lg shadow-[#2864F0]/25 hover:bg-[#1E50C7] hover:shadow-xl hover:shadow-[#2864F0]/35 transition-all cursor-pointer group"
          >
            <span>Discuss Your Admission Growth Strategy</span>
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

        {/* Mandatory Strategy Disclaimer */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-white border border-slate-200 text-center">
          <p className="text-xs text-[#64748B]">
            <strong className="text-slate-800 font-semibold">Strategic Operations Note:</strong> Results depend on data quality, market demand, admissions processes and your team's follow-up speed.
          </p>
        </div>

      </div>
    </section>
  );
}

