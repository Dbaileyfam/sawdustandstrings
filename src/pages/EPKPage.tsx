import { usePageTitle } from "@/lib/usePageTitle";
import { Music2 } from "lucide-react";
import {
  bio,
  epkNav,
  influences,
  pressPhotos,
  pressQuotes,
  quickFacts,
  setlistHighlights,
  shows,
  site,
  streamingLinks,
  venues,
} from "@/content/site";
import { SocialLinks } from "@/components/SocialLinks";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function EPKPage() {
  usePageTitle("Electronic Press Kit");

  return (
    <>
      <section className="border-b border-ss-border px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ss-rust">
            Electronic Press Kit
          </p>
          <h1 className="ss-display mt-3 text-5xl text-ss-brown sm:text-7xl">{site.name}</h1>
          <p className="ss-accent mx-auto mt-4 max-w-2xl text-xl text-ss-muted">{site.tagline}</p>
          <div className="ss-ornament mx-auto mt-8 max-w-xs" aria-hidden />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button type="button" className="ss-btn-primary" onClick={() => scrollToSection("contact")}>
              Book the duo
            </button>
            <button type="button" className="ss-btn-ghost" onClick={() => scrollToSection("press")}>
              Press photos
            </button>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-[73px] z-40 border-b border-ss-border bg-ss-cream/95 backdrop-blur-sm"
        aria-label="EPK sections"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3">
          {epkNav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="shrink-0 rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ss-muted transition hover:bg-ss-parchment hover:text-ss-brown"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="border-b border-ss-border px-4 py-10" aria-label="Quick facts">
        <div className="mx-auto max-w-6xl">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <li key={fact.label} className="ss-card p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-ss-rust">
                  {fact.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-ss-brown">{fact.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="bio" className="scroll-mt-36 px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="ss-section-heading">About the duo</h2>
            <p className="mt-4 text-lg leading-relaxed text-ss-brown">{bio.short}</p>
            {bio.long.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 leading-relaxed text-ss-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="ss-card h-fit p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ss-rust">Lineup</h3>
            <ul className="mt-4 space-y-3">
              {bio.lineup.map((member) => (
                <li
                  key={member.role}
                  className="flex items-baseline justify-between gap-3 border-b border-ss-border/50 pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-ss-brown">{member.name}</span>
                  <span className="text-right text-sm text-ss-muted">{member.role}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-ss-rust">
              Influences
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {influences.map((artist) => (
                <li
                  key={artist}
                  className="rounded-sm border border-ss-border bg-ss-cream/80 px-2 py-1 text-xs text-ss-muted"
                >
                  {artist}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section
        id="setlist"
        className="scroll-mt-36 border-y border-ss-border bg-ss-parchment/70 px-4 py-16"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="ss-section-heading">Sample setlist</h2>
          <p className="mt-2 text-ss-muted">
            A selection of crowd favorites — full repertoire available on request.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
          <p className="mt-6 text-sm italic text-ss-muted">…and many more.</p>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-ss-brown">Ideal venues</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {venues.map((venue) => (
                <li key={venue} className="text-sm text-ss-muted">
                  · {venue}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="music" className="scroll-mt-36 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="ss-section-heading">Music &amp; media</h2>
          <p className="mt-2 text-ss-muted">Listen and follow across platforms.</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="ss-card overflow-hidden">
              {site.featuredVideoId ? (
                <div className="aspect-video">
                  <iframe
                    title={`${site.name} featured video`}
                    src={`https://www.youtube.com/embed/${site.featuredVideoId}`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex aspect-video flex-col items-center justify-center gap-3 p-8 text-center">
                  <Music2 className="h-12 w-12 text-ss-gold" aria-hidden />
                  <p className="text-ss-brown">Performance videos coming soon.</p>
                  <p className="text-sm text-ss-muted">
                    Add a YouTube video ID in{" "}
                    <code className="text-ss-brown">src/content/site.ts</code>.
                  </p>
                </div>
              )}
            </div>

            <div className="ss-card p-6">
              <h3 className="text-lg font-semibold text-ss-brown">Listen &amp; follow</h3>
              {streamingLinks.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {streamingLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-ss-rust transition hover:text-ss-brown"
                      >
                        {link.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-ss-muted">
                  Add streaming links in{" "}
                  <code className="text-ss-brown">src/content/site.ts</code> when available.
                </p>
              )}
              <div className="mt-6 border-t border-ss-border pt-6">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="press"
        className="scroll-mt-36 border-y border-ss-border bg-ss-parchment/70 px-4 py-16"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="ss-section-heading">Press</h2>

          {pressQuotes.length > 0 ? (
            <div className="mt-8 space-y-6">
              {pressQuotes.map((item) => (
                <blockquote key={item.source} className="ss-card border-l-4 border-l-ss-gold p-6">
                  <p className="text-lg italic leading-relaxed text-ss-brown">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm text-ss-muted">
                    —{" "}
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ss-rust hover:text-ss-brown"
                      >
                        {item.source}
                      </a>
                    ) : (
                      item.source
                    )}
                  </footer>
                </blockquote>
              ))}
            </div>
          ) : null}

          <div className="ss-card mt-8 p-6">
            <h3 className="text-lg font-semibold text-ss-brown">Press kit assets</h3>
            <p className="mt-2 text-sm text-ss-muted">
              High-res photos and logos for promoters and media. Click to download.
            </p>

            {pressPhotos.length > 0 ? (
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pressPhotos.map((photo) => (
                  <li key={photo.src}>
                    <figure className="overflow-hidden rounded-sm border border-ss-border">
                      <a href={photo.src} download={photo.downloadName}>
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="aspect-[4/3] w-full object-cover transition hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </a>
                      <figcaption className="bg-ss-cream/80 px-3 py-2 text-sm text-ss-muted">
                        {photo.caption}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 rounded-sm border border-dashed border-ss-border bg-ss-cream/50 p-10 text-center">
                <p className="text-ss-brown">Press photos coming soon.</p>
                <p className="mt-2 text-sm text-ss-muted">
                  Drop images in <code className="text-ss-brown">public/assets/press/</code> and
                  list them in <code className="text-ss-brown">src/content/site.ts</code>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="shows" className="scroll-mt-36 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="ss-section-heading">Upcoming shows</h2>
          {shows.length > 0 ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {shows.map((show) => (
                <li key={`${show.date}-${show.venue}`} className="ss-card flex gap-5 p-5">
                  <time
                    dateTime={show.date}
                    className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-sm bg-ss-gold/15 text-ss-rust"
                  >
                    <span className="text-xs font-bold uppercase">
                      {show.dateLabel.split(" ")[0]}
                    </span>
                    <span className="ss-display text-2xl leading-none">
                      {show.dateLabel.split(" ")[1]?.replace(",", "")}
                    </span>
                  </time>
                  <div>
                    <h3 className="text-lg font-semibold text-ss-brown">{show.venue}</h3>
                    <p className="text-sm text-ss-muted">{show.location}</p>
                    {show.ticketUrl ? (
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm font-medium text-ss-rust hover:text-ss-brown"
                      >
                        Tickets →
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-ss-muted">
              No dates listed yet — contact the duo to book a show.
            </p>
          )}
        </div>
      </section>

      <section
        id="tech"
        className="scroll-mt-36 border-y border-ss-border bg-ss-parchment/70 px-4 py-16"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="ss-section-heading">Stage plot &amp; input list</h2>
          <p className="mt-2 text-ss-muted">Technical details for sound engineers and promoters.</p>

          <div className="mt-8 space-y-4">
            <details className="ss-card group p-6">
              <summary className="cursor-pointer list-none font-semibold text-ss-brown marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  Stage plot
                  <span className="text-sm font-normal text-ss-muted group-open:hidden">
                    Show details
                  </span>
                </span>
              </summary>
              <div className="mt-4 rounded-sm border border-dashed border-ss-border bg-ss-cream/50 p-10 text-center text-sm text-ss-muted">
                Acoustic duo — two vocal mics, two DI or mic&apos;d guitars. Stage plot image can be
                added to <code className="text-ss-brown">public/assets/</code>.
              </div>
            </details>

            <details className="ss-card group p-6">
              <summary className="cursor-pointer list-none font-semibold text-ss-brown marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  Input list
                  <span className="text-sm font-normal text-ss-muted group-open:hidden">
                    Show channels
                  </span>
                </span>
              </summary>
              <ul className="mt-4 space-y-2 text-sm text-ss-muted">
                <li>· Vocal 1 (acoustic guitar &amp; vocals)</li>
                <li>· Vocal 2 (electric guitar &amp; vocals)</li>
                <li>· Acoustic guitar DI or mic</li>
                <li>· Electric guitar amp mic or DI</li>
              </ul>
            </details>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-36 px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="ss-section-heading">Booking &amp; press contact</h2>
          <p className="mt-4 text-ss-muted">
            For breweries, wineries, weddings, private events, and media inquiries.
          </p>
          <address className="ss-card mt-8 not-italic">
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
        </div>
      </section>
    </>
  );
}
