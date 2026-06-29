import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Guitar, MapPin, Music2 } from "lucide-react";
import {
  bio,
  influences,
  setlistHighlights,
  shows,
  site,
  venues,
} from "@/content/site";
import { routes } from "@/lib/routes";
import { SocialLinks } from "@/components/SocialLinks";

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ss-rust">
            Acoustic Guitar Duo
          </p>
          <h1 className="ss-display mt-4 text-5xl text-ss-brown sm:text-7xl md:text-8xl">
            {site.name}
          </h1>
          <p className="ss-accent mx-auto mt-5 max-w-2xl text-xl text-ss-muted sm:text-2xl">
            {site.tagline}
          </p>
          <div className="ss-ornament mx-auto mt-8 max-w-xs" aria-hidden />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to={routes.epk} className="ss-btn-primary">
              <Music2 className="h-4 w-4" aria-hidden />
              Press kit &amp; booking
            </Link>
            <a href="#setlist" className="ss-btn-ghost">
              See the setlist
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <div className="mt-10 flex justify-center">
            <SocialLinks size="lg" />
          </div>
        </div>
      </section>

      <section className="border-y border-ss-border bg-ss-parchment/70 px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="ss-section-heading">About</h2>
            <p className="mt-4 text-lg leading-relaxed text-ss-brown">{bio.short}</p>
            <p className="mt-4 leading-relaxed text-ss-muted">{bio.long[0]}</p>
            <Link
              to={routes.epk}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ss-rust transition hover:text-ss-brown"
            >
              Full bio &amp; press kit
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="ss-card ss-vintage-border overflow-hidden p-8">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <Guitar className="h-16 w-16 text-ss-gold" aria-hidden />
              <p className="ss-accent text-xl text-ss-brown">
                Rich vocal harmonies &amp; acoustic guitars
              </p>
              <p className="text-sm leading-relaxed text-ss-muted">
                Classic rock legends to modern Americana — familiar songs with an authentic,
                laid-back feel.
              </p>
              <ul className="mt-2 flex flex-wrap justify-center gap-2">
                {influences.slice(0, 5).map((artist) => (
                  <li
                    key={artist}
                    className="rounded-sm border border-ss-border bg-ss-cream/80 px-3 py-1 text-xs font-medium text-ss-muted"
                  >
                    {artist}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="setlist" className="scroll-mt-24 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="ss-section-heading">Setlist highlights</h2>
            <p className="mx-auto mt-3 max-w-2xl text-ss-muted">
              Crowd-pleasing singalongs from CCR to Tyler Childers — and plenty more where these
              came from.
            </p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
            …and many more. Full repertoire available in the press kit.
          </p>
        </div>
      </section>

      <section className="border-y border-ss-border bg-ss-parchment/70 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="ss-section-heading text-center">Where we play</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ss-muted">
            From mellow listening rooms to lively patios and packed venues — the perfect soundtrack
            for any occasion.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {venues.map((venue) => (
              <li
                key={venue}
                className="ss-card flex items-center gap-4 p-5"
              >
                <MapPin className="h-5 w-5 shrink-0 text-ss-gold" aria-hidden />
                <span className="font-medium text-ss-brown">{venue}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="ss-section-heading">Shows</h2>
              <p className="mt-2 text-ss-muted">Catch Sawdust &amp; Strings live.</p>
            </div>
          </div>

          {shows.length > 0 ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {shows.map((show) => (
                <li key={`${show.date}-${show.venue}`} className="ss-card flex gap-4 p-5">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-sm bg-ss-gold/15 text-ss-rust">
                    <Calendar className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ss-rust">
                      {show.dateLabel}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-ss-brown">{show.venue}</h3>
                    <p className="text-sm text-ss-muted">{show.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="ss-card mt-8 p-8 text-center">
              <Calendar className="mx-auto h-10 w-10 text-ss-gold" aria-hidden />
              <p className="mt-4 text-lg text-ss-brown">New dates coming soon.</p>
              <p className="mt-2 text-sm text-ss-muted">
                Check back here or reach out to book a private event.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-ss-border bg-ss-parchment/70 px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="ss-section-heading">Book the duo</h2>
          <p className="mt-4 text-ss-muted">
            Breweries, wineries, weddings, and private events — promoters can find everything in
            the EPK.
          </p>
          <Link to={routes.epk} className="ss-btn-primary mt-8">
            Open electronic press kit
          </Link>
        </div>
      </section>
    </>
  );
}
