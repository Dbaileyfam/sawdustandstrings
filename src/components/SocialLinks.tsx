import { Instagram, Youtube, Facebook } from "lucide-react";
import { site } from "@/content/site";

const icons = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
} as const;

type SocialKey = keyof typeof icons;

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const entries = (
    Object.entries(site.social) as [SocialKey, string | null][]
  ).filter(([, href]) => href);

  if (entries.length === 0) return null;

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {entries.map(([key, href]) => {
        const Icon = icons[key];
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        return (
          <li key={key}>
            <a
              href={href!}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name} on ${label}`}
              className={`inline-flex items-center justify-center rounded-sm border border-ss-border bg-ss-cream/80 text-ss-brown transition hover:border-ss-rust/50 hover:bg-ss-gold/15 hover:text-ss-rust ${sizeClasses[size]}`}
            >
              <Icon className={iconSizes[size]} aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
