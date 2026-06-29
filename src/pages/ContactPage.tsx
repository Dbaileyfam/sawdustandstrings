import { Link } from "react-router-dom";
import { site, venues } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
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

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="ss-card p-8">
            <h2 className="text-lg font-semibold text-ss-brown">Booking contact</h2>
            <p className="mt-2 text-sm text-ss-muted">
              For festivals, venues, private events, and media inquiries.
            </p>
            <address className="mt-6 not-italic">
              <p className="text-lg font-semibold text-ss-brown">{site.booking.name}</p>
              {site.booking.email ? (
                <p className="mt-3">
                  <a href={`mailto:${site.booking.email}`} className="text-ss-rust hover:text-ss-brown">
                    {site.booking.email}
                  </a>
                </p>
              ) : null}
              {site.booking.phone ? (
                <p className="mt-2">
                  <a
                    href={`tel:${site.booking.phone.replace(/\D/g, "")}`}
                    className="text-ss-rust hover:text-ss-brown"
                  >
                    {site.booking.phone}
                  </a>
                </p>
              ) : null}
              {!site.booking.email && !site.booking.phone ? (
                <p className="mt-4 text-sm text-ss-muted">
                  Add booking email and phone in{" "}
                  <code className="text-ss-brown">src/content/site.ts</code>.
                </p>
              ) : null}
            </address>
            <div className="mt-8 border-t border-ss-border pt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h2 className="ss-section-heading">Perfect for</h2>
            <ul className="mt-6 space-y-3">
              {venues.map((venue) => (
                <li key={venue} className="text-ss-muted">
                  · {venue}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-ss-muted">
              Promoters and press can find photos, tech details, and more in the{" "}
              <Link to={routes.epk} className="font-medium text-ss-rust hover:text-ss-brown">
                electronic press kit
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
