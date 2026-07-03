import logoImage from "@/assets/sawdust-and-strings-logo.png";
import { routes } from "@/lib/routes";

/** Central duo copy, links, and EPK content — update as you get assets from the band. */

export const site = {
  name: "Sawdust & Strings",
  logo: {
    src: logoImage,
    alt: "Sawdust & Strings — handcrafted music, built to play",
    downloadName: "sawdust-and-strings-logo.png",
  },
  tagline: "Timeless songs, honest harmonies, and a laid-back Americana vibe.",
  format: "Acoustic & electric guitar duo",
  description:
    "A guitar duo blending acoustic warmth with electric edge — covering classic rock, singalong favorites, and modern Americana. Perfect for breweries, wineries, weddings, and live venues.",
  hometown: "Utah",
  genre: "Americana / Classic Rock",
  formed: null as string | null,
  social: {
    instagram: null as string | null,
    youtube: null as string | null,
    facebook: null as string | null,
  },
  featuredVideoId: null as string | null,
  booking: {
    representative: "801 Family Studios",
    email: "booking@801familystudios.com",
    phone: "(801) 918-6782",
    website: "https://www.801familystudios.com/",
  },
} as const;

export const navLinks = [
  { to: routes.home, label: "Home" },
  { to: routes.setlist, label: "Setlist" },
  { to: routes.shows, label: "Shows" },
  { to: routes.contact, label: "Contact" },
  { to: routes.epk, label: "EPK" },
] as const;

export const bio = {
  short:
    "From mellow listening rooms to lively patios and packed venues, Sawdust & Strings blends acoustic and electric guitar into a unique sound that keeps audiences singing along all night long.",
  long: [
    "Bringing together timeless classics, singalong favorites, and a touch of modern Americana, Sawdust & Strings delivers an evening of music that feels both familiar and fresh. With rich vocal harmonies, one player on acoustic and one on electric, they create a unique blend of warm and driving guitar — covering everything from classic rock legends like Pink Floyd, Elton John, Tom Petty, The Allman Brothers, and Creedence Clearwater Revival to newer favorites from artists like Tyler Childers and Goo Goo Dolls.",
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

/** Full repertoire — edit this list as the duo's setlist grows. */
export const setlistFull = [
  "Against the Wind",
  "Already Gone",
  "American Girl",
  "Bad Moon Rising",
  "Black Balloon",
  "Breathe",
  "Brown Eyed Girl",
  "Comfortably Numb",
  "Country Roads",
  "Crocodile Rock",
  "Daniel",
  "Desperado",
  "Don't Let the Sun Go Down on Me",
  "Down on the Corner",
  "Drift Away",
  "Feathered Indians",
  "Fortunate Son",
  "Free Fallin'",
  "Harvest Moon",
  "Have You Ever Seen the Rain",
  "Heart of Gold",
  "Hotel California",
  "I Won't Back Down",
  "Iris",
  "Jessica",
  "Knockin' on Heaven's Door",
  "Lady May",
  "Learning to Fly",
  "Listen to the Music",
  "Long Train Runnin'",
  "Lookin' Out My Back Door",
  "Lyin' Eyes",
  "Mary Jane's Last Dance",
  "Melissa",
  "Midnight Rider",
  "Money",
  "Name",
  "Night Moves",
  "Nose on the Grindstone",
  "Old Man",
  "Peaceful Easy Feeling",
  "Proud Mary",
  "Ramblin' Man",
  "Refugee",
  "Ring of Fire",
  "Rocket Man",
  "Simple Man",
  "Slide",
  "Soulshine",
  "Sweet Home Alabama",
  "Take It Easy",
  "The Weight",
  "Time",
  "Tiny Dancer",
  "Turn the Page",
  "Up Around the Bend",
  "Wagon Wheel",
  "Whipping Post",
  "Whitehouse Road",
  "Wish You Were Here",
  "Your Song",
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
  { label: "Format", value: site.format },
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

export const pressLogos = [
  {
    src: site.logo.src,
    alt: site.logo.alt,
    downloadName: site.logo.downloadName,
    caption: "Primary logo · 1024×1024 PNG",
  },
] as {
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
