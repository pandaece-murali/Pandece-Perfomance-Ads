import type { Metadata } from "next";
import { Suspense } from "react";
import ThankYouContent from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | PANDAeCe Admission Performance Review",
  description:
    "Your admission marketing review request has been received. Our senior education growth architect is analyzing your intake parameters.",
};

function ThankYouLoading() {
  return (
    <div className="min-h-screen bg-[#0B1324] flex items-center justify-center text-white p-6">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-[#2864F0] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-300 text-sm font-semibold">
          Finalising your admission review registration...
        </p>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<ThankYouLoading />}>
      <ThankYouContent />
    </Suspense>
  );
}

