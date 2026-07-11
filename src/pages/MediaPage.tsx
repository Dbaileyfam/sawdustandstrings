import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import { mediaPhotos } from "@/content/site";
import { usePageTitle } from "@/lib/usePageTitle";
import { fadeUp } from "@/lib/motion";
import { PageHero } from "@/components/PageHero";

export function MediaPage() {
  usePageTitle("Media");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? mediaPhotos[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? i : (i + 1) % mediaPhotos.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + mediaPhotos.length) % mediaPhotos.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Media"
        description="Studio shots of Sawdust & Strings — acoustic warmth, electric edge."
      />

      <section className="ss-page-shell">
        <div className="mx-auto max-w-6xl">
          <ul className="columns-1 gap-5 sm:columns-2">
            {mediaPhotos.map((photo, index) => (
              <motion.li
                key={photo.src}
                className="mb-5 break-inside-avoid"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
              >
                <figure className="ss-card overflow-hidden">
                  <button
                    type="button"
                    className="group block w-full text-left"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View ${photo.caption}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </button>
                  <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
                    <span className="text-sm text-ss-cream-muted">{photo.caption}</span>
                    <a
                      href={photo.src}
                      download={photo.downloadName}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-ss-gold transition hover:text-ss-cream"
                    >
                      <Download className="h-3.5 w-3.5" aria-hidden />
                      Download
                    </a>
                  </figcaption>
                </figure>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-ss-border bg-ss-surface text-ss-cream transition hover:text-ss-gold"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.figure
              className="relative max-h-[90vh] max-w-5xl"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              />
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-ss-cream">
                <span className="ss-accent text-lg">{active.caption}</span>
                <a
                  href={active.src}
                  download={active.downloadName}
                  className="ss-btn-ghost inline-flex text-sm"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download
                </a>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
