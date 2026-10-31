"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the PANDAeCe system stop counselling teams from burning out on junk leads?",
      a: "Generic agencies bid for the lowest Cost-Per-Lead (CPL) by running loose forms with zero friction. We flip this: we inject course eligibility criteria, location prerequisites, and transparent fee indications directly on high-intent landing pages. We score prospects before they hit the CRM, so your counsellors only dial students who can actually afford and qualify for your course.",
    },
    {
      q: "Does this integrate with our current CRM (LeadSquared, ExtraaEdge, NoPaperForms, etc.)?",
      a: "Yes. We configure webhooks and direct API integrations with standard education CRMs including LeadSquared, ExtraaEdge, NoPaperForms, Zoho, and Salesforce. More importantly, when an applicant is verified or deposits initial admission fees, that status triggers an offline conversion signal back to Google and Meta's bidding algorithms, teaching them to seek more paying students.",
    },
    {
      q: "What is the timeline to audit and launch before our next intake cutoff?",
      a: "Our full-funnel audit and campaign architecture setup typically takes 7 to 10 business days. This includes keyword negative filtering, tracking pixel sanitisation, course landing page deployment, and CRM sync. You can start seeing initial qualified application volume in week two.",
    },
    {
      q: "Are the performance figures in the Before vs. After section guaranteed?",
      a: "No. As clearly stated in our disclaimers, the Before vs. After model is an illustrative scenario demonstrating mathematical unit economics on a benchmark ₹3,00,000 spend. Actual outcomes depend on institutional brand equity, location, tuition fee competitiveness, counselling follow-up velocity, and course market demand.",
    },
    {
      q: "How do you track offline admissions and walk-in campus confirmations?",
      a: "We deploy UTM parameter mapping across all enquiry touches and hash-match student phone numbers and emails when offline fee receipts are generated in your accounts ledger. Where feasible, offline conversion imports allow board-level ROAS verification.",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2864F0] block mb-2">
            Institutional Leadership FAQs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#101D35] tracking-tight uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#64748B] mt-2">
            Common questions from college owners, directors, and admissions heads.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-[#101D35]">
                    {faq.q}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#2864F0] text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 text-sm text-[#64748B] leading-relaxed border-t border-slate-100 bg-[#F5F8FF]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

