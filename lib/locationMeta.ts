// ─── LOCATION META — hyper-local humanization data ───────────────────────────
// landmarks: two real geographic references used in crew-voice body copy.
// seasonalTiming: the honest best-practice cleaning window for that city.
// These are intentionally NOT in locationData.ts to keep that file stable.

export type LocationMeta = {
  landmarks: [string, string]
  seasonalTiming: string
  localFaqs?: Array<{ q: string; a: string }>
}

export const LOCATION_META: Record<string, LocationMeta> = {
  // ── PRIMARY ────────────────────────────────────────────────────────────────
  'chico': {
    landmarks: ['Bidwell Park east boundary neighborhoods', 'The Esplanade historic tree corridor'],
    seasonalTiming: 'late October through mid-December',
  },
  'redding': {
    landmarks: ['Sacramento River Trail corridor homes', 'Shasta Dam Boulevard neighborhood'],
    seasonalTiming: 'November through December, and again in March',
  },
  'oroville': {
    landmarks: ['Feather River bottom neighborhoods near Riverbend Park', 'Table Mountain area homes'],
    seasonalTiming: 'October through December, and May for cottonwood seed season',
  },
  'yuba-city': {
    landmarks: ['Live Oak Road orchard belt corridor', 'Butte House Road neighborhood'],
    seasonalTiming: 'September through November before the rainy season',
  },
  'red-bluff': {
    landmarks: ['River Road homes along the Sacramento levee', 'Antelope Boulevard corridor'],
    seasonalTiming: 'late October through November',
  },
  'orland': {
    landmarks: ['Newville Road farming community', 'County Road 16 almond belt corridor'],
    seasonalTiming: 'August through October during harvest, then again in November',
  },
  'paradise': {
    landmarks: ['Skyway corridor homes', 'Clark Road and Pentz Road neighborhoods'],
    seasonalTiming: 'September through October, before the first hard frost',
  },
  'grass-valley': {
    landmarks: ['Brunswick Basin neighborhood', 'McKnight Way and Idaho Maryland Road corridor'],
    seasonalTiming: 'September through November, and after any winter snow event',
  },

  // ── SECONDARY ──────────────────────────────────────────────────────────────
  'marysville': {
    landmarks: ['D Street historic levee corridor', 'Yuba-Feather River confluence neighborhood'],
    seasonalTiming: 'October through December',
  },
  'concord': {
    landmarks: ['Clayton Valley corridor homes', 'Ygnacio Valley Road neighborhood'],
    seasonalTiming: 'late October through January',
  },
  'vacaville': {
    landmarks: ['Nut Tree Road corridor', 'Monte Vista Avenue neighborhood'],
    seasonalTiming: 'October through December',
  },
  'davis': {
    landmarks: ['Covell Boulevard and Sycamore Lane canopy corridor', 'Slide Hill Park neighborhood'],
    seasonalTiming: 'November through January',
  },
  'placerville': {
    landmarks: ['Broadway historic district homes', 'Forni Road hillside neighborhood'],
    seasonalTiming: 'September through November, and after any snow event',
  },
  'lincoln': {
    landmarks: ['Twelve Bridges Drive new development area', 'Ferrari Ranch Road corridor'],
    seasonalTiming: 'November through December',
  },
  'granite-bay': {
    landmarks: ['Eureka Road lakeside corridor', 'Douglas Boulevard hillside neighborhood'],
    seasonalTiming: 'November through January',
  },
  'galt': {
    landmarks: ['Twin Cities Road farming perimeter', 'C Street downtown neighborhood'],
    seasonalTiming: 'October through December',
  },
  'anderson': {
    landmarks: ['Balls Ferry Road corridor homes', 'North Street neighborhood'],
    seasonalTiming: 'November through December',
  },
  'cottonwood': {
    landmarks: ['Adobe Creek bottom neighborhood', 'Gas Point Road corridor'],
    seasonalTiming: 'May for cottonwood seed, and November for general leaf debris',
  },
  'corning': {
    landmarks: ['Solano Street olive district corridor', 'South Avenue farming community'],
    seasonalTiming: 'August through October during harvest, then November',
  },
  'willows': {
    landmarks: ['Logue Road rice field perimeter', 'Glenn County Fairgrounds neighborhood'],
    seasonalTiming: 'October through December',
  },
  'colusa': {
    landmarks: ['Market Street historic riverside corridor', 'Lurline Avenue neighborhood'],
    seasonalTiming: 'October through December',
  },
  'gridley': {
    landmarks: ['Hazel Street neighborhood', 'Highway 99 Sutter-Butte border corridor'],
    seasonalTiming: 'September through November',
  },
  'healdsburg': {
    landmarks: ['Dry Creek Road wine country corridor', 'Matheson Street downtown neighborhood'],
    seasonalTiming: 'October through January with fog season',
  },
  'ukiah': {
    landmarks: ['State Street downtown corridor', 'Orchard Avenue valley neighborhood'],
    seasonalTiming: 'October through February with fog season',
  },
  'novato': {
    landmarks: ['Ignacio Boulevard corridor homes', 'Novato Boulevard historic neighborhood'],
    seasonalTiming: 'October through February',
  },
  'san-rafael': {
    landmarks: ['Dominican neighborhood hillside homes', 'Fourth Street downtown corridor'],
    seasonalTiming: 'October through February',
  },
  'martinez': {
    landmarks: ['Alhambra Avenue historic corridor', 'Waterbird Way Carquinez waterfront homes'],
    seasonalTiming: 'October through March',
  },
  'lafayette': {
    landmarks: ['Happy Valley Road hillside homes', 'Mount Diablo Boulevard corridor'],
    seasonalTiming: 'October through January',
  },
  'san-leandro': {
    landmarks: ['Davis Street neighborhood', 'San Leandro Shoreline waterfront homes'],
    seasonalTiming: 'November through February',
  },
  'hayward': {
    landmarks: ['Mission Boulevard hillside corridor', 'Foothill Boulevard historic neighborhood'],
    seasonalTiming: 'November through February',
  },
  'alameda': {
    landmarks: ['Park Street neighborhood', 'South Shore waterfront homes along the Bay'],
    seasonalTiming: 'year-round, with peak cleaning in October through March',
  },
  'santa-cruz': {
    landmarks: ['West Cliff Drive coastal neighborhood', 'Westside near UC Santa Cruz redwood canopy'],
    seasonalTiming: 'September through March',
  },
  'scotts-valley': {
    landmarks: ['Scotts Valley Drive hillside corridor', 'Glenwood Drive neighborhood'],
    seasonalTiming: 'September through November, and after any freeze event',
  },
  'capitola': {
    landmarks: ['Capitola Village waterfront homes', 'Soquel Drive inland corridor'],
    seasonalTiming: 'October through February',
  },
  'gilroy': {
    landmarks: ['Monterey Street historic corridor', 'Santa Teresa Boulevard neighborhood'],
    seasonalTiming: 'October through December',
  },
  'mountain-house': {
    landmarks: ['Byron Road Delta corridor homes', 'Wicklund Drive planned community'],
    seasonalTiming: 'November through February with tule fog season',
  },
  'los-altos': {
    landmarks: ['Foothill Expressway and Main Street canopy corridor', 'Loyola Corner established neighborhood'],
    seasonalTiming: 'October through January',
  },
  'menlo-park': {
    landmarks: ['Santa Cruz Avenue tree-lined corridor', 'Allied Arts neighborhood'],
    seasonalTiming: 'October through February',
  },
  'redwood-city': {
    landmarks: ['Emerald Hills neighborhood', 'Woodside Road hillside corridor'],
    seasonalTiming: 'October through February',
  },
  'san-carlos': {
    landmarks: ['Eucalyptus Hill above Laurel Street', 'Howard Avenue neighborhood'],
    seasonalTiming: 'October through January',
  },
  'san-bruno': {
    landmarks: ['Crestmoor Drive hillside neighborhood', 'El Camino Real corridor homes'],
    seasonalTiming: 'October through February',
  },
  'pacifica': {
    landmarks: ['Rockaway Beach neighborhood', 'Sharp Park above the highway'],
    seasonalTiming: 'year-round, with peak storms November through March',
  },
  'half-moon-bay': {
    landmarks: ['Main Street coastal neighborhood', 'Purissima Road farming community'],
    seasonalTiming: 'October through March with Pacific storm season',
  },
  'orinda': {
    landmarks: ['Bear Creek Road hillside neighborhood', 'Moraga Way corridor homes'],
    seasonalTiming: 'October through January',
  },
  'corte-madera': {
    landmarks: ['Corte Madera Creek-adjacent homes', 'Madera Boulevard waterfront corridor'],
    seasonalTiming: 'October through March with fog season',
  },
  'los-molinos': {
    landmarks: ['Thomas Road walnut orchard neighborhood', 'Highway 99E river corridor homes'],
    seasonalTiming: 'October through November',
  },

  // ── TERTIARY ───────────────────────────────────────────────────────────────
  'durham': {
    landmarks: ['Durham-Dayton Highway farming corridor', 'Midway orchard neighborhood'],
    seasonalTiming: 'September through November',
  },
  'camptonville': {
    landmarks: ['Highway 49 mountain corridor', 'Moonshine Road forest neighborhood'],
    seasonalTiming: 'September through October, before the first snow',
  },
  'rackerby': {
    landmarks: ['Rackerby Road community core', 'South Rackerby Road foothill area'],
    seasonalTiming: 'October through November',
  },
  'olivehurst': {
    landmarks: ['Olivehurst Avenue corridor', 'Plumas Lake Road neighborhood'],
    seasonalTiming: 'October through December',
    localFaqs: [
      {
        q: 'Do you offer gutter guard installation in Olivehurst?',
        a: 'Yes — and gutter guards are one of the most cost-effective upgrades for Olivehurst homes specifically. The dual debris load here (Yuba River organic silt plus orchard leaf fall from neighboring communities) means unprotected gutters can clog in a matter of weeks during peak season. We install micro-mesh gutter guards that block fine debris and pine needles while maintaining full water flow capacity, dramatically reducing how often your gutters need service.',
      },
      {
        q: 'Do you handle gutter repair in Olivehurst, CA?',
        a: 'Yes. Olivehurst\'s floodplain position adds water-weight stress during high-water events, which accelerates hanger fatigue, seam separation, and fascia deterioration faster than in drier areas. We repair sagging sections, leaking seams, loose hangers, and separated downspout joints throughout Yuba County, and same-day appointments are often available.',
      },
      {
        q: 'Can you install new gutters in Olivehurst?',
        a: 'Yes. We fabricate and install seamless aluminum gutters on-site for Olivehurst properties. For homes near the Yuba River floodplain, we recommend 6-inch K-style gutters with downspout placement that directs water well away from the foundation — especially important in an area with elevated groundwater during storm season. Every installation is pitched and tested before we leave.',
      },
    ],
  },
  'plumas-lake': {
    landmarks: ['Plumas Lake Boulevard planned community', 'Feather River watershed corridor'],
    seasonalTiming: 'October through December',
  },
  'lake-wildwood': {
    landmarks: ['Lake Wildwood Drive gated community', 'Augusta Drive HOA-managed neighborhood'],
    seasonalTiming: 'September through October, and after any hard freeze',
  },
  'dutch-flat': {
    landmarks: ['Railroad Street historic core', 'Dutch Flat Road Sierra Nevada corridor'],
    seasonalTiming: 'September through October, before the snow season starts',
  },
  'graniteville': {
    landmarks: ['Washington Road remote Sierra corridor', 'Graniteville Road forest neighborhood'],
    seasonalTiming: 'August through September, before snow makes access difficult',
  },
  'yankee-jims': {
    landmarks: ['Yankee Jims Road canyon community', 'Iowa Hill Road oak woodland area'],
    seasonalTiming: 'September through November',
  },
  'foothill-farms': {
    landmarks: ['Madison Avenue parkway corridor', 'American River Parkway perimeter neighborhood'],
    seasonalTiming: 'October through December',
  },
  'gold-river': {
    landmarks: ['Gold River Drive planned neighborhood', 'Sunrise Boulevard corridor'],
    seasonalTiming: 'November through January',
  },
  'rosemont': {
    landmarks: ['Folsom Boulevard corridor', 'Rosemont Drive neighborhood'],
    seasonalTiming: 'November through January',
  },
  'marin': {
    landmarks: ['Sausalito waterfront community approach', 'Highway 101 Marin City corridor'],
    seasonalTiming: 'year-round, peak October through April',
  },
}

export function getLocationMeta(slug: string): LocationMeta | undefined {
  return LOCATION_META[slug]
}
