import { useState, useSyncExternalStore } from "react";
import { LogIn, LogOut } from "lucide-react";
import { authEnabled, signIn, signOut } from "@/lib/auth/client";
import { hasGateSessionMarker } from "@/lib/auth/gate-session-marker";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { cn } from "@/lib/utils";

const subscribeToNothing = () => () => {};
const noGateSessionOnServer = () => false;

const iconBtn = cn(
  "relative z-10 grid size-11 shrink-0 place-items-center rounded-full text-fg",
  "pointer-events-auto cursor-pointer",
  "transition-[background-color,transform,opacity] duration-quick ease-out-smooth",
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

  // Direct (X) sessions can sign out. Gate-materialized sessions cannot —
  // the next request signs the viewer back in — so offer Sign in with X
  // instead of a dead door.
  const canSignOut = Boolean(user) && authEnabled && !gateSession && !isPending;

  return (
    <button
      type="button"
      aria-label={canSignOut ? "Sign out" : "Sign in with X"}
      title={canSignOut ? "Sign out" : "Sign in with X"}
      disabled={busy}
      onClick={() => {
        if (busy) return;
        setBusy(true);
        const action = canSignOut
          ? signOut()
          : signIn("grok-x", { callbackURL: "/" });
        void action.catch(() => setBusy(false));
      }}
      className={iconBtn}
    >
      {canSignOut ? (
        <LogOut className="size-5" strokeWidth={1.6} />
      ) : (
        <LogIn className="size-5" strokeWidth={1.6} />
      )}
    </button>
  );
}
