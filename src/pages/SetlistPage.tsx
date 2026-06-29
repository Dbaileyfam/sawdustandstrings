import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Music2 } from "lucide-react";
import { setlistHighlights, venues } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { fadeUp } from "@/lib/motion";
import { PageHero } from "@/components/PageHero";

export function SetlistPage() {
  usePageTitle("Setlist");

  return (
    <>
      <PageHero
        eyebrow="What we play"
        title="Setlist highlights"
        description="Crowd-pleasing singalongs from CCR to Tyler Childers — and plenty more where these came from."
      />

      <section className="ss-page-shell">
        <div className="mx-auto max-w-6xl">
          <motion.ul
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            {...fadeUp}
          >
            {setlistHighlights.map((song) => (
              <li
                key={song}
                className="ss-card flex items-center gap-3 px-4 py-3 text-sm font-medium text-ss-cream"
              >
                <Music2 className="h-4 w-4 shrink-0 text-ss-gold" aria-hidden />
                {song}
              </li>
            ))}
          </motion.ul>
          <p className="mt-6 text-center text-sm italic text-ss-cream-muted">
            …and many more. Full repertoire available on request.
          </p>
        </div>
      </section>

      <section className="border-t border-ss-border/60 bg-ss-surface/35 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.h2 className="ss-section-heading text-center" {...fadeUp}>
            Where we play
          </motion.h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ss-cream-muted">
            From mellow listening rooms to lively patios and packed venues.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {venues.map((venue, idx) => (
              <motion.li
                key={venue}
                className="ss-card flex items-center gap-4 p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <MapPin className="h-5 w-5 shrink-0 text-ss-gold" aria-hidden />
                <span className="font-medium text-ss-cream">{venue}</span>
              </motion.li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link to={routes.contact} className="ss-btn-primary inline-flex">
              Book for your venue
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
