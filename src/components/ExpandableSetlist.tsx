import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Music2 } from "lucide-react";

type ExpandableSetlistProps = {
  previewSongs: readonly string[];
  fullSongs: readonly string[];
  className?: string;
};

export function ExpandableSetlist({
  previewSongs,
  fullSongs,
  className = "",
}: ExpandableSetlistProps) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const songs = expanded ? fullSongs : previewSongs;
  const hasMore = fullSongs.length > previewSongs.length;

  return (
    <div className={className}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.ul
          key={expanded ? "full" : "preview"}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          id={panelId}
        >
          {songs.map((song) => (
            <li
              key={song}
              className="ss-card flex items-center gap-3 px-4 py-3 text-sm font-medium text-ss-cream"
            >
              <Music2 className="h-4 w-4 shrink-0 text-ss-gold" aria-hidden />
              {song}
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>

      {hasMore ? (
        <div className="mt-8 text-center">
          <button
            type="button"
            className="ss-btn-ghost"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((open) => !open)}
          >
            {expanded
              ? "Show highlights only"
              : `View full setlist (${fullSongs.length} songs)`}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
        </div>
      ) : null}
    </div>
  );
}
