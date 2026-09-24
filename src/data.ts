export const HERO_IMG =
  "https://images.pexels.com/photos/25254928/pexels-photo-25254928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200";

export type Destination = {
  name: string;
  tagline: string;
  description: string;
  img: string;
  tag: string;
};

export const destinations: Destination[] = [
  {
    name: "Hammamet",
    tagline: "The jasmine coast",
    description:
      "Whitewashed ramparts spill toward turquoise water. Wander the seaside medina, sip mint tea over the marina and watch the sun melt into the gulf.",
    img: "https://images.pexels.com/photos/25254928/pexels-photo-25254928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    tag: "Medina & beaches",
  },
  {
    name: "Nabeul",
    tagline: "City of clay & citrus",
    description:
      "The beating heart of Tunisian pottery. Friday's grand souk overflows with ceramics, orange-blossom water and the scent of warm spices.",
    img: "https://images.pexels.com/photos/24390385/pexels-photo-24390385.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    tag: "Artisans & souks",
  },
  {
    name: "Kelibia",
    tagline: "The fort above the sea",
    description:
      "A golden Byzantine fortress crowns the cliffs above some of the Cap Bon's clearest beaches — and the vineyards that make its famous muscat.",
    img: "https://images.pexels.com/photos/34918427/pexels-photo-34918427.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    tag: "Fortress & wine",
  },
  {
    name: "El Haouaria",
    tagline: "Where the cape ends",
    description:
      "Ancient Roman caves carved into the sea, falconry traditions and wild cliffs at the very tip of Cap Bon, gazing across to Sicily.",
    img: "https://images.pexels.com/photos/33802287/pexels-photo-33802287.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    tag: "Caves & cliffs",
  },
  {
    name: "Korba",
    tagline: "Lagoons & flamingos",
    description:
      "A quiet stretch of dunes and protected wetlands where pink flamingos gather at dusk and the beaches run on for empty, golden miles.",
    img: "https://images.pexels.com/photos/14038291/pexels-photo-14038291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    tag: "Nature & lagoons",
  },
  {
    name: "Sidi Bou Said",
    tagline: "Blue doors & white walls",
    description:
      "A short hop along the coast, this cliffside village of cobalt shutters and bougainvillea is the postcard of the Mediterranean.",
    img: "https://images.pexels.com/photos/32465896/pexels-photo-32465896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    tag: "Art & cafés",
  },
];

export type Experience = {
  title: string;
  text: string;
  img: string;
  icon: string;
};

export const experiences: Experience[] = [
  {
    title: "Throw your own pottery",
    text: "Sit at the wheel beside a master potter in a Nabeul workshop and shape clay that has been worked here for centuries.",
    img: "https://images.pexels.com/photos/37358121/pexels-photo-37358121.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    icon: "🏺",
  },
  {
    title: "Lose yourself in the souk",
    text: "Bargain for hand-painted plates, woven mats and pyramids of saffron, harissa and dried roses in the Friday market.",
    img: "https://images.pexels.com/photos/29172136/pexels-photo-29172136.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    icon: "🧺",
  },
  {
    title: "Swim the Cap Bon coves",
    text: "From Kelibia's clear shallows to Korba's wild dunes, find your own slice of warm, shallow Mediterranean blue.",
    img: "https://images.pexels.com/photos/31481324/pexels-photo-31481324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    icon: "🌊",
  },
  {
    title: "Taste the orange harvest",
    text: "Cap Bon is Tunisia's orchard. Follow the scent of orange blossom into groves, distilleries and tables laden with citrus.",
    img: "https://images.pexels.com/photos/10899685/pexels-photo-10899685.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    icon: "🍊",
  },
];

export const gallery = [
  {
    img: "https://images.pexels.com/photos/27594853/pexels-photo-27594853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    alt: "Seaside terrace with Mediterranean view",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    img: "https://images.pexels.com/photos/28976449/pexels-photo-28976449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
    alt: "Colorful ceramics in an artisan market",
    span: "",
  },
  {
    img: "https://images.pexels.com/photos/15971126/pexels-photo-15971126.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
    alt: "Fishing boat and lighthouse",
    span: "",
  },
  {
    img: "https://images.pexels.com/photos/19198103/pexels-photo-19198103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
    alt: "Orange blossom in bloom",
    span: "",
  },
  {
    img: "https://images.pexels.com/photos/37484909/pexels-photo-37484909.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
    alt: "Market display of ceramics and textiles",
    span: "",
  },
  {
    img: "https://images.pexels.com/photos/27863647/pexels-photo-27863647.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    alt: "Sunset over a Tunisian beach with palms",
    span: "lg:col-span-2",
  },
];

export const stats = [
  { value: "120 km", label: "of Cap Bon coastline" },
  { value: "300+", label: "days of sunshine a year" },
  { value: "2,000", label: "years of pottery tradition" },
  { value: "25°C", label: "average sea temperature" },
];

export const testimonials = [
  {
    quote:
      "Nabeul felt like the Mediterranean before it was discovered — warm clay, warmer people, and the bluest water I've swum in.",
    name: "Élise Moreau",
    from: "Lyon, France",
  },
  {
    quote:
      "I came for the beaches and left with a suitcase of pottery and a recipe for harissa. Cap Bon stole my heart.",
    name: "Marco Bianchi",
    from: "Milan, Italy",
  },
  {
    quote:
      "Sunrise over Kelibia's fort, an afternoon in the souk, fresh grilled fish by the marina. The perfect slow week.",
    name: "Sarah Lindqvist",
    from: "Stockholm, Sweden",
  },
];
