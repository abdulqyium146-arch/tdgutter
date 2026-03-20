export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "roof-cleaning",
    title: "Roof Cleaning",
    description:
      "Let us bring your roof back to its former glory with a thorough soft-washing that will restore the color to your roof shingles.",
    icon: "roof",
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    description:
      "Remove debris, leaf litter, and sediment from your gutters and watch them function like new after our double rain gutter washing process.",
    icon: "gutter",
  },
  {
    id: "gutter-repairs",
    title: "Gutter Repairs",
    description:
      "Are your rain gutters damaged, leaking or malfunctioning? We can troubleshoot, fix, realign or seal your leaking gutters and downspouts.",
    icon: "wrench",
  },
  {
    id: "gutter-installation",
    title: "Gutter Installation",
    description:
      "If you need new gutters installed or replaced, or if you just need another downspout installed, we offer some of the best options and rates around.",
    icon: "tools",
  },
  {
    id: "gutter-guard",
    title: "Gutter Guard Installation & Repair",
    description:
      "Are you tired of your gutters always clogging? Have us install gutter guards or replace your damaged ones.",
    icon: "shield",
  },
  {
    id: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    description:
      "Maximize your energy output by having your solar panels cleaned today!",
    icon: "solar",
  },
  {
    id: "house-washing",
    title: "House Washing",
    description:
      "Get rid of that dull dirt and grime that's stealing your house's shine. We soft wash houses and can clean yours today.",
    icon: "house",
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    description:
      "Hard water stains and calcium deposits!? No problem! We offer window washing services for residential and commercial buildings.",
    icon: "window",
  },
  {
    id: "free-gutter-inspections",
    title: "Free Gutter Inspections",
    description:
      "You know something is wrong, but don't know exactly what it is. Call us today and get a free gutter inspection from professional gutter cleaners.",
    icon: "magnify",
  },
];
