import Link from "next/link";
import type { ReactNode } from "react";
import Magnetic from "@/components/motion/Magnetic";

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  arrow?: boolean;
  className?: string;
}) {
  const cls = variant === "primary" ? "btn-primary" : "btn-ghost";
  const inner =
    variant === "primary" ? (
      <span>
        {children}
        {arrow && <Arrow />}
      </span>
    ) : (
      <>
        {children}
        {arrow && <Arrow />}
      </>
    );

  return (
    <Magnetic strength={0.25} className="inline-block">
      <Link href={href} className={`${cls} ${className}`} data-cursor="hover">
        {inner}
      </Link>
    </Magnetic>
  );
}
