import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Multi Tech Brands home"
      className={`group inline-flex items-center gap-3 ${className}`}
      data-cursor="hover"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-premium shadow-glow">
        <span className="absolute inset-[1.5px] rounded-[10px] bg-ink" />
        <svg width="18" height="18" viewBox="0 0 18 18" className="relative" fill="none">
          <path d="M2 14V4l5 6 5-6v10" stroke="url(#g)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 4v10" stroke="url(#g)" strokeWidth="1.8" strokeLinecap="round" />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="18" y2="18">
              <stop stopColor="#6FA3FF" />
              <stop offset="1" stopColor="#19E0FF" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold tracking-tight text-white">
          Multi Tech Brands
        </span>
        <span className="mt-0.5 text-[9px] uppercase tracking-[0.28em] text-silver-400">
          Group of Companies
        </span>
      </span>
    </Link>
  );
}
