import { useState, useSyncExternalStore } from "react";
import { LogIn, LogOut } from "lucide-react";
import { authEnabled, signIn, signOut } from "@/lib/auth/client";
import { hasGateSessionMarker } from "@/lib/auth/gate-session-marker";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { cn } from "@/lib/utils";

const subscribeToNothing = () => () => {};
const noGateSessionOnServer = () => false;

const iconBtn = cn(
  "relative grid size-11 place-items-center rounded-full text-fg",
  "transition-[background-color,transform] duration-quick ease-out-smooth",
  "hover:bg-surface active:scale-[0.96] disabled:cursor-wait disabled:opacity-60",
);

export function AuthSlot() {
  const { user, isPending } = useCurrentUserState();
  const [busy, setBusy] = useState(false);
  const gateSession = useSyncExternalStore(
    subscribeToNothing,
    hasGateSessionMarker,
    noGateSessionOnServer,
  );

  if (isPending) {
    return (
      <div
        className="size-11 animate-pulse rounded-full bg-surface"
        aria-hidden="true"
      />
    );
  }

  if (user) {
    if (!authEnabled || gateSession) return null;
    return (
      <button
        type="button"
        aria-label="Sign out"
        title="Sign out"
        disabled={busy}
        onClick={() => {
          setBusy(true);
          void signOut().catch(() => setBusy(false));
        }}
        className={iconBtn}
      >
        <LogOut className="size-5" strokeWidth={1.6} />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label="Sign in with X"
      title="Sign in with X"
      disabled={busy}
      onClick={() => {
        setBusy(true);
        void signIn("grok-x", { callbackURL: "/" }).catch(() => setBusy(false));
      }}
      className={iconBtn}
    >
      <LogIn className="size-5" strokeWidth={1.6} />
    </button>
  );
}
