import { AuthSlot } from "@/components/auth-slot";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <div className="flex items-center rounded-full p-1 shadow-tray">
          <ThemeToggle />
          <AuthSlot />
        </div>
      </div>
    </header>
  );
}
