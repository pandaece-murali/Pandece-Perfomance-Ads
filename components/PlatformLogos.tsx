"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function PlatformLogos() {
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

  return (
    <div className="py-6 sm:py-8 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          {/* Top Eyebrow */}
          <div className="text-center mb-4 sm:mb-5">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#64748B]">
              Certified Marketing Partners &amp; Education CRM Integrations
            </p>
          </div>

          {/* Logos Flex Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-85 hover:opacity-100 transition-opacity">
          
          {/* Google Ads */}
          <div className="flex items-center gap-2.5 group">
            <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none">
              <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107" />
              <path d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00" />
              <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50" />
              <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black text-[#101D35] tracking-tight">Google Ads</span>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Certified Partner</span>
            </div>
          </div>

          {/* Meta Ads */}
          <div className="flex items-center gap-2.5 group">
            <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none">
              <path d="M24 4C12.954 4 4 12.954 4 24c0 9.988 7.305 18.271 16.875 19.771V29.833h-5.078V24h5.078v-4.446c0-5.013 2.988-7.781 7.555-7.781 2.188 0 4.477.391 4.477.391v4.922h-2.523c-2.484 0-3.259 1.541-3.259 3.123V24h5.547l-.887 5.833h-4.66v13.938C36.695 42.271 44 33.988 44 24c0-11.046-8.954-20-20-20z" fill="#0866FF" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black text-[#101D35] tracking-tight">Meta Business</span>
              <span className="text-[10px] font-bold text-[#0866FF] uppercase tracking-wider">Ads Partner</span>
            </div>
          </div>

          {/* Google Analytics 4 */}
          <div className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center p-1">
              <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black text-[#101D35]">GA4 &amp; CAPI</span>
              <span className="text-[10px] font-bold text-[#64748B] uppercase">Event Tracking</span>
            </div>
          </div>

          {/* LeadSquared */}
          <div className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-xs shadow-sm">
              LS
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black text-[#101D35]">LeadSquared</span>
              <span className="text-[10px] font-bold text-orange-600 uppercase">Education CRM</span>
            </div>
          </div>

          {/* ExtraaEdge */}
          <div className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-[#2864F0] flex items-center justify-center text-white font-black text-xs shadow-sm">
              EE
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black text-[#101D35]">ExtraaEdge</span>
              <span className="text-[10px] font-bold text-[#2864F0] uppercase">Admissions CRM</span>
            </div>
          </div>

          {/* NoPaperForms */}
          <div className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-xs shadow-sm">
              NPF
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black text-[#101D35]">NoPaperForms</span>
              <span className="text-[10px] font-bold text-emerald-600 uppercase">Collexo Sync</span>
            </div>
          </div>

          {/* Salesforce Cloud */}
          <div className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-sky-500/10 flex items-center justify-center p-1">
              <svg className="w-5 h-5 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black text-[#101D35]">Salesforce</span>
              <span className="text-[10px] font-bold text-sky-600 uppercase">Education Cloud</span>
            </div>
          </div>

        </div>

        {/* Section CTA */}
        <div className="mt-5 text-center">
          <button
            onClick={scrollToLeadForm}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2864F0] hover:text-[#101D35] bg-[#2864F0]/10 hover:bg-[#2864F0]/15 px-4 py-2 rounded-full transition-all cursor-pointer shadow-sm hover:scale-105"
          >
            <span>Connect Your Ad Channels &amp; CRM Directly to PANDAeCe</span>
            <span className="text-base leading-none">→</span>
          </button>
        </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
