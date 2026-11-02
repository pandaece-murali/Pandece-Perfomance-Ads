"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const targetId = id === "lead-form" ? "admission-form" : id;
    const element = document.getElementById(targetId) || document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      if (id === "lead-form" || targetId === "admission-form") {
        setTimeout(() => {
          const input = document.getElementById("full-name-input") as HTMLInputElement | null;
          if (input) input.focus();
        }, 600);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#101D35]/95 backdrop-blur-md shadow-lg py-2.5 sm:py-3 border-b border-white/10"
          : "bg-[#101D35] py-3 sm:py-4 border-b border-white/5"
        }`}
    >
      {/* Top Scroll Motion Progress Indicator */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#2864F0] via-[#5B8CFF] to-emerald-400 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Brand Logo - Clean Single Line */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
          >
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
          </a>

          {/* Navigation Links - Strict Single Line with whitespace-nowrap */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-200">
            <button
              onClick={() => scrollToSection("outcomes")}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Business Outcomes
            </button>
            <button
              onClick={() => scrollToSection("strategy")}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Serviecs
            </button>
            <button
              onClick={() => scrollToSection("before-after")}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Before vs. After</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#2864F0]/20 text-[#5B8CFF] font-bold border border-[#2864F0]/30">
                Data
              </span>
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Economics Calculator
            </button>
          </nav>

          {/* Right Action Button - Single Line */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={() => scrollToSection("lead-form")}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#2864F0] to-[#5B8CFF] text-white text-sm font-bold shadow-lg shadow-[#2864F0]/25 hover:shadow-[#2864F0]/40 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <span>Get Admission Review</span>
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-white/10 mt-3 space-y-2">
            <button
              onClick={() => scrollToSection("outcomes")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md"
            >
              Business Outcomes
            </button>
            <button
              onClick={() => scrollToSection("before-after")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md"
            >
              Before vs After (Case Study)
            </button>
            <button
              onClick={() => scrollToSection("strategy")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md"
            >
              5-Step Admission Funnel
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md"
            >
              Economics Calculator
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection("lead-form")}
                className="w-full text-center px-4 py-3 rounded-lg bg-[#2864F0] text-white font-bold shadow-md"
              >
                Get Admission Marketing Review
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
