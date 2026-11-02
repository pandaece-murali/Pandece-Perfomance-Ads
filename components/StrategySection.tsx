"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

type SvgLogo = { name: string; type: "svg"; svg: React.ReactNode };
type PillLogo = { name: string; type: "pill"; abbr: string; bg: string; label: string };
type BadgeLogo = { name: string; type: "badge"; text: string };
type LogoItem = SvgLogo | PillLogo | BadgeLogo;

interface StepItem {
  num: string;
  channel: string;
  title: string;
  summary: string;
  activities: string[];
  metrics: string[];
  badge: string;
  logos: LogoItem[];
}

export default function StrategySection() {
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

  // The 5 Strategic Execution Modules with Embedded Platform Logos
  const steps: StepItem[] = [
    {
      num: "01",
      channel: "GOOGLE SEARCH & YOUTUBE",
      title: "Capture High-Intent Demand",
      summary: "Get in front of students and professionals actively searching for courses, colleges, degrees, or EdTech certs.",
      activities: [
        "Course-, specialization-, and city-level keyword targeting",
        "Intent-segmented ad groups (direct admission vs casual browsing)",
        "Relentless search-term sanitization & negative-keyword hygiene",
        "Ad copy pre-qualifying on fees, eligibility, and accreditation",
      ],
      metrics: ["Cost per qualified lead", "Search-term quality", "Cost per admission"],
      badge: "Intent Engine",
      logos: [
        {
          name: "Google Ads",
          type: "svg",
          svg: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 48 48" fill="none">
              <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107" />
              <path d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00" />
              <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50" />
              <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2" />
            </svg>
          ),
        },
        {
          name: "YouTube",
          type: "svg",
          svg: (
            <svg className="w-5 h-5 shrink-0 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          ),
        },
        {
          name: "Google Search",
          type: "badge",
          text: "Search Partners",
        },
      ],
    },
    {
      num: "02",
      channel: "META ADS (INSTAGRAM & FB)",
      title: "Reach Students, Parents & Professionals",
      summary: "Build aspiration and pipeline where students and decision-maker parents spend their daily screen time.",
      activities: [
        "Age, educational background & career lookalike audiences",
        "Parent vs student separate creative targeting",
        "Video reels highlighting campus life, salary hikes & placement stats",
        "Lead forms pre-qualifying on graduation marks and intake year",
      ],
      metrics: ["Qualified enquiries", "Qualification rate", "Cost per qualified lead"],
      badge: "Demand Generation",
      logos: [
        {
          name: "Meta",
          type: "svg",
          svg: (
            <svg className="w-5 h-5 shrink-0 text-[#0866FF]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          ),
        },
        {
          name: "Instagram",
          type: "svg",
          svg: (
            <svg className="w-5 h-5 shrink-0 text-[#E4405F]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          ),
        },
        {
          name: "LinkedIn",
          type: "svg",
          svg: (
            <svg className="w-5 h-5 shrink-0 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          ),
        },
      ],
    },
    {
      num: "03",
      channel: "COURSE LANDING PAGES",
      title: "Convert the Clicks You Paid For",
      summary: "Dedicated, sub-second mobile landing pages that answer the exact questions prospects evaluate before enquiring.",
      activities: [
        "Course details, curriculum highlights, and eligibility upfront",
        "Transparent fee slabs, scholarship quotas, and EMI options",
        "Placement evidence: average CTC, top recruiting brands, alumni testimonials",
        "Continuous multi-variant A/B testing of headlines, forms, and trust badges",
      ],
      metrics: ["Landing page conversion rate", "Form submission quality", "CPQL"],
      badge: "Conversion Rate Ops",
      logos: [],
    },
    {
      num: "04",
      channel: "FULL-FUNNEL CRM ATTRIBUTION",
      title: "Connect Ad Spend Directly to Paid Enrollments",
      summary: "Full visibility from initial click to seat booking fee deposit in your ERP/CRM ledger.",
      activities: [
        "Enquiry → Qualified → Counseling → Application → Paid Admission pipeline",
        "Direct API integration with LeadSquared, ExtraaEdge, NoPaperForms, Zoho, HubSpot & Salesforce",
        "Meta CAPI & Google Offline Conversion Import on fee deposit receipts",
        "Counseling desk bottleneck discovery and lead scoring telemetry",
      ],
      metrics: ["Lead-to-admission conversion rate", "Cost per admission", "Attributed ROAS"],
      badge: "Attribution Engine",
      logos: [
        {
          name: "LeadSquared",
          type: "pill",
          abbr: "LS",
          bg: "bg-orange-500",
          label: "LeadSquared",
        },
        {
          name: "ExtraaEdge",
          type: "pill",
          abbr: "EE",
          bg: "bg-[#2864F0]",
          label: "ExtraaEdge",
        },
        {
          name: "NoPaperForms",
          type: "pill",
          abbr: "NPF",
          bg: "bg-emerald-600",
          label: "NoPaperForms",
        },
        {
          name: "Salesforce",
          type: "pill",
          abbr: "SF",
          bg: "bg-sky-500",
          label: "Salesforce",
        },
        {
          name: "HubSpot",
          type: "pill",
          abbr: "HS",
          bg: "bg-amber-600",
          label: "HubSpot",
        },
      ],
    },
    {
      num: "05",
      channel: "CONTINUOUS SCALE & OPTIMISATION",
      title: "Allocate Budget on Revenue, Not Vanity Clicks",
      summary: "Double down on winning programs and cut wasted spend on low-converting campaigns in real time.",
      activities: [
        "Program-by-program ROI auditing across B-Schools, Engineering, Health & EdTech",
        "Reallocation of ad budget to high-yield applicant cohorts",
        "Counselor follow-up speed tracking and intake deadline pacing",
        "Monthly board-ready reporting on true cost per confirmed admission",
      ],
      metrics: ["Attributed revenue", "ROAS", "Cost per confirmed admission"],
      badge: "Revenue Growth Loop",
      logos: [],
    },
  ];

  return (
    <section id="strategy" className="py-10 sm:py-14 bg-[#F5F8FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2864F0]/10 border border-[#2864F0]/20 text-[#2864F0] text-xs font-bold uppercase tracking-wider mb-3">
              <span>The 5 Execution Modules We Deploy</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#101D35] tracking-tight mb-3 uppercase">
              THE 5 EXECUTION MODULES <br className="hidden sm:block" />
              <span className="text-[#2864F0]">WE DEPLOY</span>
            </h2>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Tailored specifically for colleges, universities, and EdTech certifications.
            </p>
          </div>
        </ScrollReveal>

        {/* ── 5 Detailed Strategic Execution Modules with Embedded Platform Logos ── */}
        <div className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {steps.map((item, sIdx) => (
              <ScrollReveal key={item.num} animation="fade-up" delay={sIdx * 80}>
                <div
                  className="rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#2864F0]/40 hover-card-lift h-full"
                >
                <div>
                  {/* Top Bar with Number, Channel and Brand Logos */}
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black px-2 py-0.5 rounded-lg bg-[#2864F0]/10 text-[#2864F0]">
                        {item.num}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {item.badge}
                      </span>
                    </div>

                    {/* Integrated Platform Logos in Card Header */}
                    <div className="flex items-center gap-1.5">
                      {item.logos.map((logo, lIdx) => {
                        if (logo.type === "svg") {
                          return (
                            <div
                              key={lIdx}
                              title={logo.name}
                              className="p-1 rounded-md bg-slate-50 border border-slate-200 shadow-2xs hover:scale-105 transition-transform"
                            >
                              {logo.svg}
                            </div>
                          );
                        }
                        if (logo.type === "pill") {
                          return (
                            <div
                              key={lIdx}
                              title={logo.label}
                              className={`w-6 h-6 rounded-md ${logo.bg} text-white font-black text-[9px] flex items-center justify-center shadow-xs`}
                            >
                              {logo.abbr}
                            </div>
                          );
                        }
                        if (logo.type === "badge") {
                          return (
                            <span
                              key={lIdx}
                              className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                            >
                              {logo.text}
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-[#2864F0] uppercase tracking-wider block mb-1">
                    {item.channel}
                  </span>

                  <h4 className="font-display text-base sm:text-lg font-bold text-[#101D35] mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Logo / Feature Pills */}
                  {item.logos && item.logos.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.logos.map((logo, lIdx) => (
                        <span
                          key={lIdx}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          ✓ {logo.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Activities List */}
                  <div className="border-t border-slate-100 pt-3 mb-4">
                    <div className="text-[11px] font-bold text-[#101D35] mb-2 uppercase tracking-wide">
                      What PANDAeCe Does:
                    </div>
                    <ul className="space-y-1.5">
                      {item.activities.map((act, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#17243A]">
                          <span className="text-[#2864F0] font-bold shrink-0 mt-0.5">›</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mb-1.5">
                    Measurable KPIs:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.metrics.map((m, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Section Conversion CTA */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="mt-8 sm:mt-10 text-center">
            <button
              onClick={scrollToLeadForm}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#2864F0] text-white font-bold text-base shadow-lg shadow-[#2864F0]/25 hover:bg-[#1E50C7] hover:shadow-xl hover:shadow-[#2864F0]/35 transition-all cursor-pointer group"
            >
              <span>Discuss Your Admission &amp; EdTech Growth Strategy</span>
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
