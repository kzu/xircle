import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/")({ component: Home });

const ROLES = [
  {
    n: "01",
    title: "Members",
    body: "Read the circle. A feed that was chosen, not ranked by an algorithm.",
  },
  {
    n: "02",
    title: "Contributors",
    body: "Add as well as read. Bring posts from X into the circle so others can find them in one place.",
  },
  {
    n: "03",
    title: "Admins",
    body: "Set up the community. Who belongs, who can add, and what the circle is for.",
  },
] as const;

function Home() {
  return (
    <SiteShell>
      <main className="relative flex flex-1 flex-col overflow-x-hidden">
        <HeroOrbits />
        <section className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
          <p className="rise-in font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase">
            Powered by X
          </p>
          <h1 className="rise-in rise-in-1 mt-5 font-display text-hero leading-[1.05] tracking-display italic text-fg">
            Curated communities, in a circle.
          </h1>
          <p className="rise-in rise-in-2 mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Xircle is a way to create curated content communities, with the X
            platform as the content provider. Posts live on X. The circle
            decides what belongs.
          </p>
        </section>

        <section className="relative border-t border-border">
          <div className="mx-auto grid max-w-5xl gap-0 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-3">
            {ROLES.map((role, i) => (
              <article
                key={role.n}
                className={
                  i === 0
                    ? "rise-in border-b border-border py-8 md:border-b-0 md:py-0 md:pr-8"
                    : i < ROLES.length - 1
                      ? "rise-in border-b border-border py-8 md:border-b-0 md:border-l md:px-8 md:py-0"
                      : "rise-in py-8 md:border-l md:py-0 md:pl-8"
                }
                style={{ animationDelay: `${200 + i * 80}ms` }}
              >
                <p className="font-sans text-xs tracking-[0.18em] text-subtle tabular-nums">
                  {role.n}
                </p>
                <h2 className="mt-3 font-display text-2xl tracking-tight text-fg italic">
                  {role.title}
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  {role.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-auto border-t border-border">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 sm:px-8">
            <p className="font-display text-sm italic text-muted">Xircle</p>
            <p className="text-xs tracking-wide text-subtle">Content from X</p>
          </div>
        </footer>
      </main>
    </SiteShell>
  );
}

function HeroOrbits() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 flex h-[min(72vh,640px)] items-center justify-center overflow-hidden"
    >
      <span className="absolute size-[min(90vw,34rem)] rounded-full border border-border" />
      <span className="absolute size-[min(64vw,24rem)] rounded-full border border-border" />
      <span className="absolute size-[min(38vw,14rem)] rounded-full border border-border" />
    </div>
  );
}
