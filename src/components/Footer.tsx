import { Link } from "react-router-dom";
import { navLinks, site } from "@/content/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ss-border bg-ss-parchment/80">
      <div className="ss-ornament mx-auto max-w-6xl" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <p className="ss-display text-2xl text-ss-brown">{site.name}</p>
            <p className="mt-1 text-sm italic text-ss-muted">{site.tagline}</p>
            <p className="mt-3 text-xs text-ss-muted">
              &copy; {year} {site.name}. All rights reserved.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium text-ss-muted transition hover:text-ss-rust"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex justify-center sm:justify-end">
          <SocialLinks size="sm" />
        </div>
      </div>
    </footer>
  );
}
