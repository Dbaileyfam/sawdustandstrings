import logoImage from "@/assets/sawdust-and-strings-logo.png";
import stagePlotImage from "@/assets/stage-plot.png";
import promoPortrait from "@/assets/media/promo-portrait.png";
import duoPerformance from "@/assets/media/duo-performance.png";
import studioPortrait from "@/assets/media/studio-portrait.jpg";
import studioDuo from "@/assets/media/studio-duo.jpg";
import studioRehearsal from "@/assets/media/studio-rehearsal.jpg";
import studioSession from "@/assets/media/studio-session.jpg";
import betterDaysVideo from "@/assets/media/better-days.mp4";
import betterDaysPoster from "@/assets/media/better-days-poster.jpg";
import liveOutdoorsVideo from "@/assets/media/live-outdoors.mp4";
import liveOutdoorsPoster from "@/assets/media/live-outdoors-poster.jpg";
import liveDlcQuartersVideo from "@/assets/media/live-dlc-quarters.mp4";
import liveDlcQuartersPoster from "@/assets/media/live-dlc-quarters-poster.jpg";
import liveDlcQuarters2Video from "@/assets/media/live-dlc-quarters-2.mp4";
import liveDlcQuarters2Poster from "@/assets/media/live-dlc-quarters-2-poster.jpg";
import liveDlcQuarters3Video from "@/assets/media/live-dlc-quarters-3.mp4";
import liveDlcQuarters3Poster from "@/assets/media/live-dlc-quarters-3-poster.jpg";
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
  featuredVideo: {
    src: betterDaysVideo,
    poster: betterDaysPoster,
    title: "Better Days",
    alt: "Sawdust & Strings performing Better Days in the studio — electric and acoustic guitar.",
    downloadName: "sawdust-and-strings-better-days.mp4",
  },
  booking: {
    representative: "Rick Kondoff",
    email: "Rickkondoff@gmail.com",
    phone: "(614) 563-5792",
    website: null as string | null,
  },
} as const;

