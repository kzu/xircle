import { useState, useSyncExternalStore } from "react";
import { LogIn, LogOut } from "lucide-react";
import { authEnabled, signIn, signOut } from "@/lib/auth/client";
import { hasGateSessionMarker } from "@/lib/auth/gate-session-marker";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { cn } from "@/lib/utils";

const subscribeToNothing = () => () => {};
const noGateSessionOnServer = () => false;

const iconSlot = cn(
  "relative grid size-11 shrink-0 place-items-center rounded-full text-fg",
  "transition-[background-color,transform,opacity] duration-quick ease-out-smooth",
);

const iconBtn = cn(
  iconSlot,
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
      <div className={cn(iconSlot, "opacity-40")} aria-hidden="true">
        <LogIn className="size-5" strokeWidth={1.6} />
      </div>
    );
  }

  if (!user) {
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

  const canSignOut = authEnabled && !gateSession;

  if (!canSignOut) {
    return (
      <span className={iconSlot} aria-label="Signed in" title="Signed in">
        <LogOut className="size-5" strokeWidth={1.6} />
      </span>
    );
  }

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
