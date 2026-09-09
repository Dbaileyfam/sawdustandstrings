import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { partitionShows } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { fadeUp } from "@/lib/motion";
import { PageHero } from "@/components/PageHero";
import { ShowGrid } from "@/components/ShowCard";

export function ShowsPage() {
  usePageTitle("Shows");
  const { upcoming, past } = partitionShows();

  return (
    <>
      <PageHero
        eyebrow="Live music"
        title="Shows"
        description="Catch Sawdust & Strings at breweries, wineries, festivals, and more."
      />

      <section className="ss-page-shell">
        <div className="mx-auto max-w-6xl space-y-14">
          <div>
            <h2 className="ss-section-heading">Upcoming shows</h2>
            {upcoming.length > 0 ? (
              <div className="mt-8">
                <ShowGrid items={upcoming} heading="h3" />
              </div>
            ) : (
              <motion.div className="ss-card mt-8 p-10 text-center" {...fadeUp}>
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

          {past.length > 0 ? (
            <div>
              <h2 className="ss-section-heading">Past shows</h2>
              <p className="mt-2 text-ss-cream-muted">Recent dates Sawdust & Strings has played.</p>
              <div className="mt-8">
                <ShowGrid items={past} heading="h3" past />
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
