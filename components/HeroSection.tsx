"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
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

  const coreMetrics = [
    {
      id: "01",
      title: "Cost per Qualified Lead",
      badge: "Target -20% to -30%",
      desc: "Stop paying for junk form fills",
      highlight: "CPQL",
    },
    {
      id: "02",
      title: "Cost per Admission",
      badge: "Target -15% to -25%",
      desc: "Real marketing cost per enrolled seat",
      highlight: "CPA",
    },
    {
      id: "03",
      title: "Confirmed Admissions",
      badge: "+150% in Case Study",
      desc: "Verified enrollments with fee deposits",
      highlight: "INTAKE",
    },
    {
      id: "04",
      title: "Lead-to-Admission Rate",
      badge: "Target +10% to +20%",
      desc: "Counsellor efficiency without burnout",
      highlight: "CVR",
    },
    {
      id: "05",
      title: "Return on Ad Spend (ROAS)",
      badge: "5x → 12.5x Target",
      desc: "Defendable metrics for board reporting",
      highlight: "ROAS",
    },
  ];

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 bg-[#101D35] text-white overflow-hidden">
      {/* Background Ambience & Lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2864F0]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-[-100px] w-[500px] h-[500px] bg-[#5B8CFF]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting, Metrics, and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal animation="fade-up">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#5B8CFF] text-xs font-bold tracking-wider uppercase mb-6 self-start backdrop-blur-sm shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#5B8CFF] shadow-[0_0_10px_#5B8CFF]"></span>
                Performance Marketing for Colleges, Universities &amp; EdTech Brands
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
                FILL YOUR SEATS. <br />
                <span className="bg-gradient-to-r from-white via-slate-100 to-[#5B8CFF] bg-clip-text text-transparent">
                  NOT JUST YOUR CRM.
                </span>
              </h1>

              {/* Supporting Headline */}
              <p className="text-xl sm:text-2xl font-semibold text-slate-200 leading-snug mb-5">
                More qualified admissions. Lower cost per admission. ROAS you can actually defend in a board meeting.
              </p>
            </ScrollReveal>

            {/* Problem & Value Proposition Paragraphs */}
            <ScrollReveal animation="fade-up" delay={120}>
              <div className="space-y-3 text-slate-300 text-base leading-relaxed mb-8 max-w-2xl border-l-2 border-[#2864F0] pl-4 bg-white/[0.02] py-2">
                <p>
                  <strong className="text-white font-semibold">The Core Problem:</strong> Most institutions don't have a lead problem. They have a <span className="text-white font-medium underline decoration-[#2864F0] underline-offset-4">lead quality problem</span> — thousands of enquiries, a stretched counselling team, and no clarity on which rupee actually produced a confirmed admission.
                </p>
                <p className="text-slate-300 text-sm">
                  PANDAeCe builds Google Ads and Meta Ads systems for schools, colleges, B-schools, coaching academies and EdTech brands — engineered around the only 5 numbers that decide your admission cycle.
                </p>
              </div>
            </ScrollReveal>

            {/* How We Do It Flow Indicator */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="mb-8 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 max-w-2xl">
                <span className="text-xs uppercase font-extrabold text-[#5B8CFF] tracking-wider block mb-2">
                  The PANDAeCe System
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                  <span className="px-2.5 py-1 rounded-md bg-[#2864F0]/20 text-white border border-[#2864F0]/40">
                    Sharper Targeting
                  </span>
                  <span className="text-[#5B8CFF]">→</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#2864F0]/20 text-white border border-[#2864F0]/40">
                    Course Landing Pages
                  </span>
                  <span className="text-[#5B8CFF]">→</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#2864F0]/20 text-white border border-[#2864F0]/40">
                    Full-Funnel Tracking
                  </span>
                  <span className="text-[#5B8CFF]">→</span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Continuous Optimisation
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Primary & Secondary CTAs */}
            <ScrollReveal animation="fade-up" delay={260}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
                <button
                  onClick={() => scrollTo("lead-form")}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#2864F0] to-[#5B8CFF] text-white font-bold text-base shadow-xl shadow-[#2864F0]/30 hover:shadow-[#2864F0]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>GET YOUR ADMISSION MARKETING REVIEW</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => scrollTo("strategy")}
                  className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Our Approach
                </button>
              </div>

              {/* Subtext */}
              <p className="text-xs text-slate-300 italic flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                For institutions planning the next intake — or fixing campaigns that aren't converting.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Premium Realistic Visual Art Direction */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal animation="scale-up" delay={150}>
              {/* Visual Container Frame */}
              <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative back glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#2864F0] to-[#5B8CFF] rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-soft"></div>

              {/* Main Laptop & Campus Visual Composite Card */}
              <div className="relative rounded-2xl bg-[#0D182E] border border-white/20 p-4 sm:p-5 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Header of Device Window */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="text-slate-300 font-mono text-[11px] ml-2 font-medium">
                      pandece.edu/command-centre
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    LIVE INTAKE ACTIVE
                  </span>
                </div>

                {/* Campus & Students Art Composition - Real Photography */}
                <div className="relative h-60 sm:h-72 rounded-xl overflow-hidden mb-4 border border-white/15 bg-slate-900 group">
                  <Image
                    src="/campus-students.jpg"
                    alt="Indian University Students Collaborating on Campus"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D182E] via-[#0D182E]/30 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#101D35]/40 via-transparent to-transparent"></div>

                  {/* Floating Campus Badge */}
                  <div className="absolute top-3 left-3 bg-[#101D35]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      Top Indian B-School & Engineering Cohort
                    </span>
                  </div>

                  {/* Partner Badges (Google + Meta) Top Right */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <div className="bg-[#101D35]/90 backdrop-blur-md px-2 py-1 rounded-md border border-white/15 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 48 48" fill="none">
                        <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107" />
                        <path d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00" />
                        <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50" />
                        <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2" />
                      </svg>
                      <span className="text-[10px] font-bold text-white">Google</span>
                    </div>
                    <div className="bg-[#101D35]/90 backdrop-blur-md px-2 py-1 rounded-md border border-white/15 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 48 48" fill="none">
                        <path d="M24 4C12.954 4 4 12.954 4 24c0 9.988 7.305 18.271 16.875 19.771V29.833h-5.078V24h5.078v-4.446c0-5.013 2.988-7.781 7.555-7.781 2.188 0 4.477.391 4.477.391v4.922h-2.523c-2.484 0-3.259 1.541-3.259 3.123V24h5.547l-.887 5.833h-4.66v13.938C36.695 42.271 44 33.988 44 24c0-11.046-8.954-20-20-20z" fill="#0866FF" />
                      </svg>
                      <span className="text-[10px] font-bold text-white">Meta</span>
                    </div>
                  </div>

                  {/* Indian Students & Admission Metric Snapshot */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/75 backdrop-blur-md p-3 rounded-xl border border-white/15 shadow-xl">
                    <div className="flex items-center gap-2.5">
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 border-2 border-[#101D35] flex items-center justify-center text-[10px] font-bold text-slate-900">
                          AK
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-400 border-2 border-[#101D35] flex items-center justify-center text-[10px] font-bold text-white">
                          PR
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-300 border-2 border-[#101D35] flex items-center justify-center text-[10px] font-bold text-slate-900">
                          SM
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] font-bold text-white leading-tight">
                          Verified Aspirants
                        </div>
                        <div className="text-[10px] text-slate-300">
                          CAT / MAT / JEE / UG Cohort
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-emerald-400">
                        +150% Target
                      </div>
                      <div className="text-[9px] uppercase tracking-wider text-slate-300">
                        Admissions
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Metrics Strip Inside Laptop */}
                <div className="grid grid-cols-2 gap-2.5 mb-3">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-[10px] text-slate-300 font-medium block">
                      Cost Per Qualified Lead
                    </span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="font-mono text-lg font-bold text-white">
                        ₹500
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded">
                        -50% CPQL
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-[10px] text-slate-300 font-medium block">
                      Cost Per Admission
                    </span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="font-mono text-lg font-bold text-white">
                        ₹4,000
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded">
                        -60% CPA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Verified Revenue & ROAS Row */}
                <div className="p-3 rounded-lg bg-gradient-to-r from-[#2864F0]/20 to-[#5B8CFF]/15 border border-[#2864F0]/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B8CFF] block">
                      Attributed Fee Revenue
                    </span>
                    <span className="font-mono text-xl font-black text-white">
                      ₹37,50,000
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block">
                      Revenue-to-Ad-Spend
                    </span>
                    <span className="font-mono text-xl font-black text-emerald-400">
                      12.5x ROAS
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Element 1: Admissions Goal Tracker (Top-Right) */}
              <div className="hidden sm:block absolute -top-6 -right-6 z-20 animate-float-slow">
                <div className="px-4 py-3 rounded-xl bg-[#101D35]/95 backdrop-blur-md border border-white/20 shadow-xl text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-[11px] font-bold text-slate-200">
                      MBA Intake Target
                    </span>
                  </div>
                  <div className="text-base font-black text-white">
                    75 / 75 Seats Filled
                  </div>
                  <div className="w-32 bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#2864F0] to-emerald-400 h-full w-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Element 2: Zero Junk Lead Pill (Bottom-Left) */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 z-20 animate-float-reverse">
                <div className="px-4 py-2.5 rounded-xl bg-[#101D35]/95 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2864F0]/30 border border-[#2864F0] flex items-center justify-center text-white">
                    <svg className="w-4 h-4 text-[#5B8CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-white">
                      Full-Funnel CRM Sync
                    </div>
                    <div className="text-[10px] text-slate-300">
                      LeadSquared · ExtraaEdge · NoPaperForms
                    </div>
                  </div>
                </div>
              </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* 5 Important Metrics Strip */}
        <div className="mt-10 pt-8 sm:mt-12 sm:pt-8 border-t border-white/10">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#5B8CFF] block mb-1">
                Admission Unit Economics
              </span>
              <h3 className="text-lg font-bold text-white">
                The 5 Metrics That Actually Decide Your Admission Cycle
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreMetrics.map((m, idx) => (
              <ScrollReveal key={m.id} animation="fade-up" delay={idx * 75}>
                <div
                  className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#2864F0]/50 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-slate-300">
                      {m.id}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#2864F0]/20 text-[#5B8CFF] border border-[#2864F0]/30">
                      {m.highlight}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#5B8CFF] transition-colors">
                    {m.title}
                  </h4>
                  <div className="text-xs font-bold text-emerald-400 mb-1">
                    {m.badge}
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    {m.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

