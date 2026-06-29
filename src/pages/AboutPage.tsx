import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { bio, influences, quickFacts } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { PageHero } from "@/components/PageHero";

export function AboutPage() {
  usePageTitle("About");

  return (
    <>
      <PageHero
        eyebrow="The duo"
        title="About Sawdust & Strings"
        description={bio.short}
      />

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_300px]">
          <div>
            {bio.long.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 leading-relaxed text-ss-muted first:mt-0">
                {paragraph}
              </p>
            ))}
            <Link
              to={routes.contact}
              className="ss-btn-primary mt-8 inline-flex"
            >
              Book the duo
            </Link>
          </div>

          <aside className="space-y-6">
            <div className="ss-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-ss-rust">Lineup</h2>
              <ul className="mt-4 space-y-3">
                {bio.lineup.map((member) => (
                  <li
                    key={member.role}
                    className="flex items-baseline justify-between gap-3 border-b border-ss-border/50 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-ss-brown">{member.name}</span>
                    <span className="text-right text-sm text-ss-muted">{member.role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ss-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-ss-rust">
                Quick facts
              </h2>
              <ul className="mt-4 space-y-3">
                {quickFacts.map((fact) => (
                  <li key={fact.label} className="border-b border-ss-border/50 pb-3 last:border-0 last:pb-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-ss-rust">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm text-ss-brown">{fact.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-ss-border bg-ss-parchment/70 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="ss-section-heading text-center">Influences &amp; style</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ss-muted">
            Classic rock legends to modern Americana — familiar songs with an authentic, laid-back
            feel.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {influences.map((artist) => (
              <li
                key={artist}
                className="rounded-sm border border-ss-border bg-ss-cream/80 px-4 py-2 text-sm font-medium text-ss-brown"
              >
                {artist}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link
              to={routes.setlist}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ss-rust transition hover:text-ss-brown"
            >
              See the setlist
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
