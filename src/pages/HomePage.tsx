import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Camera, Guitar, MapPin, Music2 } from "lucide-react";
import { bio, influences, mediaPhotos, quickFacts, setlistHighlights, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { fadeUp } from "@/lib/motion";
import { SocialLinks } from "@/components/SocialLinks";

const promoPhoto = mediaPhotos[0];
const duoPhoto = mediaPhotos[1];

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
    to: routes.media,
    title: "Media",
    body: "Studio photos of the duo in action.",
    icon: Camera,
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
      <section className="relative overflow-hidden px-4 pb-12 pt-8 md:pb-16 md:pt-12">
        <div
          className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-ss-gold/10 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-ss-rust/15 blur-[110px]"
          aria-hidden
        />

        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-ss-gold-muted"
              {...fadeUp}
            >
              {site.format} · {site.hometown}
            </motion.p>
            <motion.div
              className="mt-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="sr-only">{site.name}</h1>
              <img
                src={site.logo.src}
                alt={site.logo.alt}
                width={1024}
                height={1024}
                className="w-full max-w-[200px] rounded-full drop-shadow-2xl sm:max-w-[240px] md:max-w-[280px]"
                fetchPriority="high"
              />
            </motion.div>
            <motion.p
              className="ss-accent mt-4 max-w-xl text-lg text-ss-cream-muted md:text-xl"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              {site.tagline}
            </motion.p>
            <motion.p
              className="mt-3 max-w-xl text-sm leading-relaxed text-ss-cream-muted md:text-base"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.12 }}
            >
              {bio.short}
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
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
              className="mt-5"
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
            <div className="w-full max-w-md rounded-3xl border border-ss-border/80 bg-ss-elevated/70 p-6 shadow-2xl backdrop-blur-md md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ss-gold-muted">
                On the setlist
              </p>
              <h2 className="ss-display mt-2 text-2xl text-ss-cream">
                Singalongs &amp; classics
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ss-cream-muted">
                From CCR and Tom Petty to Tyler Childers — familiar songs with rich harmonies
                and a laid-back, authentic vibe.
              </p>
              <ul className="mt-4 space-y-1.5">
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
              <p className="mt-3 text-center text-xs text-ss-muted lg:text-left">
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
        className="scroll-mt-24 border-y border-ss-border/60 bg-ss-surface/35 px-4 py-10 md:py-12"
      >
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ss-gold-muted">
              The duo
            </p>
            <h2 className="ss-section-heading mt-2">About Sawdust &amp; Strings</h2>
            {bio.long.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-3 text-sm leading-relaxed text-ss-cream-muted first:mt-4 md:text-[0.95rem]"
              >
                {paragraph}
              </p>
            ))}
            <Link to={routes.contact} className="ss-btn-primary mt-6 inline-flex">
              Book the duo
            </Link>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ss-gold-muted">
                Influences &amp; style
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {influences.map((artist) => (
                  <li
                    key={artist}
                    className="rounded-full border border-ss-border bg-ss-elevated/80 px-3 py-1.5 text-xs font-medium text-ss-cream"
                  >
                    {artist}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="flex flex-col items-stretch gap-4 sm:flex-row">
            <div className="flex w-full min-w-0 max-w-[15rem] flex-col gap-4 sm:shrink-0">
              <motion.div className="ss-card p-4" {...fadeUp} transition={{ delay: 0.08 }}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-ss-gold-muted">
                  Lineup
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {bio.lineup.map((member) => (
                    <li
                      key={member.role}
                      className="flex flex-col gap-0.5 border-b border-ss-border/50 pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="font-medium text-ss-cream">{member.name}</span>
                      <span className="text-sm text-ss-cream-muted">{member.role}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="ss-card p-4" {...fadeUp} transition={{ delay: 0.12 }}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-ss-gold-muted">
                  Quick facts
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {quickFacts.map((fact) => (
                    <li
                      key={fact.label}
                      className="border-b border-ss-border/50 pb-2.5 last:border-0 last:pb-0"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-ss-gold-muted">
                        {fact.label}
                      </p>
                      <p className="mt-0.5 text-sm text-ss-cream">{fact.value}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.figure
              className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-ss-border/80 bg-ss-elevated/40 shadow-xl"
              {...fadeUp}
              transition={{ delay: 0.1 }}
            >
              <img
                src={promoPhoto.src}
                alt={promoPhoto.alt}
                className="h-full w-full object-contain object-center"
                loading="lazy"
              />
            </motion.figure>
          </div>
        </div>

        <motion.figure
          className="mx-auto mt-8 max-w-3xl md:mt-10"
          {...fadeUp}
          transition={{ delay: 0.14 }}
        >
          <img
            src={duoPhoto.src}
            alt={duoPhoto.alt}
            className="mx-auto h-auto w-full max-w-2xl object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </motion.figure>
      </section>

      <section className="px-4 pb-12 pt-10 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2 className="ss-section-heading text-center" {...fadeUp}>
            Explore
          </motion.h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-ss-cream-muted">
            Breweries, wineries, weddings, and listening rooms across {site.hometown}.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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
                  className="group block h-full rounded-2xl border border-ss-border bg-ss-elevated/80 p-4 shadow-lg transition hover:-translate-y-1 hover:border-ss-gold/40"
                >
                  <tile.icon className="h-6 w-6 text-ss-gold" aria-hidden />
                  <h3 className="mt-3 font-display text-xl text-ss-cream group-hover:text-ss-gold">
                    {tile.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ss-cream-muted">{tile.body}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ss-rust">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
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
