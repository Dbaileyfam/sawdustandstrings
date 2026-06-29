import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { site, venues } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { fadeUp } from "@/lib/motion";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";

export function ContactPage() {
  usePageTitle("Contact");

  return (
    <>
      <PageHero
        eyebrow="Bookings"
        title="Book the duo"
        description="Breweries, wineries, weddings, private events, and community festivals."
      />

      <section className="ss-page-shell">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <motion.div className="ss-card p-8" {...fadeUp}>
            <h2 className="text-lg font-semibold text-ss-cream">Booking contact</h2>
            <p className="mt-2 text-sm text-ss-cream-muted">
              For festivals, venues, private events, and media inquiries.
            </p>
            <address className="mt-6 not-italic">
              <p className="text-lg font-semibold text-ss-cream">{site.booking.name}</p>
              {site.booking.email ? (
                <p className="mt-3">
                  <a href={`mailto:${site.booking.email}`} className="text-ss-gold hover:text-ss-cream">
                    {site.booking.email}
                  </a>
                </p>
              ) : null}
              {site.booking.phone ? (
                <p className="mt-2">
                  <a
                    href={`tel:${site.booking.phone.replace(/\D/g, "")}`}
                    className="text-ss-gold hover:text-ss-cream"
                  >
                    {site.booking.phone}
                  </a>
                </p>
              ) : null}
              {!site.booking.email && !site.booking.phone ? (
                <p className="mt-4 text-sm text-ss-cream-muted">
                  Add booking email and phone in{" "}
                  <code className="text-ss-cream">src/content/site.ts</code>.
                </p>
              ) : null}
            </address>
            <div className="mt-8 border-t border-ss-border/60 pt-6">
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.08 }}>
            <h2 className="ss-section-heading">Perfect for</h2>
            <ul className="mt-6 space-y-3">
              {venues.map((venue) => (
                <li key={venue} className="text-ss-cream-muted">
                  · {venue}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-ss-cream-muted">
              Promoters and press can find photos, tech details, and more in the{" "}
              <Link to={routes.epk} className="font-medium text-ss-gold hover:text-ss-cream">
                electronic press kit
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
