import { Link } from "react-router-dom";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ss-border bg-ss-parchment/80">
      <div className="ss-ornament mx-auto max-w-6xl" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="ss-display text-2xl text-ss-brown">{site.name}</p>
          <p className="mt-1 text-sm italic text-ss-muted">{site.tagline}</p>
          <p className="mt-3 text-xs text-ss-muted">
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:items-end">
          <SocialLinks size="sm" />
          <Link
            to={routes.epk}
            className="text-sm font-medium text-ss-rust transition hover:text-ss-brown"
          >
            Press &amp; booking (EPK) →
          </Link>
        </div>
      </div>
    </footer>
  );
}
