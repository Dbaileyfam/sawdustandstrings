import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { shows } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { fadeUp } from "@/lib/motion";
import { PageHero } from "@/components/PageHero";

export function ShowsPage() {
  usePageTitle("Shows");

  return (
    <>
      <PageHero
        eyebrow="Live music"
        title="Upcoming shows"
        description="Catch Sawdust & Strings at breweries, wineries, festivals, and more."
      />

      <section className="ss-page-shell">
        <div className="mx-auto max-w-6xl">
          {shows.length > 0 ? (
            <ul className="grid gap-4 sm:grid-cols-2">
              {shows.map((show) => (
                <li key={`${show.date}-${show.venue}`} className="ss-card flex gap-5 p-5">
                  <time
                    dateTime={show.date}
                    className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-ss-gold/15 text-ss-gold"
                  >
                    <span className="text-xs font-bold uppercase">
                      {show.dateLabel.split(" ")[0]}
                    </span>
                    <span className="ss-display text-2xl leading-none">
                      {show.dateLabel.split(" ")[1]?.replace(",", "")}
                    </span>
                  </time>
                  <div>
                    <h2 className="text-lg font-semibold text-ss-cream">{show.venue}</h2>
                    <p className="text-sm text-ss-cream-muted">{show.location}</p>
                    {show.ticketUrl ? (
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm font-medium text-ss-gold hover:text-ss-cream"
                      >
                        Tickets →
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <motion.div className="ss-card p-10 text-center" {...fadeUp}>
              <Calendar className="mx-auto h-12 w-12 text-ss-gold" aria-hidden />
              <p className="mt-4 text-lg text-ss-cream">New dates coming soon.</p>
              <p className="mt-2 text-sm text-ss-cream-muted">
                Check back here or reach out to book a private event.
              </p>
              <Link to={routes.contact} className="ss-btn-primary mt-8 inline-flex">
                Book the duo
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
