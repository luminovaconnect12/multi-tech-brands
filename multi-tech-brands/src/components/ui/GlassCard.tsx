import type { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`glass ${hover ? "glass-hover" : ""} rounded-4xl ${className}`}
    >
      {children}
    </div>
  );
}
