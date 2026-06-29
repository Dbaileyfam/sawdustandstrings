import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, site } from "@/content/site";
import { routes } from "@/lib/routes";

function navClass(isActive: boolean) {
  return isActive
    ? "font-semibold text-ss-rust"
    : "font-medium text-ss-muted transition hover:text-ss-brown";
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ss-border bg-ss-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to={routes.home} className="group min-w-0">
          <span className="ss-display block truncate text-xl text-ss-brown transition group-hover:text-ss-rust sm:text-2xl">
            {site.name}
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-ss-muted sm:block">
            Acoustic Duo · {site.hometown}
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:gap-5 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === routes.home}
              className={({ isActive }) => `text-xs uppercase tracking-wide lg:text-sm ${navClass(isActive)}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-ss-border text-ss-brown md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav
          className="border-t border-ss-border bg-ss-parchment px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === routes.home}
                  className={({ isActive }) =>
                    `block py-2 text-sm uppercase tracking-wide ${navClass(isActive)}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
