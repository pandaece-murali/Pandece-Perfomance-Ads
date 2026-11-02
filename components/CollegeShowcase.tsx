"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const CHANNELS = [
  { id: "showcase-google", key: "google", label: "Google High-Intent Search" },
  { id: "showcase-meta", key: "meta", label: "Meta Instagram & FB Ads" },
  { id: "showcase-linkedin", key: "linkedin", label: "LinkedIn Executive Education" },
  { id: "showcase-crm", key: "crm", label: "CRM Full-Funnel Sync" },
] as const;

function scrollToLeadForm() {
  const el = document.getElementById("admission-form") || document.getElementById("lead-form");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      const input = document.getElementById("full-name-input") as HTMLInputElement | null;
      if (input) input.focus();
    }, 600);
  }
}

export default function CollegeShowcase() {
  const [activeChannel, setActiveChannel] = useState<string>("showcase-google");

  // Track scroll position to highlight the active channel button as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const ch of CHANNELS) {
        const el = document.getElementById(ch.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveChannel(ch.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToChannel = (id: string) => {
    setActiveChannel(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="showcase"
      className="py-10 sm:py-14 bg-white border-b border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2864F0]/10 border border-[#2864F0]/20 text-[#2864F0] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Built Specifically for Higher Education &amp; EdTech</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#101D35] tracking-tight mb-3 uppercase">
              Performance Ads &amp; CRM Systems{" "}
              <br className="hidden sm:block" />
              <span className="text-[#2864F0]">Tailored for Indian Institutions &amp; EdTech</span>
            </h2>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              See how PANDAeCe engineers high-intent ad creative on Google, Meta, and LinkedIn,
              syncing verified student &amp; candidate enquiries directly into your admissions CRM.
            </p>

            {/* Quick-Jump Channels Navigation (Scroll to see all, or click to jump) */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {/* Google Pill */}
              <button
                onClick={() => scrollToChannel("showcase-google")}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeChannel === "showcase-google"
                    ? "bg-[#2864F0] text-white shadow-md shadow-[#2864F0]/25 ring-2 ring-[#2864F0]/20 scale-[1.02]"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 48 48" fill="none">
                  <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107" />
                  <path d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00" />
                  <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50" />
                  <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2" />
                </svg>
                <span>Google High-Intent Search</span>
              </button>

              {/* Meta Pill */}
              <button
                onClick={() => scrollToChannel("showcase-meta")}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeChannel === "showcase-meta"
                    ? "bg-[#2864F0] text-white shadow-md shadow-[#2864F0]/25 ring-2 ring-[#2864F0]/20 scale-[1.02]"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 48 48" fill="none">
                  <path d="M24 4C12.954 4 4 12.954 4 24c0 9.988 7.305 18.271 16.875 19.771V29.833h-5.078V24h5.078v-4.446c0-5.013 2.988-7.781 7.555-7.781 2.188 0 4.477.391 4.477.391v4.922h-2.523c-2.484 0-3.259 1.541-3.259 3.123V24h5.547l-.887 5.833h-4.66v13.938C36.695 42.271 44 33.988 44 24c0-11.046-8.954-20-20-20z" fill="#0866FF" />
                </svg>
                <span>Meta Instagram &amp; FB Ads</span>
              </button>

              {/* LinkedIn Pill */}
              <button
                onClick={() => scrollToChannel("showcase-linkedin")}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeChannel === "showcase-linkedin"
                    ? "bg-[#2864F0] text-white shadow-md shadow-[#2864F0]/25 ring-2 ring-[#2864F0]/20 scale-[1.02]"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn Executive Education</span>
              </button>

              {/* CRM Pill */}
              <button
                onClick={() => scrollToChannel("showcase-crm")}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeChannel === "showcase-crm"
                    ? "bg-[#2864F0] text-white shadow-md shadow-[#2864F0]/25 ring-2 ring-[#2864F0]/20 scale-[1.02]"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>CRM Full-Funnel Sync</span>
              </button>
            </div>

            <p className="text-xs text-slate-400 mt-3 italic">
              ↓ Scroll through all 4 execution channels below, or click any module above to jump directly.
            </p>
          </div>
        </ScrollReveal>

        {/* ── All 4 Execution Modules in a Continuous Scroll Stream (No Click Required) ── */}
        <div className="space-y-8 sm:space-y-10">

          {/* ── Channel 01: Google High-Intent Search ── */}
          <ScrollReveal animation="fade-up">
            <div
              id="showcase-google"
              className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F5F8FF] p-6 sm:p-9 rounded-3xl border border-slate-200 shadow-sm hover-card-lift"
            >
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-blue-100 text-[#2864F0]">
                  01 · Intent Search Engine
                </span>
                <span className="text-[11px] font-bold text-slate-500">Google Ads &amp; YouTube</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#101D35] leading-snug">
                Capturing High-Intent Students Actively Searching for Admissions
              </h3>

              <p className="text-sm text-[#64748B] leading-relaxed">
                When students search for{" "}
                <em className="text-[#101D35] font-semibold">&ldquo;Top MBA Colleges in Delhi NCR&rdquo;</em> or{" "}
                <em className="text-[#101D35] font-semibold">&ldquo;Best Computer Science Engineering Admissions&rdquo;</em>,
                our Google Ads system displays eligibility-first copy that pre-qualifies aspirants before they click.
              </p>

              <ul className="space-y-2 pt-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-[#17243A]">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>Relentless negative keyword filtering (excluding &ldquo;free&rdquo;, &ldquo;syllabus&rdquo;, &ldquo;internship&rdquo;)</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-[#17243A]">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>Exact course, fee bracket, and accreditation callouts in search headlines</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-[#17243A]">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>Direct routing to dedicated single-purpose course landing pages</span>
                </li>
              </ul>

              {/* Conversion CTA */}
              <button
                onClick={scrollToLeadForm}
                className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2864F0] text-white text-sm font-bold shadow-md shadow-[#2864F0]/25 hover:bg-[#1a50d0] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Audit My Google Ads Funnel
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Google Search Mockup */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-md">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-xs text-slate-700 w-full max-w-md font-mono text-[11px] truncate">
                  <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>top mba admissions eligibility fees delhi ncr</span>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-900 text-white uppercase">Sponsored</span>
                  <span className="text-xs text-slate-600 truncate">https://admissions.institute.edu.in/mba</span>
                </div>
                <button
                  onClick={scrollToLeadForm}
                  className="block text-lg sm:text-xl font-bold text-[#1A0DAB] hover:underline leading-snug text-left cursor-pointer"
                >
                  MBA Admissions Open | AICTE Approved | NIRF Top 50 Ranked
                </button>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Fast-Track Your Leadership Career. 100% Placement Record with ₹12.5 LPA Avg CTC. Eligibility: 50% in Graduation + CAT/MAT/XAT. Transparent Fee Structure. Apply for Merit Scholarship Today.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-3">
                  <button onClick={scrollToLeadForm} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-left hover:border-[#2864F0]/30 transition-colors cursor-pointer">
                    <span className="text-xs font-bold text-[#1A0DAB] block">Placement Reports</span>
                    <span className="text-[11px] text-slate-500">₹45 LPA Highest CTC · 200+ Recruiters</span>
                  </button>
                  <button onClick={scrollToLeadForm} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-left hover:border-[#2864F0]/30 transition-colors cursor-pointer">
                    <span className="text-xs font-bold text-[#1A0DAB] block">Fee &amp; Scholarships</span>
                    <span className="text-[11px] text-slate-500">Up to 50% Tuition Fee Waivers</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* ── Channel 02: Meta Demand Generation (Instagram & Facebook) ── */}
          <ScrollReveal animation="fade-up">
            <div
              id="showcase-meta"
              className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F5F8FF] p-6 sm:p-9 rounded-3xl border border-slate-200 shadow-sm hover-card-lift"
            >
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-indigo-100 text-[#0866FF]">
                  02 · Meta Demand Generation
                </span>
                <span className="text-[11px] font-bold text-slate-500">Instagram &amp; Facebook</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#101D35] leading-snug">
                Targeting Students &amp; Parents on Instagram &amp; Facebook Feeds
              </h3>

              <p className="text-sm text-[#64748B] leading-relaxed">
                Building emotional aspiration and trust among 12th graders, graduates, and decision-maker parents with authentic campus reels, placement stats, and alumni testimonials.
              </p>

              <ul className="space-y-2 pt-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-[#17243A]">
                  <span className="text-[#0866FF] font-bold text-base">✓</span>
                  <span>Age, geography, and education-interest lookalike audiences</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-[#17243A]">
                  <span className="text-[#0866FF] font-bold text-base">✓</span>
                  <span>Instagram Story and Reel formats optimised for student engagement</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-[#17243A]">
                  <span className="text-[#0866FF] font-bold text-base">✓</span>
                  <span>Lead form pre-qualification questions (Score / Graduation year)</span>
                </li>
              </ul>

              <button
                onClick={scrollToLeadForm}
                className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0866FF] text-white text-sm font-bold shadow-md hover:bg-[#0553d4] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Review My Meta Ads Strategy
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Instagram / Meta Feed Ad Preview */}
            <div className="lg:col-span-7 max-w-md mx-auto w-full bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
              <div className="p-3.5 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">AIM</div>
                  <div>
                    <div className="text-xs font-bold text-[#101D35] flex items-center gap-1">
                      <span>Apex Institute of Management</span>
                      <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[10px] text-slate-400">Sponsored · Paid Partnership</span>
                  </div>
                </div>
                <span className="text-xs text-slate-400">•••</span>
              </div>
              <div className="relative h-56 sm:h-64 bg-slate-900">
                <Image src="/campus-students.jpg" alt="Student Cohort on Campus" fill className="object-cover" />
                <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-md p-2.5 rounded-lg text-white flex justify-between items-center">
                  <div>
                    <div className="text-xs font-bold">CAT / MAT Aspirants — Admissions Open</div>
                    <div className="text-[10px] text-slate-300">100% Placements · ₹12.5L Avg CTC</div>
                  </div>
                  <button onClick={scrollToLeadForm} className="px-2.5 py-1 rounded bg-[#2864F0] text-white text-[10px] font-bold cursor-pointer hover:bg-[#1a50d0] transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="p-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#101D35] block">Download Admission Brochure</span>
                  <span className="text-[10px] text-slate-500">admissions.aim.edu.in</span>
                </div>
                <button onClick={scrollToLeadForm} className="px-3.5 py-1.5 rounded-lg bg-[#0866FF] text-white text-xs font-bold cursor-pointer hover:bg-[#0553d4] transition-colors">
                  Get Brochure
                </button>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* ── Channel 03: LinkedIn Executive Education & Upskilling ── */}
          <ScrollReveal animation="fade-up">
            <div
              id="showcase-linkedin"
              className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F5F8FF] p-6 sm:p-9 rounded-3xl border border-slate-200 shadow-sm hover-card-lift"
            >
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-sky-100 text-[#0A66C2]">
                  03 · LinkedIn Executive Network
                </span>
                <span className="text-[11px] font-bold text-slate-500">Working Professionals &amp; EdTech</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#101D35] leading-snug">
                Enrolling Working Professionals for Executive MBA, Tech &amp; PGDM
              </h3>

              <p className="text-sm text-[#64748B] leading-relaxed">
                LinkedIn Ads allow precise targeting by job seniority, company size, years of experience, and educational background — the premier channel for Executive MBA, PGDM, and Part-Time Master&apos;s seats.
              </p>

              <ul className="space-y-2 pt-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-[#17243A]">
                  <span className="text-[#0A66C2] font-bold text-base">✓</span>
                  <span>Target Managers, Team Leads, and Engineers with 3+ years experience</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-[#17243A]">
                  <span className="text-[#0A66C2] font-bold text-base">✓</span>
                  <span>InMail and Lead Gen Forms pre-populated with verified corporate profiles</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-[#17243A]">
                  <span className="text-[#0A66C2] font-bold text-base">✓</span>
                  <span>High purchasing power: candidates capable of paying ₹5L–₹15L programme fees</span>
                </li>
              </ul>

              <button
                onClick={scrollToLeadForm}
                className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2] text-white text-sm font-bold shadow-md hover:bg-[#084e99] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Plan My LinkedIn Campaign
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* LinkedIn Ad Mockup */}
            <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-md max-w-lg mx-auto w-full text-left">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center font-bold text-sm">SBS</div>
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <span>School of Business &amp; Technology</span>
                    <span className="text-[10px] text-slate-400">• Promoted</span>
                  </div>
                  <span className="text-[10px] text-slate-500">48,200 followers</span>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed mb-3">
                Ready to transition into Product &amp; Business Leadership? The 1-Year Executive PGDM is designed for professionals with 3+ years experience. Weekend hybrid batches with IIM &amp; global faculty.
              </p>

              <div className="relative h-48 rounded-xl overflow-hidden mb-3 border border-slate-200">
                <Image src="/admissions-counselling.jpg" alt="Executive Education Counselling" fill className="object-cover" />
                <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold text-white">
                  Hybrid Weekend Cohort
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Executive PGDM Next Batch</span>
                  <span className="text-[10px] text-slate-500">Apply via LinkedIn 1-Click Form</span>
                </div>
                <button onClick={scrollToLeadForm} className="px-3 py-1.5 rounded-full bg-[#0A66C2] text-white text-xs font-bold cursor-pointer hover:bg-[#084e99] transition-colors">
                  Download Curriculum
                </button>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* ── Channel 04: Full-Funnel CRM Sync & Attribution ── */}
          <ScrollReveal animation="fade-up">
            <div
              id="showcase-crm"
              className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F5F8FF] p-6 sm:p-9 rounded-3xl border border-slate-200 shadow-sm hover-card-lift"
            >
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-700">
                  04 · Full-Funnel Attribution
                </span>
                <span className="text-[11px] font-bold text-slate-500">LeadSquared · NPF · ExtraaEdge</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#101D35] leading-snug">
                Ad Spend Connected Directly to Fee Payment Receipts
              </h3>

              <p className="text-sm text-[#64748B] leading-relaxed">
                We integrate with LeadSquared, ExtraaEdge, NoPaperForms, and Salesforce. As students pay application fees or confirm admission deposits, conversion signals are fired back to Google &amp; Meta to automatically double down on winning audiences.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[11px] text-[#64748B] block font-medium">LeadSquared Sync</span>
                  <span className="text-xs font-bold text-emerald-600">✓ Real-time Webhooks</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[11px] text-[#64748B] block font-medium">ExtraaEdge Sync</span>
                  <span className="text-xs font-bold text-emerald-600">✓ Stage Attribution</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[11px] text-[#64748B] block font-medium">NoPaperForms</span>
                  <span className="text-xs font-bold text-emerald-600">✓ Fee Conversion Signal</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[11px] text-[#64748B] block font-medium">Salesforce Edu</span>
                  <span className="text-xs font-bold text-emerald-600">✓ Pipeline Analytics</span>
                </div>
              </div>

              <button
                onClick={scrollToLeadForm}
                className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white text-sm font-bold shadow-md hover:bg-emerald-700 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Set Up My CRM Attribution
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* CRM Pipeline Card */}
            <div className="lg:col-span-7 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
                <span className="font-mono text-emerald-400 font-bold">CRM Stage Telemetry</span>
                <span className="text-[10px] text-slate-400">Live Intake Funnel</span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#2864F0] text-white flex items-center justify-center text-xs font-bold">1</span>
                    <div>
                      <span className="text-xs font-bold block">Ad Click &amp; Enquiry</span>
                      <span className="text-[10px] text-slate-400">Google Ads · Meta · LinkedIn</span>
                    </div>
                  </div>
                  <span className="font-mono text-sm font-bold text-white">1,500 Leads</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold">2</span>
                    <div>
                      <span className="text-xs font-bold block">Eligibility &amp; Qualification Score</span>
                      <span className="text-[10px] text-slate-400">Filtered for City, Marks &amp; Fee</span>
                    </div>
                  </div>
                  <span className="font-mono text-sm font-bold text-indigo-300">600 CPQL (40%)</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold">3</span>
                    <div>
                      <span className="text-xs font-bold block">Admissions Counselling Desk</span>
                      <span className="text-[10px] text-slate-400">Campus Walk-in / Tele-counselling</span>
                    </div>
                  </div>
                  <span className="font-mono text-sm font-bold text-purple-300">240 Attended</span>
                </div>
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#2864F0]/30 to-emerald-500/30 border border-emerald-500/50 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-900 flex items-center justify-center text-xs font-black">✓</span>
                    <div>
                      <span className="text-xs font-black text-white block">Confirmed Admission Fee Deposited</span>
                      <span className="text-[10px] text-emerald-300">Attributed to Verified Campaign</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-base font-black text-emerald-400">75 Admissions</span>
                    <span className="text-[10px] text-slate-300 block">₹37,50,000 Revenue</span>
                  </div>
                </div>
              </div>

              {/* CTA inside CRM panel */}
              <button
                onClick={scrollToLeadForm}
                className="mt-5 w-full py-3 rounded-xl bg-emerald-500 text-slate-900 text-sm font-black hover:bg-emerald-400 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                Get My CRM Attribution Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
          </ScrollReveal>

        </div>

        {/* 4 Cohorts We Serve: Colleges, Universities & EdTech */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#2864F0] block mb-1">
                Education &amp; EdTech Cohorts We Scale
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#101D35] uppercase">
                Proven Across Colleges, Universities &amp; EdTech Brands
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: B-Schools */}
            <ScrollReveal animation="fade-up" delay={0}>
              <button
                onClick={scrollToLeadForm}
                className="w-full rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all group text-left cursor-pointer flex flex-col justify-between hover-card-lift h-full"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image src="/campus-students.jpg" alt="Management Students on Campus" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-[#101D35]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-white">
                      B-Schools &amp; MBA
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#2864F0] text-white text-[10px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Audit →
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h4 className="font-bold text-sm sm:text-base text-[#101D35] mb-1">MBA, PGDM &amp; Executive</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                      Targeting CAT, MAT, XAT aspirants. Pre-filtering on marks and tuition fee affordability.
                    </p>
                  </div>
                </div>
                <div className="p-4 sm:p-5 pt-0">
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] font-bold">
                    <span className="text-[#2864F0]">Google &amp; LinkedIn</span>
                    <span className="text-emerald-600">+150% Seats</span>
                  </div>
                </div>
              </button>
            </ScrollReveal>

            {/* Card 2: Engineering & Tech Universities */}
            <ScrollReveal animation="fade-up" delay={80}>
              <button
                onClick={scrollToLeadForm}
                className="w-full rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all group text-left cursor-pointer flex flex-col justify-between hover-card-lift h-full"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image src="/campus-architecture.jpg" alt="Indian University Campus Architecture" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-[#101D35]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-white">
                      Engineering &amp; Campus
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#2864F0] text-white text-[10px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Audit →
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h4 className="font-bold text-sm sm:text-base text-[#101D35] mb-1">B.Tech, CS, AI &amp; Degrees</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                      Targeting engineering applicants and parents across state quotas, JEE ranks, and direct merit.
                    </p>
                  </div>
                </div>
                <div className="p-4 sm:p-5 pt-0">
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] font-bold">
                    <span className="text-[#2864F0]">Meta &amp; Search</span>
                    <span className="text-emerald-600">-60% CPA</span>
                  </div>
                </div>
              </button>
            </ScrollReveal>

            {/* Card 3: EdTech, Online Degrees & Certifications */}
            <ScrollReveal animation="fade-up" delay={160}>
              <button
                onClick={scrollToLeadForm}
                className="w-full rounded-2xl border border-[#2864F0]/40 overflow-hidden bg-gradient-to-b from-white to-[#F5F8FF] shadow-sm hover:shadow-lg transition-all group text-left cursor-pointer flex flex-col justify-between ring-1 ring-[#2864F0]/20 hover-card-lift h-full"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-gradient-to-tr from-[#101D35] to-[#2864F0] p-4 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <span className="bg-emerald-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                        High Growth
                      </span>
                      <span className="text-xs font-mono text-white/80">EdTech</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 block">Digital Upskilling</span>
                      <span className="text-base font-black text-white">Online Degrees &amp; Certs</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h4 className="font-bold text-sm sm:text-base text-[#101D35] mb-1">Bootcamps, Certs &amp; Executive</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                      Full-funnel webinars, masterclasses, and WhatsApp drip sequences converting professionals.
                    </p>
                  </div>
                </div>
                <div className="p-4 sm:p-5 pt-0">
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] font-bold">
                    <span className="text-[#2864F0]">Search + LinkedIn</span>
                    <span className="text-emerald-600">3.8x ROAS</span>
                  </div>
                </div>
              </button>
            </ScrollReveal>

            {/* Card 4: Medical, Dental & Allied Sciences */}
            <ScrollReveal animation="fade-up" delay={240}>
              <button
                onClick={scrollToLeadForm}
                className="w-full rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all group text-left cursor-pointer flex flex-col justify-between hover-card-lift h-full"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image src="/admissions-counselling.jpg" alt="Parent and Student Counselling Session" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-[#101D35]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-white">
                      Medical &amp; Allied Health
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#2864F0] text-white text-[10px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Audit →
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h4 className="font-bold text-sm sm:text-base text-[#101D35] mb-1">MBBS, BDS, Pharma &amp; Nursing</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                      Geo-fenced parent targeting focused on hospital attachments, faculty credibility, and clinical labs.
                    </p>
                  </div>
                </div>
                <div className="p-4 sm:p-5 pt-0">
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] font-bold">
                    <span className="text-[#2864F0]">Parent Hyperlocal</span>
                    <span className="text-emerald-600">+100% Seats</span>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}
