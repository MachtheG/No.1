import { unsplash } from "@/lib/utils";

export interface Story {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  outcome: string;
  image: string;
}

export const stories: Story[] = [
  {
    id: "mama-mboga-nakuru",
    name: "Alice Wanjiru",
    role: "Mama Mboga",
    location: "Nakuru",
    quote:
      "The Hustler Fund let me restock my vegetable stall without begging a shark for a loan. Today I supply two hotels.",
    outcome: "Grew a single stall into a supply contract for 2 local hotels",
    image: unsplash("photo-1561385945-c99789cd12d1"),
  },
  {
    id: "boda-boda-eldoret",
    name: "Kevin Kiptoo",
    role: "Boda Boda Rider",
    location: "Eldoret",
    quote:
      "SHA covered my accident surgery in full. Two years ago that bill would have buried my family in debt.",
    outcome: "Received a KES 480,000 surgery at zero out-of-pocket cost",
    image: unsplash("photo-1623930376524-ead3734be423"),
  },
  {
    id: "smallholder-kakamega",
    name: "Josephine Amondi",
    role: "Smallholder Farmer",
    location: "Kakamega",
    quote:
      "Subsidized fertilizer doubled my maize yield in one season. I finally sell surplus instead of borrowing to eat.",
    outcome: "Doubled maize yield after accessing subsidized inputs",
    image: unsplash("photo-1704138031384-1625ba724fd8"),
  },
  {
    id: "first-home-kisumu",
    name: "Dennis Otieno",
    role: "Civil Servant",
    location: "Kisumu",
    quote:
      "I moved my family into our first owned home through the Affordable Housing Programme. No landlord, no more rent anxiety.",
    outcome: "First-time homeowner through the Affordable Housing Programme",
    image: unsplash("photo-1560789438-797849c1e18d"),
  },
];
