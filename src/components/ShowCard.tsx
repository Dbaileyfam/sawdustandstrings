import type { Show } from "@/content/site";

type ShowCardProps = {
  show: Show;
  heading?: "h2" | "h3";
  past?: boolean;
};

export function ShowCard({ show, heading = "h3", past = false }: ShowCardProps) {
  const Heading = heading;
  const [month, day] = show.dateLabel.split(" ");

  return (
    <li className={`ss-card flex gap-5 p-5 ${past ? "opacity-80" : ""}`}>
      <time
        dateTime={show.date}
        className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-ss-gold/15 text-ss-gold"
      >
        <span className="text-xs font-bold uppercase">{month}</span>
        <span className="ss-display text-2xl leading-none">{day?.replace(",", "")}</span>
      </time>
      <div>
        <Heading className="text-lg font-semibold text-ss-cream">{show.venue}</Heading>
        <p className="text-sm text-ss-cream-muted">{show.location}</p>
        {show.ticketUrl && !past ? (
          <a
            href={show.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-ss-gold hover:text-ss-cream"
          >
            Tickets →
          </a>
        ) : null}
      </div>
    </li>
  );
}

export function ShowGrid({
  items,
  heading,
  past = false,
}: {
  items: Show[];
  heading?: "h2" | "h3";
  past?: boolean;
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((show) => (
        <ShowCard
          key={`${show.date}-${show.venue}`}
          show={show}
          heading={heading}
          past={past}
        />
      ))}
    </ul>
  );
}
