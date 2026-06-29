import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Guitar, MapPin, Music2, Users } from "lucide-react";
import { bio, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { SocialLinks } from "@/components/SocialLinks";

const tiles = [
  {
    to: routes.about,
    title: "About",
    body: "Meet the duo, their sound, and who they cover.",
    icon: Users,
  },
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
            <Link to={routes.contact} className="ss-btn-primary">
              Book the duo
            </Link>
            <Link to={routes.setlist} className="ss-btn-ghost">
              See the setlist
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 flex justify-center">
            <SocialLinks size="lg" />
          </div>
        </div>
      </section>

      <section className="border-y border-ss-border bg-ss-parchment/70 px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-ss-brown">{bio.short}</p>
          <Link
            to={routes.about}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ss-rust transition hover:text-ss-brown"
          >
            Read our story
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="ss-section-heading text-center">Explore</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ss-muted">
            From mellow listening rooms to lively patios — find what you need.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <li key={tile.to}>
                  <Link
                    to={tile.to}
                    className="ss-card group flex h-full flex-col p-6 transition hover:border-ss-rust/30"
                  >
                    <Icon
                      className="h-8 w-8 text-ss-gold transition group-hover:text-ss-rust"
                      aria-hidden
                    />
                    <h3 className="mt-4 text-xl font-semibold text-ss-brown">{tile.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ss-muted">{tile.body}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ss-rust">
                      Visit page
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
