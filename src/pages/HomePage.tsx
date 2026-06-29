import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Guitar, MapPin, Music2 } from "lucide-react";
import { bio, influences, quickFacts, setlistHighlights, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { fadeUp } from "@/lib/motion";
import { SocialLinks } from "@/components/SocialLinks";

const tiles = [
  {
    to: routes.setlist,
    title: "Setlist",
    body: "Crowd-pleasing classics and singalong favorites.",
    icon: Music2,
  },
  {
    to: routes.shows,
    title: "Shows",
    body: "Upcoming dates and where to catch them live.",
    icon: Calendar,
  },
  {
    to: routes.contact,
    title: "Contact",
    body: "Book breweries, weddings, wineries, and private events.",
    icon: MapPin,
  },
  {
    to: routes.epk,
    title: "EPK",
    body: "Press kit, photos, and tech info for promoters.",
    icon: Guitar,
  },
] as const;

export function HomePage() {
  usePageTitle("Home");

  return (
    <div>
      <section className="relative overflow-hidden px-4 pb-20 pt-12 md:pb-28 md:pt-16">
        <div
          className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-ss-gold/10 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-ss-rust/15 blur-[110px]"
          aria-hidden
        />

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-ss-gold-muted"
              {...fadeUp}
            >
              {site.format} · {site.hometown}
            </motion.p>
            <motion.h1
              className="ss-display mt-4 text-5xl text-ss-cream sm:text-6xl md:text-7xl"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
            >
              {site.name}
            </motion.h1>
            <motion.p
              className="ss-accent mt-5 max-w-xl text-xl text-ss-cream-muted md:text-2xl"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              {site.tagline}
            </motion.p>
            <motion.p
              className="mt-5 max-w-xl text-base leading-relaxed text-ss-cream-muted md:text-lg"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.12 }}
            >
              {bio.short}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.16 }}
            >
              <Link to={routes.contact} className="ss-btn-primary">
                Book the duo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to={routes.setlist} className="ss-btn-ghost">
                See the setlist
              </Link>
            </motion.div>
            <motion.div
              className="mt-8"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              <SocialLinks />
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full max-w-md rounded-[2rem] border border-ss-border/80 bg-ss-elevated/70 p-8 shadow-2xl backdrop-blur-md md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ss-gold-muted">
                On the setlist
              </p>
              <h2 className="ss-display mt-2 text-2xl text-ss-cream md:text-3xl">
                Singalongs &amp; classics
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ss-cream-muted">
                From CCR and Tom Petty to Tyler Childers — familiar songs with rich harmonies
                and a laid-back, authentic vibe.
              </p>
              <ul className="mt-6 space-y-2">
                {setlistHighlights.slice(0, 5).map((song) => (
                  <li
                    key={song}
                    className="flex items-center gap-2 text-sm text-ss-cream"
                  >
                    <Music2 className="h-4 w-4 shrink-0 text-ss-gold" aria-hidden />
                    {song}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-xs text-ss-muted lg:text-left">
                <Link
                  to={routes.setlist}
                  className="font-medium text-ss-gold underline-offset-4 hover:text-ss-cream hover:underline"
                >
                  Full setlist highlights
                  <ArrowRight className="ml-0.5 inline-block h-3 w-3 align-middle" aria-hidden />
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-y border-ss-border/60 bg-ss-surface/35 px-4 py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_300px]">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ss-gold-muted">
              The duo
            </p>
            <h2 className="ss-section-heading mt-3">About Sawdust &amp; Strings</h2>
            {bio.long.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 leading-relaxed text-ss-cream-muted first:mt-6"
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
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ss-gold-muted">
                Lineup
              </h3>
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
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ss-gold-muted">
                Quick facts
              </h3>
              <ul className="mt-4 space-y-3">
                {quickFacts.map((fact) => (
                  <li
                    key={fact.label}
                    className="border-b border-ss-border/50 pb-3 last:border-0 last:pb-0"
                  >
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

        <motion.div className="mx-auto mt-14 max-w-6xl text-center" {...fadeUp}>
          <h3 className="text-lg font-semibold text-ss-cream">Influences &amp; style</h3>
          <p className="mx-auto mt-3 max-w-2xl text-ss-cream-muted">
            Classic rock legends to modern Americana — familiar songs with an authentic, laid-back
            feel.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {influences.map((artist) => (
              <li
                key={artist}
                className="rounded-full border border-ss-border bg-ss-elevated/80 px-4 py-2 text-sm font-medium text-ss-cream"
              >
                {artist}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="px-4 pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <motion.h2 className="ss-section-heading text-center" {...fadeUp}>
            Explore
          </motion.h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ss-cream-muted">
            Breweries, wineries, weddings, and listening rooms across {site.hometown}.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map((tile, idx) => (
              <motion.div
                key={tile.to}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.06, duration: 0.45 }}
              >
                <Link
                  to={tile.to}
                  className="group block h-full rounded-3xl border border-ss-border bg-ss-elevated/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-ss-gold/40"
                >
                  <tile.icon className="h-8 w-8 text-ss-gold" aria-hidden />
                  <h3 className="mt-4 font-display text-2xl text-ss-cream group-hover:text-ss-gold">
                    {tile.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ss-cream-muted">{tile.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ss-rust">
                    Explore
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
