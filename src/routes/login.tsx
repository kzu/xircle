import { createFileRoute, Navigate } from "@tanstack/react-router";
import { authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { Mark } from "@/components/logo";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const { user, isPending } = useCurrentUserState();

  if (isPending) {
    return (
      <SiteShell>
        <main className="grid flex-1 place-items-center px-5">
          <div className="h-24 w-full max-w-sm animate-pulse rounded-xl bg-surface" />
        </main>
      </SiteShell>
    );
  }

  if (user) return <Navigate to="/" />;

  return (
    <SiteShell>
      <main className="grid flex-1 place-items-center px-5 py-16">
        <div className="w-full max-w-sm text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-full shadow-tray">
            <Mark className="size-8" />
          </div>
          <h1 className="mt-6 font-display text-3xl tracking-tight italic">
            Enter Xircle
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Sign in with X to join a circle.
          </p>
          {authEnabled ? (
            <button
              type="button"
              onClick={() => void signIn("grok-x", { callbackURL: "/" })}
              className="mt-8 inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg transition-[transform,opacity] duration-quick ease-out-smooth hover:opacity-90 active:scale-[0.96]"
            >
              <XMark />
              Continue with X
            </button>
          ) : (
            <p className="mt-8 text-sm text-muted">Sign-in is disabled.</p>
          )}
        </div>
      </main>
    </SiteShell>
  );
}

function XMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.725-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
