export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
}

/**
 * Sourced from the official State House Kenya YouTube channel
 * (youtube.com/@StateHouseRepublicofKenya) — verified live, public videos.
 */
export const videos: VideoItem[] = [
  {
    id: "chamber-of-commerce",
    youtubeId: "Cb7Ei4bKhqI",
    title: "President Ruto Hosts the Kenya Chamber of Commerce",
    description: "State House, Nairobi",
  },
  {
    id: "youth-empowerment",
    youtubeId: "Be1i7qrfohI",
    title: "President Ruto Hosts Thousands of Youth at State House",
    description: "State House, Nairobi",
  },
  {
    id: "kiambu-leaders",
    youtubeId: "qjyLHFR_u8w",
    title: "President Ruto Meets Over 6,000 Leaders from Kiambu",
    description: "State House, Nairobi",
  },
  {
    id: "assenting-bills",
    youtubeId: "yUdajfRhrow",
    title: "President Ruto Assents to National Assembly Bills",
    description: "State House, Nairobi",
  },
  {
    id: "nairobi-empowerment",
    youtubeId: "ttOJFj51QVo",
    title: "President Ruto Hosts Nairobians for an Empowerment Program",
    description: "State House, Nairobi County",
  },
  {
    id: "siaya-visit",
    youtubeId: "Q7fP2CAT08o",
    title: "President Ruto Live in Yala, Siaya County",
    description: "Siaya County",
  },
];
