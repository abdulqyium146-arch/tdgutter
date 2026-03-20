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
      "Those black streaks and green patches aren't cosmetic — algae, moss, and mildew are actively degrading your shingles. Our low-pressure soft-washing treatment eliminates biological growth at the root using biodegradable solutions approved by leading roofing manufacturers, restoring your roof back to its former glory — original shingle color, protected granules, and added years of life — without touching your warranty.",
    icon: "roof",
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    description:
      "Clogged gutters are the most common cause of preventable water damage to Northern California homes. Our double rain gutter washing process removes all debris, leaf litter, and sediment in two stages — dry removal by hand first, then a full flush of every channel and downspout — so your gutters flow clear before the first fall storm. No blowing debris onto your roof or yard.",
    icon: "gutter",
  },
  {
    id: "gutter-repairs",
    title: "Gutter Repairs",
    description:
      "A leaking or sagging gutter quietly rots fascia boards, stains siding, and undermines your foundation before you notice any signs. We troubleshoot the root cause first — improper pitch, loose spikes, cracked seams, or failing end caps — then fix, realign, and seal everything properly. Most repairs are completed the same day.",
    icon: "wrench",
  },
  {
    id: "gutter-installation",
    title: "Gutter Installation",
    description:
      "When repair isn't enough, a quality replacement protects your home for the next 20+ years. We install seamless aluminum gutters custom-fitted to your roofline, eliminating the seam joints where most leaks originate. We also add downspouts in problem areas — anywhere water is pooling or overflowing during heavy rain.",
    icon: "tools",
  },
  {
    id: "gutter-guard",
    title: "Gutter Guard Installation & Repair",
    description:
      "If oak leaves or pine needles have you cleaning gutters three or four times a year, guards change that math dramatically. We install micro-mesh and surface-tension systems that block debris while letting water through freely. We also repair or replace existing guards that have warped, shifted, or simply stopped working.",
    icon: "shield",
  },
  {
    id: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    description:
      "Agricultural dust, pollen, and bird droppings are unavoidable in the Sacramento Valley — and they're quietly cutting your energy output. Research shows soiled panels lose up to 25% of their rated production. Have your solar panels cleaned today and maximize your energy output using purified deionized water and soft-bristle tools designed for solar glass, restoring full production without risking your manufacturer warranty.",
    icon: "solar",
  },
  {
    id: "house-washing",
    title: "House Washing",
    description:
      "Years of Sacramento Valley heat, dust, and seasonal moisture leave dull dirt and grime on your home's exterior — oxidized paint, mildew streaks, and biological buildup that steals your home's shine. Our controlled low-pressure soft-wash lifts all of it from vinyl, stucco, wood, and fiber cement siding without the surface damage that pressure washing causes. The difference is visible from the street.",
    icon: "house",
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    description:
      "Irrigation sprinklers and Northern California's hard water leave mineral deposits that most cleaning products just smear around. We remove calcium buildup and water stains using professional solutions and a purified-water final rinse — leaving glass genuinely clear, not just polished. We serve residential homes and commercial buildings throughout the region.",
    icon: "window",
  },
  {
    id: "free-gutter-inspections",
    title: "Free Gutter Inspections",
    description:
      "If you're hearing water drip where it shouldn't, noticing ceiling stains after heavy rain, or just haven't had your gutters looked at in years — start here. Our free inspection puts professional eyes on your entire gutter system at no cost and no obligation. We'll tell you exactly what's going on and what, if anything, needs to be done.",
    icon: "magnify",
  },
];
