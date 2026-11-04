"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-[#101D35] text-white p-6">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold mb-3 font-display">Something went wrong</h2>
          <p className="text-sm text-slate-300 mb-6">
            An unexpected error occurred. Please try reloading the page.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 bg-[#2864F0] hover:bg-[#1E50C7] text-white rounded-xl font-bold text-sm transition-all"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

