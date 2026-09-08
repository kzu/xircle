import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const THEME_KEY = "xircle-theme";

function applyTheme(next: "light" | "dark") {
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    /* ignore */
  }
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Switch color theme"
      title="Switch color theme"
      onClick={() => {
        const dark = document.documentElement.classList.contains("dark");
        applyTheme(dark ? "light" : "dark");
      }}
      className={cn(
        "relative z-10 grid size-11 place-items-center rounded-full text-fg",
        "pointer-events-auto cursor-pointer",
        "transition-[background-color,transform] duration-quick ease-out-smooth",
        "hover:bg-surface active:scale-[0.96]",
      )}
    >
      <span className="relative block size-5">
        <Sun
          className="size-5 transition-[opacity,transform,filter] duration-fast ease-icon dark:scale-[0.25] dark:opacity-0 dark:blur-[4px]"
          strokeWidth={1.6}
        />
        <Moon
          className="absolute inset-0 size-5 scale-[0.25] opacity-0 blur-[4px] transition-[opacity,transform,filter] duration-fast ease-icon dark:scale-100 dark:opacity-100 dark:blur-none"
          strokeWidth={1.6}
        />
      </span>
    </button>
  );
}
