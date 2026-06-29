import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-ss-border/60 px-4 py-14 sm:py-16">
      <motion.div className="mx-auto max-w-6xl text-center" {...fadeUp}>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ss-gold-muted">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="ss-display mt-3 text-4xl text-ss-cream sm:text-6xl">{title}</h1>
        {description ? (
          <p className="ss-accent mx-auto mt-4 max-w-2xl text-lg text-ss-cream-muted sm:text-xl">
            {description}
          </p>
        ) : null}
        <div className="ss-ornament mx-auto mt-8 max-w-xs" aria-hidden />
        {children ? <div className="mt-8">{children}</div> : null}
      </motion.div>
    </section>
  );
}