export const navLinks = [
  { to: routes.home, label: "Home" },
  { to: routes.setlist, label: "Setlist" },
  { to: routes.shows, label: "Shows" },
  { to: routes.media, label: "Media" },
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
    { name: "Pride Alldredge", role: "Acoustic guitar & vocals" },
    { name: "Rick Kondoff", role: "Electric guitar & vocals" },
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
  "Give Me Three Steps",
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

export type Show = {
  date: string;
  dateLabel: string;
  venue: string;
  location: string;
  ticketUrl?: string;
  /** Local 24-hour end time (`HH:mm`). After this, a same-day show moves to Past. */
  endTime?: string;
};

export const shows: Show[] = [
  {
    date: "2026-08-08",
    dateLabel: "Aug 8",
    venue: "Daybreak Farmers Market",
    location: "11274 Kestrel Rise, South Jordan UT · 11:00 AM – 1:00 PM",
    endTime: "13:00",
  },
  {
    date: "2026-08-15",
    dateLabel: "Aug 15",
    venue: "You Know You're from Ogden If Festival",
    location: "Ogden · 1:00 – 2:00 PM",
    endTime: "14:00",
  },
  {
    date: "2026-08-29",
    dateLabel: "Aug 29",
    venue: "Daybreak Farmers Market",
    location: "11274 Kestrel Rise, South Jordan UT · 11:00 AM – 1:00 PM",
    endTime: "13:00",
  },
  {
    date: "2026-09-08",
    dateLabel: "Sep 8",
    venue: "The Cove Night Market",
    location: "6550 W. Lake Ave, South Jordan UT · 5:00 – 5:30 PM",
    endTime: "17:30",
  },
  {
    date: "2026-09-11",
    dateLabel: "Sep 11",
    venue: "DLC at Quarters",
    location: "8:00 – 9:30 PM",
    endTime: "21:30",
  },
  {
    date: "2026-09-22",
    dateLabel: "Sep 22",
    venue: "The Cove Night Market",
    location: "6550 W. Lake Ave, South Jordan UT · 7:10 – 9:00 PM",
    endTime: "21:00",
  },
];

function localTodayISO(now = new Date()) {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function localMinutes(now: Date) {
  return now.getHours() * 60 + now.getMinutes();
}

function endTimeMinutes(endTime: string) {
  const [hours, minutes] = endTime.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return null;
  return hours * 60 + minutes;
}

function isUpcomingShow(show: Show, today: string, now: Date) {
  if (show.date > today) return true;
  if (show.date < today) return false;
  if (!show.endTime) return true;
  const endMinutes = endTimeMinutes(show.endTime);
  return endMinutes == null || localMinutes(now) <= endMinutes;
}

/** Upcoming through the set; after the end time (or the calendar day), dates move to Past. */
export function partitionShows(allShows: Show[] = shows, now = new Date()) {
  const today = localTodayISO(now);
  const upcoming = allShows
    .filter((show) => isUpcomingShow(show, today, now))
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = allShows
    .filter((show) => !isUpcomingShow(show, today, now))
    .sort((a, b) => b.date.localeCompare(a.date));
  return { upcoming, past };
}

export const aboutDuoPhoto = {
  src: duoPerformance,
  alt: "Sawdust & Strings performing — Pride Alldredge on acoustic guitar and Rick Kondoff on electric guitar, seated on tree stumps.",
} as const;

export const mediaVideos = [
  {
    src: liveDlcQuarters3Video,
    poster: liveDlcQuarters3Poster,
    title: "Live at DLC at Quarters",
    alt: "Sawdust & Strings performing live at DLC at Quarters — Rick Kondoff on electric guitar and Pride Alldredge on acoustic guitar.",
    downloadName: "sawdust-and-strings-live-dlc-quarters-3.mp4",
    portrait: true,
  },
  {
    src: liveDlcQuarters2Video,
    poster: liveDlcQuarters2Poster,
    title: "Live at DLC at Quarters",
    alt: "Sawdust & Strings performing live at DLC at Quarters — Rick Kondoff on electric guitar and Pride Alldredge on acoustic guitar.",
    downloadName: "sawdust-and-strings-live-dlc-quarters-2.mp4",
    portrait: true,
  },
  {
    src: liveDlcQuartersVideo,
    poster: liveDlcQuartersPoster,
    title: "Give Me Three Steps",
    alt: "Sawdust & Strings performing Lynyrd Skynyrd's Give Me Three Steps live at DLC at Quarters — Rick Kondoff on electric guitar and Pride Alldredge on acoustic guitar.",
    downloadName: "sawdust-and-strings-live-dlc-quarters.mp4",
    portrait: true,
  },
  {
    src: liveOutdoorsVideo,
    poster: liveOutdoorsPoster,
    title: "Live outdoors",
    alt: "Sawdust & Strings performing live outdoors — acoustic and electric guitar under a canopy.",
    downloadName: "sawdust-and-strings-live-outdoors.mp4",
    portrait: false,
  },
  {
    src: betterDaysVideo,
    poster: betterDaysPoster,
    title: "Better Days",
    alt: "Sawdust & Strings performing Better Days in the studio — electric and acoustic guitar.",
    downloadName: "sawdust-and-strings-better-days.mp4",
    portrait: false,
  },
] as const;

export const mediaPhotos = [
  {
    src: promoPortrait,
    alt: "Promotional portrait of the musical duo Sawdust & Strings. Two men, one with an electric guitar and one with an acoustic guitar, sitting on tree stumps in front of a rustic wooden logo that says Sawdust & Strings Handmade Music.",
    downloadName: "sawdust-and-strings-promo-portrait.png",
    caption: "Promo portrait",
  },
  {
    src: studioPortrait,
    alt: "Two men, one older and one younger, smiling and posing with an electric and acoustic guitar in a music recording studio.",
    downloadName: "sawdust-and-strings-studio-portrait.jpg",
    caption: "Studio portrait",
  },
  {
    src: studioDuo,
    alt: "Two men smiling while holding an electric and an acoustic guitar in a music studio filled with recording equipment.",
    downloadName: "sawdust-and-strings-studio-duo.jpg",
    caption: "In the studio",
  },
  {
    src: studioRehearsal,
    alt: "Two men playing electric and acoustic guitars in a home music studio with drums and amplifiers in the background.",
    downloadName: "sawdust-and-strings-studio-rehearsal.jpg",
    caption: "Rehearsal",
  },
  {
    src: studioSession,
    alt: "Two men playing guitars, one electric and one acoustic, in a music studio with a drum kit and speakers in the background.",
    downloadName: "sawdust-and-strings-studio-session.jpg",
    caption: "Session",
  },
] as const;

export const pressPhotos = [
  {
    src: aboutDuoPhoto.src,
    alt: aboutDuoPhoto.alt,
    downloadName: "sawdust-and-strings-duo-performance.png",
    caption: "Live duo cutout",
  },
  ...mediaPhotos,
];

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

export const stagePlot = {
  src: stagePlotImage,
  alt: "Sawdust & Strings guitar duo stage plot — acoustic left, electric right, with input list and monitor notes for sound engineers.",
  downloadName: "sawdust-and-strings-stage-plot.png",
} as const;

export const inputList = [
  "Vocal 1 (Acoustic)",
  "Acoustic Guitar (DI or Mic)",
  "Vocal 2 (Electric)",
  "Electric Guitar (Amp Mic or DI)",
] as const;

export const epkNav = [
  { id: "bio", label: "Bio" },
  { id: "setlist", label: "Setlist" },
  { id: "music", label: "Music" },
  { id: "press", label: "Press" },
  { id: "shows", label: "Shows" },
  { id: "tech", label: "Tech" },
  { id: "contact", label: "Book" },
] as const;
