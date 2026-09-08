import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-7", className)}
    >
      <circle
        cx="16"
        cy="16"
        r="13.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle
        cx="16"
        cy="16"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="Xircle home"
      className="flex items-center gap-2.5 text-fg no-underline"
    >
      <Mark />
      {compact ? null : (
        <span className="font-display text-xl tracking-tight italic">Xircle</span>
      )}
    </Link>
  );
}
