"use client";

import React, { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const org = searchParams.get("org") || "";
  const budget = searchParams.get("budget") || "";

  // Stable reference identifier
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "").slice(0, 6).toUpperCase();
  const refCode = `PEDU-${uid || "7842"}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1324] text-white selection:bg-[#2864F0] selection:text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#2864F0]/20 via-[#101D35]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header */}
      <header className="border-b border-white/10 bg-[#101D35]/80 backdrop-blur-md relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-white p-0.5 shadow-md shadow-[#2864F0]/30 transition-transform group-hover:scale-105 shrink-0 overflow-hidden flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="PANDAeCe Logo"
                width={38}
                height={38}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display text-2xl font-black tracking-tight text-white whitespace-nowrap group-hover:text-[#5B8CFF] transition-colors">
              PANDA<span className="text-[#5B8CFF]">eCe</span>
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm font-bold text-white transition-all shadow-sm"
          >
            <span>←</span>
            <span>Back to Homepage</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10 w-full">
        
        {/* Confirmation Hero Card */}
        <div className="rounded-3xl bg-white text-[#17243A] p-6 sm:p-12 shadow-2xl border border-slate-100 relative overflow-hidden mb-8 text-center sm:text-left">
          {/* Subtle Top Gradient Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-[#2864F0] to-[#5B8CFF]" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            {/* Animated Checkmark Badge */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
              <svg className="w-9 h-9 sm:w-11 sm:h-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Review Request Confirmed &amp; Logged in CRM
              </div>

              <h1 className="font-display text-2xl sm:text-4xl font-black text-[#101D35] tracking-tight leading-tight">
                Thank You{name ? `, ${name}` : ""}!
              </h1>

              <p className="text-sm sm:text-base text-[#475569] mt-2 leading-relaxed">
                Your admission marketing review request for{" "}
                <strong className="text-[#101D35]">{org || "your institution"}</strong> has been received by our senior strategy team.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center shrink-0 w-full sm:w-auto">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                Enquiry Reference
              </span>
              <span className="font-mono text-sm sm:text-base font-extrabold text-[#2864F0]">
                {refCode}
              </span>
            </div>
          </div>

          {/* Quick Context Summary Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8 text-left text-xs">
            <div className="flex items-center gap-3">
              <span className="text-xl">⏱️</span>
              <div>
                <span className="text-slate-500 block font-medium">Response SLA</span>
                <span className="font-bold text-[#101D35]">Within 24 Business Hours</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🔒</span>
              <div>
                <span className="text-slate-500 block font-medium">Confidentiality</span>
                <span className="font-bold text-[#101D35]">Strict NDA Protected</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🎯</span>
              <div>
                <span className="text-slate-500 block font-medium">Assigned To</span>
                <span className="font-bold text-[#101D35]">Senior Growth Architect</span>
              </div>
            </div>
          </div>

          {/* What Happens Next - 3 Step Roadmap */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="font-display text-lg sm:text-xl font-black text-[#101D35] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#2864F0] rounded-full inline-block" />
              What Happens Next:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs relative">
                <div className="w-7 h-7 rounded-lg bg-[#2864F0]/10 text-[#2864F0] font-black text-xs flex items-center justify-center mb-3">
                  01
                </div>
                <h3 className="font-bold text-sm text-[#101D35] mb-1">
                  Ad Leak &amp; Spend Audit
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  We inspect your current intake targets, course fee brackets, and ad spend to map leaks before spending another rupee.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs relative">
                <div className="w-7 h-7 rounded-lg bg-[#2864F0]/10 text-[#2864F0] font-black text-xs flex items-center justify-center mb-3">
                  02
                </div>
                <h3 className="font-bold text-sm text-[#101D35] mb-1">
                  Unit Economics Blueprint
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  We calculate achievable CPQL and Cost Per Confirmed Admission benchmarks tailored to your target student cohorts.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs relative">
                <div className="w-7 h-7 rounded-lg bg-[#2864F0]/10 text-[#2864F0] font-black text-xs flex items-center justify-center mb-3">
                  03
                </div>
                <h3 className="font-bold text-sm text-[#101D35] mb-1">
                  1-on-1 Strategic Walkthrough
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  A senior education growth specialist reviews findings with your directors or admissions committee.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="border-t border-slate-100 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#101D35] font-bold text-sm transition-all text-center"
            >
              ← Return to Main Page
            </Link>

            <a
              href={`https://wa.me/919999999999?text=${encodeURIComponent(
                `Hello PANDAeCe team, I just requested an admission review for ${org || "our institution"}. Reference: ${refCode}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>💬 Urgent Intake Deadline? Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Certified Trust Strip */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-3">
            Integrated With Higher Education &amp; EdTech Leaders
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5">✓ Google Premier Partner Specs</span>
            <span className="flex items-center gap-1.5">✓ Meta CAPI Integration</span>
            <span className="flex items-center gap-1.5">✓ LeadSquared &amp; ExtraaEdge Certified</span>
            <span className="flex items-center gap-1.5">✓ 4.2x Average Intake ROAS</span>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

