import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Guitar, Menu, X } from "lucide-react";
import { navLinks, site } from "@/content/site";
import { routes } from "@/lib/routes";

function navClass(isActive: boolean) {
  return [
    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-ss-gold/15 text-ss-gold"
      : "text-ss-cream-muted hover:bg-ss-gold-soft hover:text-ss-cream",
  ].join(" ");
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ss-border/50 bg-ss-bg/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link
          to={routes.home}
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-ss-wood to-ss-bg ring-1 ring-ss-gold/30 transition group-hover:scale-105">
            <Guitar className="h-5 w-5 text-ss-gold" aria-hidden />
          </span>
          <span className="min-w-0 text-left">
            <span className="ss-display block truncate text-lg text-ss-cream transition group-hover:text-ss-gold sm:text-xl">
              {site.name}
            </span>
            <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ss-muted sm:block">
              {site.format} · {site.hometown}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === routes.home}
              className={({ isActive }) => navClass(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-ss-border bg-ss-surface text-ss-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-ss-border/60 bg-ss-surface md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === routes.home}
                  className={({ isActive }) => `${navClass(isActive)} w-full text-center`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
