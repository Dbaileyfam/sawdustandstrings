import { Link } from "react-router-dom";
import { Guitar } from "lucide-react";
import { navLinks, site } from "@/content/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-ss-border/60 bg-ss-surface/80 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <Guitar className="h-4 w-4 text-ss-gold" aria-hidden />
              <span className="ss-display text-xl text-ss-cream">{site.name}</span>
            </p>
            <p className="mt-1 text-sm italic text-ss-cream-muted">{site.tagline}</p>
            <p className="mt-3 text-xs text-ss-muted">
              &copy; {year} {site.name}. All rights reserved.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-end">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ss-cream-muted transition hover:text-ss-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex justify-center md:justify-end">
          <SocialLinks size="sm" />
        </div>
      </div>
    </footer>
  );
}
