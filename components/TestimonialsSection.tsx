"use client";

import React from "react";

const testimonials = [
  {
    name: "Dr. Rajesh Mehta",
    initials: "RM",
    color: "#2864F0",
    stars: 5,
    quote:
      "Before working with PANDAeCe, we were spending heavily on Google Ads but couldn't connect a single rupee to actual seat fills. They rebuilt our full-funnel tracking, segmented our lead quality, and our cost per qualified lead dropped dramatically within two intake cycles.",
  },
  {
    name: "Ms. Priya Sharma",
    initials: "PS",
    color: "#5B8CFF",
    stars: 5,
    quote:
      "The Meta Ads strategy PANDAeCe designed for our MBA and BBA programmes was unlike anything we'd tried before. They targeted parents and students separately with different creatives. Our enquiry-to-counselling conversion went up significantly.",
  },
  {
    name: "Mr. Arun Kapoor",
    initials: "AK",
    color: "#101D35",
    stars: 5,
    quote:
      "PANDAeCe showed me a clear attribution model linking every ad rupee to a confirmed admission. For the first time, I could report a credible ROAS to my investors. That transparency is rare in this industry.",
  },
  {
    name: "Prof. Sunita Rao",
    initials: "SR",
    color: "#2864F0",
    stars: 5,
    quote:
      "Our landing pages were the weakest link — we had decent traffic but terrible conversion. PANDAeCe redesigned our programme pages with mobile-first layouts and strong CTAs. The improvement in form submissions within the first month was substantial.",
  },
  {
    name: "Mr. Vikram Nair",
    initials: "VN",
    color: "#5B8CFF",
    stars: 5,
    quote:
      "PANDAeCe built programme-specific funnels and a unified reporting dashboard. Now I can see which programme generates the best cost per admission in real time. Exactly the clarity we needed.",
  },
  {
    name: "Dr. Ananya Gupta",
    initials: "AG",
    color: "#101D35",
    stars: 5,
    quote:
      "Healthcare management is a niche segment. PANDAeCe took time to understand the career pathway — the ad copy was spot-on for our target profile. Qualified lead volume improved noticeably in the first campaign.",
  },
  {
    name: "Mr. Rohit Joshi",
    initials: "RJ",
    color: "#2864F0",
    stars: 5,
    quote:
      "PANDAeCe deployed GA4 + Meta CAPI alongside our CRM to build a single source of truth. The month-two optimisation recommendations — cutting underperforming ad sets and doubling high-intent ones — had immediate impact on enrolment costs.",
  },
  {
    name: "Ms. Kavitha Reddy",
    initials: "KR",
    color: "#5B8CFF",
    stars: 5,
    quote:
      "The audience segmentation on Meta and separate Google Search campaigns for each department genuinely moved the needle on seat fills. PANDAeCe understood the difference between a JEE aspirant and a management candidate.",
  },
  {
    name: "Dr. Sanjay Patel",
    initials: "SP",
    color: "#101D35",
    stars: 5,
    quote:
      "PANDAeCe restructured our campaigns around working-professional targeting on LinkedIn and Google, combined with a remarketing funnel on Meta. The quality of leads improved dramatically — less time wasted by our counselling team.",
  },
  {
    name: "Mr. Arjun Singh",
    initials: "AS",
    color: "#2864F0",
    stars: 5,
    quote:
      "PANDAeCe built a systematic funnel — from awareness to re-engagement — with clear CPL and ROAS targets at every stage. The continuous optimisation framework means we're never paying for stale campaigns.",
  },
];

// Duplicate for seamless infinite loop
const allCards = [...testimonials, ...testimonials];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="inline-flex flex-col shrink-0 w-[320px] sm:w-[360px] bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mx-3">
      <StarRating count={t.stars} />
      <p className="mt-3 text-sm leading-relaxed text-[#17243A] flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-3 pt-4 border-t border-slate-100">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
          style={{ backgroundColor: t.color }}
        >
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-bold text-[#101D35]">{t.name}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
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
    <section className="py-10 sm:py-14 bg-[#F5F8FF] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2864F0]/10 border border-[#2864F0]/20 mb-3">
          <svg className="w-3.5 h-3.5 text-[#2864F0]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs font-bold tracking-widest text-[#2864F0] uppercase">
            What Education Leaders Say
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-black text-[#101D35] leading-tight">
          TRUSTED BY ADMISSIONS &amp;{" "}
          <span className="text-[#2864F0]">MARKETING LEADERS</span>
        </h2>
        <p className="mt-2 text-[#64748B] max-w-xl mx-auto text-sm sm:text-base">
          Directors, principals and admissions heads rethinking student acquisition.
        </p>
      </div>

      {/* Single row — fast infinite scroll */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#F5F8FF] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#F5F8FF] to-transparent" />

        <div
          className="flex"
          style={{
            animation: "marquee-left 25s linear infinite",
            width: "max-content",
          }}
        >
          {allCards.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Section CTA */}
      <div className="mt-6 sm:mt-8 text-center">
        <button
          onClick={scrollToLeadForm}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2864F0] text-white text-sm font-bold shadow-lg shadow-[#2864F0]/25 hover:bg-[#1a50d0] hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          <span>Request Your Institution Admission Review</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
