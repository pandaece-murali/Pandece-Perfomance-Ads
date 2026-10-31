"use client";

import React, { useState } from "react";

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    institutionName: "",
    designation: "Director / Principal",
    institutionType: "B-School / Management Institute",
    monthlyBudget: "₹1,00,000–₹3,00,000",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="lead-form" className="py-24 bg-[#101D35] text-white relative overflow-hidden">
      {/* Background visual glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2864F0]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#5B8CFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Persuasive copy & value reassurance */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#5B8CFF] text-xs font-bold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5B8CFF] animate-ping"></span>
              2026–27 Intake Advisory Open
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 uppercase">
              WHAT'S YOUR ADMISSION TARGET <br />
              <span className="text-[#5B8CFF]">FOR THE NEXT CYCLE?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed mb-6">
              Whether it's 100 seats or 1,000, the plan should start with your intake target, course economics and acquisition budget — not a generic ad package.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              PANDAeCe reviews your current student acquisition and shows you where Google Ads, Meta Ads, landing pages and tracking can move the numbers.
            </p>

            {/* 3 Pillars of the Review */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#2864F0]/30 border border-[#2864F0] flex items-center justify-center text-white shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">
                    Ad Leak & Waste Audit
                  </h4>
                  <p className="text-xs text-slate-300">
                    We inspect your existing search queries, negative lists, and ad spend to uncover where rupees are getting lost on non-prospective clicks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#2864F0]/30 border border-[#2864F0] flex items-center justify-center text-white shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">
                    Course Unit Economics Model
                  </h4>
                  <p className="text-xs text-slate-300">
                    Calculated CPA targets matching your tuition fee bracket and target cohort size so your marketing spend stays profitable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#2864F0]/30 border border-[#2864F0] flex items-center justify-center text-white shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">
                    Full-Funnel Tracking Architecture
                  </h4>
                  <p className="text-xs text-slate-300">
                    Recommendations on tying counselling updates and fee deposits back into ad algorithms for automated quality bidding.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> No Obligation
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Strict Confidentiality (NDA)
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Senior Strategist Review
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white text-[#17243A] p-6 sm:p-10 shadow-2xl border border-slate-100 relative">
              
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2864F0] block mb-1">
                      Targeted Consultation
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[#101D35] tracking-tight">
                      Request an Admission Marketing Review
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-1.5">
                      Tell us about your institution, current advertising and intake goals. We'll walk you through how to measure and improve student acquisition.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Full Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#101D35] uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Dr. Rajesh Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#2864F0] focus:ring-2 focus:ring-[#2864F0]/15"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#101D35] uppercase tracking-wider mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="rajesh@institution.edu.in"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#2864F0] focus:ring-2 focus:ring-[#2864F0]/15"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone Number & Institution Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#101D35] uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#2864F0] focus:ring-2 focus:ring-[#2864F0]/15"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#101D35] uppercase tracking-wider mb-1.5">
                          Institution / Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.institutionName}
                          onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                          placeholder="e.g. Apex Institute of Management"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#2864F0] focus:ring-2 focus:ring-[#2864F0]/15"
                        />
                      </div>
                    </div>

                    {/* Designation */}
                    <div>
                      <label className="block text-xs font-bold text-[#101D35] uppercase tracking-wider mb-1.5">
                        Designation *
                      </label>
                      <select
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#2864F0] bg-white font-medium"
                      >
                        <option value="Founder / Owner">Founder / Owner</option>
                        <option value="Director / Principal">Director / Principal</option>
                        <option value="Admissions Head">Admissions Head</option>
                        <option value="Marketing Head">Marketing Head</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Institution Type */}
                    <div>
                      <label className="block text-xs font-bold text-[#101D35] uppercase tracking-wider mb-1.5">
                        Institution Type *
                      </label>
                      <select
                        value={formData.institutionType}
                        onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#2864F0] bg-white font-medium"
                      >
                        <option value="School">School</option>
                        <option value="College / University">College / University</option>
                        <option value="B-School / Management Institute">B-School / Management Institute</option>
                        <option value="Coaching Academy">Coaching Academy</option>
                        <option value="EdTech Company">EdTech Company</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Monthly Ad Budget */}
                    <div>
                      <label className="block text-xs font-bold text-[#101D35] uppercase tracking-wider mb-1.5">
                        Monthly Ad Budget *
                      </label>
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#2864F0] bg-white font-medium"
                      >
                        <option value="Below ₹50,000">Below ₹50,000</option>
                        <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
                        <option value="₹1,00,000–₹3,00,000">₹1,00,000–₹3,00,000</option>
                        <option value="₹3,00,000–₹5,00,000">₹3,00,000–₹5,00,000</option>
                        <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2864F0] to-[#5B8CFF] text-white font-bold text-base shadow-xl shadow-[#2864F0]/30 hover:shadow-[#2864F0]/50 hover:brightness-105 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <span>Analysing Intake Parameters...</span>
                        ) : (
                          <>
                            <span>Get My Admission Marketing Review</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Privacy Note */}
                    <p className="text-[11px] text-[#64748B] text-center pt-1 leading-normal">
                      Your information will be used to respond to your enquiry in accordance with our Privacy Policy. No spam, ever.
                    </p>
                  </form>
                </>
              ) : (
                /* Success Confirmation State */
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                    Review Request Received
                  </span>
                  <h3 className="text-2xl font-black text-[#101D35] mb-2 font-display">
                    Thank You, {formData.fullName || "Sir/Madam"}!
                  </h3>
                  <p className="text-sm text-[#64748B] max-w-md mx-auto mb-6">
                    Our Senior Education Growth Architect is reviewing details for <strong className="text-[#101D35]">{formData.institutionName || "your institution"}</strong> ({formData.institutionType}). We will reach out within 24 business hours at <strong className="text-[#101D35]">{formData.workEmail}</strong>.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-sm mx-auto mb-6">
                    ✓ Diagnostic review scheduled for the {formData.monthlyBudget} budget bracket.
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#2864F0] hover:underline"
                  >
                    ← Submit another enquiry or edit details
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

