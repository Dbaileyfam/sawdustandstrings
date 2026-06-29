import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { bio, influences, quickFacts } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { fadeUp } from "@/lib/motion";
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

      <section className="ss-page-shell">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_300px]">
          <motion.div {...fadeUp}>
            {bio.long.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 leading-relaxed text-ss-cream-muted first:mt-0"
              >
                {paragraph}
              </p>
            ))}
            <Link to={routes.contact} className="ss-btn-primary mt-8 inline-flex">
              Book the duo
            </Link>
          </motion.div>

          <aside className="space-y-6">
            <motion.div className="ss-card p-6" {...fadeUp} transition={{ delay: 0.08 }}>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-ss-gold-muted">
                Lineup
              </h2>
              <ul className="mt-4 space-y-3">
                {bio.lineup.map((member) => (
                  <li
                    key={member.role}
                    className="flex items-baseline justify-between gap-3 border-b border-ss-border/50 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-ss-cream">{member.name}</span>
                    <span className="text-right text-sm text-ss-cream-muted">{member.role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="ss-card p-6" {...fadeUp} transition={{ delay: 0.12 }}>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-ss-gold-muted">
                Quick facts
              </h2>
              <ul className="mt-4 space-y-3">
                {quickFacts.map((fact) => (
                  <li key={fact.label} className="border-b border-ss-border/50 pb-3 last:border-0 last:pb-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-ss-gold-muted">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm text-ss-cream">{fact.value}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </aside>
        </div>
      </section>

      <section className="border-t border-ss-border/60 bg-ss-surface/35 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2 className="ss-section-heading" {...fadeUp}>
            Influences &amp; style
          </motion.h2>
          <p className="mx-auto mt-3 max-w-2xl text-ss-cream-muted">
            Classic rock legends to modern Americana — familiar songs with an authentic, laid-back
            feel.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {influences.map((artist) => (
              <li
                key={artist}
                className="rounded-full border border-ss-border bg-ss-elevated/80 px-4 py-2 text-sm font-medium text-ss-cream"
              >
                {artist}
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              to={routes.setlist}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ss-gold transition hover:text-ss-cream"
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
