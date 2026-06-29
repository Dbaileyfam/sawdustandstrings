import { routes } from "@/lib/routes";

/** Central duo copy, links, and EPK content — update as you get assets from the band. */

export const site = {
  name: "Sawdust & Strings",
  tagline: "Timeless songs, honest harmonies, and a laid-back Americana vibe.",
  description:
    "An acoustic guitar duo covering classic rock, singalong favorites, and modern Americana — perfect for breweries, wineries, weddings, and live venues.",
  hometown: "Utah",
  genre: "Acoustic / Americana",
  formed: null as string | null,
  social: {
    instagram: null as string | null,
    youtube: null as string | null,
    facebook: null as string | null,
  },
  featuredVideoId: null as string | null,
  booking: {
    name: "Sawdust & Strings",
    email: null as string | null,
    phone: null as string | null,
  },
} as const;

export const navLinks = [
  { to: routes.home, label: "Home" },
  { to: routes.about, label: "About" },
  { to: routes.setlist, label: "Setlist" },
  { to: routes.shows, label: "Shows" },
  { to: routes.contact, label: "Contact" },
  { to: routes.epk, label: "EPK" },
] as const;

export const bio = {
  short:
    "From mellow listening rooms to lively patios and packed venues, this acoustic duo delivers a versatile performance that keeps audiences singing along all night long.",
  long: [
    "Bringing together timeless classics, singalong favorites, and a touch of modern Americana, Sawdust & Strings delivers an evening of music that feels both familiar and fresh. With rich vocal harmonies, acoustic guitars, and a laid-back, authentic vibe, they cover everything from classic rock legends like Pink Floyd, Elton John, Tom Petty, The Allman Brothers, and Creedence Clearwater Revival to newer favorites from artists like Tyler Childers and Goo Goo Dolls.",
    "Their setlist is packed with crowd-pleasing songs including Bad Moon Rising, Take It Easy, Country Roads, Wish You Were Here, Simple Man, Turn the Page, Heart of Gold, Rocket Man, and many more.",
    "Whether performing in breweries, wineries, restaurants, private events, weddings, or community festivals, they create the perfect soundtrack for audiences who appreciate great songs and genuine musicianship.",
  ],
  lineup: [
    { name: "TBD", role: "Acoustic guitar & vocals" },
    { name: "TBD", role: "Electric guitar & vocals" },
  ],
} as const;

export const setlistHighlights = [
  "Bad Moon Rising",
  "Take It Easy",
  "Country Roads",
  "Wish You Were Here",
  "Simple Man",
  "Turn the Page",
  "Heart of Gold",
  "Rocket Man",
] as const;

export const influences = [
  "Pink Floyd",
  "Elton John",
  "Tom Petty",
  "The Allman Brothers",
  "Creedence Clearwater Revival",
  "Tyler Childers",
  "Goo Goo Dolls",
] as const;

export const venues = [
  "Breweries & taprooms",
  "Wineries",
  "Restaurants & patios",
  "Private events",
  "Weddings",
  "Community festivals",
] as const;

export const quickFacts = [
  { label: "Format", value: "Acoustic guitar duo" },
  { label: "Style", value: "Classic rock & Americana" },
  { label: "Hometown", value: site.hometown },
  { label: "Set length", value: "2–3 hours (flexible)" },
] as const;

export const shows = [] as {
  date: string;
  dateLabel: string;
  venue: string;
  location: string;
  ticketUrl?: string;
}[];

export const pressPhotos = [] as {
  src: string;
  alt: string;
  downloadName: string;
  caption: string;
}[];

export const pressQuotes = [] as {
  quote: string;
  source: string;
  url?: string;
}[];

export const streamingLinks = [] as {
  label: string;
  href: string;
}[];

export const epkNav = [
  { id: "bio", label: "Bio" },
  { id: "setlist", label: "Setlist" },
  { id: "music", label: "Music" },
  { id: "press", label: "Press" },
  { id: "shows", label: "Shows" },
  { id: "tech", label: "Tech" },
  { id: "contact", label: "Book" },
] as const;
