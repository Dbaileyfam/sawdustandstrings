import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Music2 } from "lucide-react";
import { setlistHighlights, venues } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
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

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {setlistHighlights.map((song) => (
              <li
                key={song}
                className="ss-card flex items-center gap-3 px-4 py-3 text-sm font-medium text-ss-brown"
              >
                <Music2 className="h-4 w-4 shrink-0 text-ss-gold" aria-hidden />
                {song}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm italic text-ss-muted">
            …and many more. Full repertoire available on request.
          </p>
        </div>
      </section>

      <section className="border-t border-ss-border bg-ss-parchment/70 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="ss-section-heading text-center">Where we play</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ss-muted">
            From mellow listening rooms to lively patios and packed venues — the perfect soundtrack
            for any occasion.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {venues.map((venue) => (
              <li key={venue} className="ss-card flex items-center gap-4 p-5">
                <MapPin className="h-5 w-5 shrink-0 text-ss-gold" aria-hidden />
                <span className="font-medium text-ss-brown">{venue}</span>
              </li>
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
