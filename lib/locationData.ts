// ─── LOCATION × SERVICE DATA ─────────────────────────────────────────────────
// Single source of truth for all 59 Northern California cities and 5 gutter
// services. Every gutterPainPoint is unique. nearbyCities are real geographic
// neighbors pulled from within this same list.

export type Location = {
  slug: string
  name: string
  county: string
  state: string
  gutterPainPoint: string
  nearbyCities: string[]
  priority: 'primary' | 'secondary' | 'tertiary'
}

export type Service = {
  slug: string
  name: string
  shortDescription: string
  painSentence: string
  process: string[]
  faqs: { q: string; a: string }[]
}

// ─── LOCATIONS ────────────────────────────────────────────────────────────────

export const LOCATIONS: Location[] = [
  // ── PRIMARY ──────────────────────────────────────────────────────────────────
  {
    slug: 'chico',
    name: 'Chico',
    county: 'Butte County',
    state: 'CA',
    gutterPainPoint:
      'Mature valley oak, Oregon ash, and Chinese pistache trees throughout Chico\'s older neighborhoods shed dense leaf packs into gutters every autumn, and the city\'s mild, wet winters allow moss to colonize gutter interiors within weeks of the first significant rain.',
    nearbyCities: ['oroville', 'paradise', 'durham', 'gridley'],
    priority: 'primary',
  },
  {
    slug: 'redding',
    name: 'Redding',
    county: 'Shasta County',
    state: 'CA',
    gutterPainPoint:
      'Redding\'s Sacramento Valley climate regularly pushes summer temperatures past 115°F, causing aluminum gutters to expand forcefully and pull away from fascia boards at every seam — a failure mode unique to extreme-heat corridors and compounded by blue oak leaf drop each fall.',
    nearbyCities: ['anderson', 'cottonwood', 'red-bluff', 'los-molinos'],
    priority: 'primary',
  },
  {
    slug: 'oroville',
    name: 'Oroville',
    county: 'Butte County',
    state: 'CA',
    gutterPainPoint:
      'The proximity of Oroville homes to the Feather River and Lake Oroville creates elevated year-round humidity that promotes rapid moss and rust growth inside gutters, while cottonwood and willow trees lining the riverbanks release dense seed fluff each spring that packs downspouts completely solid.',
    nearbyCities: ['chico', 'paradise', 'gridley', 'marysville'],
    priority: 'primary',
  },
  {
    slug: 'yuba-city',
    name: 'Yuba City',
    county: 'Sutter County',
    state: 'CA',
    gutterPainPoint:
      'Yuba City\'s Sacramento Valley orchard belt surrounds homes with peach, walnut, and prune trees that deposit sticky fruit residue, pollen, and leaf fall into gutters throughout the growing season, creating a compacted organic paste that blocks downspouts even before the November rainy season begins.',
    nearbyCities: ['marysville', 'gridley', 'colusa', 'olivehurst'],
    priority: 'primary',
  },
  {
    slug: 'red-bluff',
    name: 'Red Bluff',
    county: 'Tehama County',
    state: 'CA',
    gutterPainPoint:
      'Red Bluff regularly records California\'s highest daily temperatures, and those sustained extremes cause gutter spikes and hangers to loosen as fascia boards expand and contract, while the city\'s blue oak and valley oak trees add a heavy November leaf load that arrives just as the rainy season begins.',
    nearbyCities: ['redding', 'corning', 'cottonwood', 'los-molinos'],
    priority: 'primary',
  },
  {
    slug: 'orland',
    name: 'Orland',
    county: 'Glenn County',
    state: 'CA',
    gutterPainPoint:
      'Orland sits at the center of Glenn County\'s almond and olive orchard belt, and during harvest season the combination of orchard dust, almond hull chaff, and olive pollen creates a thick, oily residue inside gutter channels that standard rainfall cannot flush — it must be physically removed.',
    nearbyCities: ['corning', 'willows', 'colusa', 'red-bluff'],
    priority: 'primary',
  },
  {
    slug: 'paradise',
    name: 'Paradise',
    county: 'Butte County',
    state: 'CA',
    gutterPainPoint:
      'Post-Camp Fire reforestation in Paradise means young ponderosa pines now produce intense needle loads year-round, and the town\'s 1,700-foot elevation brings winter freeze-thaw cycles that crack gutter seams and sealant in ways rarely seen at lower valley elevations.',
    nearbyCities: ['chico', 'oroville', 'durham', 'grass-valley'],
    priority: 'primary',
  },
  {
    slug: 'grass-valley',
    name: 'Grass Valley',
    county: 'Nevada County',
    state: 'CA',
    gutterPainPoint:
      'Grass Valley\'s dense ponderosa pine and black oak forest canopy produces a relentless stream of pine needles, acorn caps, and leaf litter that fills gutters after every wind event, while Nevada County foothills winters bring freeze-thaw cycles that widen hairline gutter cracks into active leaks each season.',
    nearbyCities: ['placerville', 'lincoln', 'lake-wildwood', 'dutch-flat'],
    priority: 'primary',
  },

  // ── SECONDARY ────────────────────────────────────────────────────────────────
  {
    slug: 'marysville',
    name: 'Marysville',
    county: 'Yuba County',
    state: 'CA',
    gutterPainPoint:
      'Marysville\'s position at the Yuba River-Feather River confluence creates some of the highest agricultural flood-debris exposure in the Central Valley, with windborne rice chaff, tule sediment, and orchard leaf litter regularly packing residential gutters between fall harvest and the first winter storms.',
    nearbyCities: ['yuba-city', 'oroville', 'olivehurst', 'camptonville'],
    priority: 'secondary',
  },
  {
    slug: 'concord',
    name: 'Concord',
    county: 'Contra Costa County',
    state: 'CA',
    gutterPainPoint:
      'Concord\'s inland East Bay position combines intense valley oak leaf drop every November with thick tule fog that keeps debris wet and compacted for months, dramatically accelerating the rust and seam separation that causes most Contra Costa County gutter failures.',
    nearbyCities: ['martinez', 'lafayette', 'orinda', 'hayward'],
    priority: 'secondary',
  },
  {
    slug: 'vacaville',
    name: 'Vacaville',
    county: 'Solano County',
    state: 'CA',
    gutterPainPoint:
      'Vacaville sits in a narrow gap between the Coast Range and the Central Valley where wind funnels create unusually high airborne debris loads, and the city\'s large olive and black walnut trees drop oily leaves that create a tar-like paste inside gutters that cannot self-clear even in heavy rain.',
    nearbyCities: ['davis', 'concord', 'martinez', 'galt'],
    priority: 'secondary',
  },
  {
    slug: 'davis',
    name: 'Davis',
    county: 'Yolo County',
    state: 'CA',
    gutterPainPoint:
      'Davis is one of California\'s hottest cities in summer and features an extensive city-tree canopy of London plane and Modesto ash that creates one of the state\'s highest municipal leaf-fall loads per block, overwhelming residential gutters every November despite the city\'s flat topography.',
    nearbyCities: ['vacaville', 'colusa', 'galt', 'gridley'],
    priority: 'secondary',
  },
  {
    slug: 'placerville',
    name: 'Placerville',
    county: 'El Dorado County',
    state: 'CA',
    gutterPainPoint:
      'Placerville\'s El Dorado County foothill setting places homes directly under a mixed canopy of ponderosa pine, black oak, and incense cedar that drops continuous debris year-round, while winter ice and snow events crack gutter sealant and occasionally freeze standing water into ice dams that peel gutters away from rooflines.',
    nearbyCities: ['grass-valley', 'dutch-flat', 'yankee-jims', 'granite-bay'],
    priority: 'secondary',
  },
  {
    slug: 'lincoln',
    name: 'Lincoln',
    county: 'Placer County',
    state: 'CA',
    gutterPainPoint:
      'Lincoln is one of Placer County\'s fastest-growing cities, and new construction constantly disturbs the soil and deposits roofing sediment into freshly installed gutters, while young valley oak trees planted in new subdivisions are now reaching the size where they will produce substantial seasonal leaf loads for decades to come.',
    nearbyCities: ['grass-valley', 'granite-bay', 'galt', 'marysville'],
    priority: 'secondary',
  },
  {
    slug: 'granite-bay',
    name: 'Granite Bay',
    county: 'Placer County',
    state: 'CA',
    gutterPainPoint:
      'Granite Bay\'s mature lakeside neighborhoods feature decades-old valley oak canopy that drops massive tannin-rich leaf packs each fall, and proximity to Folsom Lake creates year-round moisture that keeps organic debris wet and accelerates rust and sealant breakdown inside gutters faster than in drier inland communities.',
    nearbyCities: ['lincoln', 'placerville', 'grass-valley', 'gold-river'],
    priority: 'secondary',
  },
  {
    slug: 'galt',
    name: 'Galt',
    county: 'Sacramento County',
    state: 'CA',
    gutterPainPoint:
      'Galt sits at the southern Sacramento Valley fringe where Delta winds drive tule fog and windborne agricultural chaff from surrounding row crops directly onto residential rooftops, filling gutters with a mix of organic field debris that is unlike anything found in suburban or foothill communities.',
    nearbyCities: ['lincoln', 'davis', 'mountain-house', 'rosemont'],
    priority: 'secondary',
  },
  {
    slug: 'anderson',
    name: 'Anderson',
    county: 'Shasta County',
    state: 'CA',
    gutterPainPoint:
      'Anderson\'s Sacramento River proximity creates high year-round atmospheric moisture that enables moss and algae to colonize gutter interiors within weeks after cleaning, while the town\'s blue oak and valley oak trees contribute a heavy November leaf load that arrives just as the rainy season starts.',
    nearbyCities: ['redding', 'cottonwood', 'red-bluff', 'corning'],
    priority: 'secondary',
  },
  {
    slug: 'cottonwood',
    name: 'Cottonwood',
    county: 'Shasta County',
    state: 'CA',
    gutterPainPoint:
      'Cottonwood is named for the towering Fremont cottonwood trees lining Adobe Creek and the Sacramento River nearby — every spring these trees release dense white seed fluff that is drawn into downspouts and compresses into a solid plug that stops drainage completely until physically cleared.',
    nearbyCities: ['anderson', 'redding', 'corning', 'los-molinos'],
    priority: 'secondary',
  },
  {
    slug: 'corning',
    name: 'Corning',
    county: 'Tehama County',
    state: 'CA',
    gutterPainPoint:
      'Corning is the olive capital of California, and every May through June olive pollen and fine particulate from the harvest process coat every horizontal surface in the city — including gutter channels — with an oily sediment that hardens when dry and requires pressurized water or manual removal to clear.',
    nearbyCities: ['red-bluff', 'orland', 'cottonwood', 'willows'],
    priority: 'secondary',
  },
  {
    slug: 'willows',
    name: 'Willows',
    county: 'Glenn County',
    state: 'CA',
    gutterPainPoint:
      'Willows is surrounded by some of California\'s most productive rice paddies, and seasonal field preparation stirs airborne rice straw, chaff, and fine agricultural dust that settles into residential gutters throughout Glenn County — a debris type composed of silica-rich material that wears through gutter sealant faster than organic leaf matter.',
    nearbyCities: ['orland', 'colusa', 'corning', 'gridley'],
    priority: 'secondary',
  },
  {
    slug: 'colusa',
    name: 'Colusa',
    county: 'Colusa County',
    state: 'CA',
    gutterPainPoint:
      'Colusa sits on the Sacramento River\'s west bank, where seasonal flooding occasionally deposits silt and organic matter on residential properties, and the city\'s inland Central Valley position concentrates windborne vineyard and orchard debris from the surrounding Colusa County farmland directly onto residential rooftops.',
    nearbyCities: ['willows', 'yuba-city', 'gridley', 'orland'],
    priority: 'secondary',
  },
  {
    slug: 'gridley',
    name: 'Gridley',
    county: 'Butte County',
    state: 'CA',
    gutterPainPoint:
      'Gridley\'s identity as a kiwi farming hub is unique in California, and kiwi vine pollen combined with adjacent rice field irrigation that raises local humidity creates persistently moist gutter conditions that accelerate rust and bracket corrosion faster than in any neighboring Butte County community.',
    nearbyCities: ['oroville', 'yuba-city', 'colusa', 'durham'],
    priority: 'secondary',
  },
  {
    slug: 'healdsburg',
    name: 'Healdsburg',
    county: 'Sonoma County',
    state: 'CA',
    gutterPainPoint:
      'Healdsburg sits at the heart of Sonoma County wine country, where morning vineyard fog rolls through town and coats gutters with moisture, then afternoon sunshine dries wind-blown grape leaf and vine tendril debris into a stiff mat that blocks drainage and is resistant to flushing from below.',
    nearbyCities: ['ukiah', 'novato', 'corte-madera', 'san-rafael'],
    priority: 'secondary',
  },
  {
    slug: 'ukiah',
    name: 'Ukiah',
    county: 'Mendocino County',
    state: 'CA',
    gutterPainPoint:
      'Ukiah sits at the bottom of a narrow Mendocino County valley that funnels coastal fog inland and concentrates it for hours each morning, keeping gutters perpetually wet and encouraging moss growth, while valley madrone and Oregon oak drop waxy, moisture-retaining leaves that compact tightly in gutter channels.',
    nearbyCities: ['healdsburg', 'novato', 'corte-madera', 'marin'],
    priority: 'secondary',
  },
  {
    slug: 'novato',
    name: 'Novato',
    county: 'Marin County',
    state: 'CA',
    gutterPainPoint:
      'Novato\'s location at the edge of the San Pablo Bay estuary means marine fog hangs over the city nearly every morning for six months of the year, and the combination of constant moisture, salt air from the Bay, and eucalyptus leaf and bark drop from large trees planted throughout Marin County neighborhoods accelerates gutter corrosion.',
    nearbyCities: ['san-rafael', 'corte-madera', 'marin', 'healdsburg'],
    priority: 'secondary',
  },
  {
    slug: 'san-rafael',
    name: 'San Rafael',
    county: 'Marin County',
    state: 'CA',
    gutterPainPoint:
      'San Rafael\'s eucalyptus trees — planted extensively throughout Marin County in the 20th century — shed fibrous bark strips and leathery leaves that curve and wedge in downspout elbows, resisting flushing, and the city\'s Bay proximity adds salt air that degrades gutter sealant faster than any inland Northern California city.',
    nearbyCities: ['novato', 'corte-madera', 'marin', 'martinez'],
    priority: 'secondary',
  },
  {
    slug: 'martinez',
    name: 'Martinez',
    county: 'Contra Costa County',
    state: 'CA',
    gutterPainPoint:
      'Martinez\'s position at the Carquinez Strait — where Sacramento River flow meets San Francisco Bay tidal influence — creates a microclimate of persistent moisture and occasional industrial particulate that together produce an unusually aggressive form of gutter corrosion that shortens aluminum gutter lifespan compared to other Contra Costa cities.',
    nearbyCities: ['concord', 'lafayette', 'orinda', 'hayward'],
    priority: 'secondary',
  },
  {
    slug: 'lafayette',
    name: 'Lafayette',
    county: 'Contra Costa County',
    state: 'CA',
    gutterPainPoint:
      'Lafayette\'s steep Lamorinda hillsides are heavily forested with mature valley oak and coast live oak that drop dense leaf packs in November, and the community\'s established neighborhoods feature large trees overhanging rooflines that funnel concentrated debris loads into relatively small gutter systems on craftsman-style homes.',
    nearbyCities: ['concord', 'orinda', 'martinez', 'hayward'],
    priority: 'secondary',
  },
  {
    slug: 'san-leandro',
    name: 'San Leandro',
    county: 'Alameda County',
    state: 'CA',
    gutterPainPoint:
      'San Leandro\'s bay-flat location means persistent marine layer moisture from San Francisco Bay, and the city\'s street canopy of eucalyptus and liquidambar drops thick, leathery leaves that are particularly resistant to flushing from gutters — they mat together, form debris dams, and back water up against fascia boards.',
    nearbyCities: ['hayward', 'alameda', 'martinez', 'concord'],
    priority: 'secondary',
  },
  {
    slug: 'hayward',
    name: 'Hayward',
    county: 'Alameda County',
    state: 'CA',
    gutterPainPoint:
      'Hayward\'s hills-to-bay span covers two distinct microclimates, and the bay-side flatlands experience salt air and persistent marine fog that corrode original gutters on the area\'s abundant 1950s–70s housing stock faster than in any inland East Bay community.',
    nearbyCities: ['san-leandro', 'alameda', 'martinez', 'concord'],
    priority: 'secondary',
  },
  {
    slug: 'alameda',
    name: 'Alameda',
    county: 'Alameda County',
    state: 'CA',
    gutterPainPoint:
      'Alameda Island\'s total exposure to San Francisco Bay on three sides means salt air and marine moisture permeate the environment year-round, causing faster gutter corrosion than any other Alameda County city, while the island\'s Monterey cypress and New Zealand Christmas trees drop resinous, acidic debris that eats through gutter sealant.',
    nearbyCities: ['hayward', 'san-leandro', 'martinez', 'lafayette'],
    priority: 'secondary',
  },
  {
    slug: 'santa-cruz',
    name: 'Santa Cruz',
    county: 'Santa Cruz County',
    state: 'CA',
    gutterPainPoint:
      'Santa Cruz\'s coastal redwood forests produce tannic acid in the needle accumulation that is specifically corrosive to aluminum gutters — a documented failure mode distinct to the Santa Cruz Mountains region where redwood needle loads are heavy throughout the year and the acidity measurably accelerates gutter degradation.',
    nearbyCities: ['scotts-valley', 'capitola', 'gilroy', 'half-moon-bay'],
    priority: 'secondary',
  },
  {
    slug: 'scotts-valley',
    name: 'Scotts Valley',
    county: 'Santa Cruz County',
    state: 'CA',
    gutterPainPoint:
      'Scotts Valley sits in a bowl-shaped valley in the Santa Cruz Mountains where tanoak, live oak, and madrone leaf drop from steep surrounding hillsides concentrates into neighborhood gutters, and the community\'s elevation brings more freeze events than coastal Santa Cruz, cracking gutter sealant each winter.',
    nearbyCities: ['santa-cruz', 'capitola', 'gilroy', 'los-altos'],
    priority: 'secondary',
  },
  {
    slug: 'capitola',
    name: 'Capitola',
    county: 'Santa Cruz County',
    state: 'CA',
    gutterPainPoint:
      'Capitola\'s beachfront position on Monterey Bay combines salt spray from the ocean with seasonal Soquel Creek leaf fall from sycamore and cottonwood trees upstream, creating a particularly corrosive mix of salt and organic acids inside gutters that shortens aluminum lifespan compared to inland Santa Cruz County.',
    nearbyCities: ['santa-cruz', 'scotts-valley', 'los-altos', 'gilroy'],
    priority: 'secondary',
  },
  {
    slug: 'gilroy',
    name: 'Gilroy',
    county: 'Santa Clara County',
    state: 'CA',
    gutterPainPoint:
      'Gilroy\'s identity as the Garlic Capital of the World means summer garlic processing produces fine aromatic particulate that settles throughout the city — including inside gutter channels — and this garlic residue, combined with Santa Clara Valley heat, creates a fermented organic buildup unlike anything found elsewhere in Northern California.',
    nearbyCities: ['los-altos', 'mountain-house', 'scotts-valley', 'capitola'],
    priority: 'secondary',
  },
  {
    slug: 'mountain-house',
    name: 'Mountain House',
    county: 'San Joaquin County',
    state: 'CA',
    gutterPainPoint:
      'Mountain House sits on the edge of the Sacramento-San Joaquin Delta where tule fog rolls in for weeks at a time in December and January, and the community\'s flat, exposed position means maximum wind exposure that drives Delta debris — tule reed seeds, weed pollen, and agricultural chaff — directly onto rooftops.',
    nearbyCities: ['galt', 'gilroy', 'los-altos', 'redwood-city'],
    priority: 'secondary',
  },
  {
    slug: 'los-altos',
    name: 'Los Altos',
    county: 'Santa Clara County',
    state: 'CA',
    gutterPainPoint:
      'Los Altos features some of Silicon Valley\'s most mature urban tree canopy, with decades-old valley oak and ornamental cherry creating heavy fall leaf loads, and the city\'s established hillside neighborhoods add slope-drainage complications that concentrate debris at gutter low points more aggressively than flat-lot homes.',
    nearbyCities: ['menlo-park', 'redwood-city', 'san-carlos', 'gilroy'],
    priority: 'secondary',
  },
  {
    slug: 'menlo-park',
    name: 'Menlo Park',
    county: 'San Mateo County',
    state: 'CA',
    gutterPainPoint:
      'Menlo Park\'s tree-canopied neighborhoods feature large camphor trees and California bay laurels whose aromatic, oily leaves are particularly difficult to flush from gutters — they mat together and resist water flow — while the city\'s proximity to San Francisco Bay adds coastal moisture that accelerates sealant breakdown.',
    nearbyCities: ['los-altos', 'redwood-city', 'san-carlos', 'half-moon-bay'],
    priority: 'secondary',
  },
  {
    slug: 'redwood-city',
    name: 'Redwood City',
    county: 'San Mateo County',
    state: 'CA',
    gutterPainPoint:
      'Redwood City\'s bay-shore neighborhoods experience tidal moisture and salt air that corrodes gutter brackets and seam sealant, while the city\'s oak-lined upland neighborhoods add a substantial November leaf load from valley oak and coast live oak — two very different problems on the same city\'s rooftops.',
    nearbyCities: ['san-carlos', 'menlo-park', 'los-altos', 'san-bruno'],
    priority: 'secondary',
  },
  {
    slug: 'san-carlos',
    name: 'San Carlos',
    county: 'San Mateo County',
    state: 'CA',
    gutterPainPoint:
      'San Carlos\'s hillside eucalyptus groves are a distinctive community feature, but eucalyptus bark strips and button-shaped seed pods are among the most problematic gutter debris in the Bay Area — they wedge in downspout elbows and cannot be flushed by water pressure alone.',
    nearbyCities: ['redwood-city', 'san-bruno', 'menlo-park', 'pacifica'],
    priority: 'secondary',
  },
  {
    slug: 'san-bruno',
    name: 'San Bruno',
    county: 'San Mateo County',
    state: 'CA',
    gutterPainPoint:
      'San Bruno\'s proximity to SFO creates constant jet-wash wind events that drive debris across rooftops at high velocity, and the city\'s hillside topography above San Andreas Lake creates a wind funnel effect that packs debris into north-facing gutters more aggressively than any flat-terrain Bay Area city.',
    nearbyCities: ['san-carlos', 'pacifica', 'half-moon-bay', 'redwood-city'],
    priority: 'secondary',
  },
  {
    slug: 'pacifica',
    name: 'Pacifica',
    county: 'San Mateo County',
    state: 'CA',
    gutterPainPoint:
      'Pacifica bears the full force of Pacific Ocean storms that other Bay Area cities never experience — salt spray, wind-driven sand, and organic ocean debris reach rooftops here — and the city\'s coastal chaparral vegetation drops thick, waxy leaves that are particularly resistant to being flushed from low-slope gutter systems.',
    nearbyCities: ['san-bruno', 'half-moon-bay', 'san-carlos', 'redwood-city'],
    priority: 'secondary',
  },
  {
    slug: 'half-moon-bay',
    name: 'Half Moon Bay',
    county: 'San Mateo County',
    state: 'CA',
    gutterPainPoint:
      'Half Moon Bay\'s coastal agriculture of pumpkins, artichokes, and cut flowers means harvest-season dust and organic field debris from San Mateo coastal farms blows directly over residential neighborhoods, filling gutters with agricultural particulate that is chemically distinct from typical leaf debris and requires specialized cleaning techniques.',
    nearbyCities: ['pacifica', 'san-bruno', 'menlo-park', 'redwood-city'],
    priority: 'secondary',
  },
  {
    slug: 'orinda',
    name: 'Orinda',
    county: 'Contra Costa County',
    state: 'CA',
    gutterPainPoint:
      'Orinda\'s Lamorinda Hills location under a dense canopy of coast live oak and California bay laurel creates one of Contra Costa County\'s most challenging gutter environments — bay laurel berries, acorn caps, and leathery oak leaves form an aromatic, dense debris pack that is specifically resistant to rain-flushing.',
    nearbyCities: ['lafayette', 'concord', 'martinez', 'hayward'],
    priority: 'secondary',
  },
  {
    slug: 'corte-madera',
    name: 'Corte Madera',
    county: 'Marin County',
    state: 'CA',
    gutterPainPoint:
      'Corte Madera\'s Richardson Bay wetland location means ambient moisture is nearly equivalent to light rain during high-tide events, promoting constant moss and algae colonization inside gutters, while the community\'s large eucalyptus trees drop fibrous bark that is uniquely problematic in Marin County drainage systems.',
    nearbyCities: ['novato', 'san-rafael', 'marin', 'healdsburg'],
    priority: 'secondary',
  },
  {
    slug: 'los-molinos',
    name: 'Los Molinos',
    county: 'Tehama County',
    state: 'CA',
    gutterPainPoint:
      'Los Molinos is a small Tehama County community where walnut orchards are the dominant agricultural feature, and walnut hull stain — a dark, oil-based residue from hull and leaf drop — coats gutter interiors with a tar-like film that bonds to aluminum surfaces and can only be removed with professional scrubbing.',
    nearbyCities: ['red-bluff', 'corning', 'cottonwood', 'anderson'],
    priority: 'secondary',
  },

  // ── TERTIARY ─────────────────────────────────────────────────────────────────
  {
    slug: 'durham',
    name: 'Durham',
    county: 'Butte County',
    state: 'CA',
    gutterPainPoint:
      'Durham\'s position at the heart of Butte County\'s almond and walnut orchard belt means mechanical harvest operations kick up intense clouds of hull dust and orchard debris that settle onto residential gutters for weeks, leaving a compressed organic layer that standard rain cannot clear on its own.',
    nearbyCities: ['chico', 'oroville', 'gridley', 'paradise'],
    priority: 'tertiary',
  },
  {
    slug: 'camptonville',
    name: 'Camptonville',
    county: 'Yuba County',
    state: 'CA',
    gutterPainPoint:
      'Camptonville sits at nearly 2,000 feet elevation in the Sierra Nevada foothills where Yuba County\'s mixed conifer forest — ponderosa pine, Douglas fir, and incense cedar — drops a heavier continuous needle and cone-scale debris load than any lowland community, compounded by winter ice events that crack gutter joints.',
    nearbyCities: ['marysville', 'grass-valley', 'rackerby', 'oroville'],
    priority: 'tertiary',
  },
  {
    slug: 'rackerby',
    name: 'Rackerby',
    county: 'Yuba County',
    state: 'CA',
    gutterPainPoint:
      'Rackerby is a small rural Yuba County community completely surrounded by foothill oak woodland, and the combination of blue oak, black oak, and interior live oak produces so much acorn and leaf fall each autumn that gutters on homes here fill completely within weeks of the first October rains.',
    nearbyCities: ['camptonville', 'marysville', 'olivehurst', 'oroville'],
    priority: 'tertiary',
  },
  {
    slug: 'olivehurst',
    name: 'Olivehurst',
    county: 'Yuba County',
    state: 'CA',
    gutterPainPoint:
      'Olivehurst\'s Yuba River floodplain position means seasonal high-water events deposit organic river debris on properties, and the neighboring orchard communities\' leaf fall blows into Olivehurst gutters throughout fall — an unusual combination of river-origin and orchard-origin debris that arrives in the same gutter channel.',
    nearbyCities: ['marysville', 'yuba-city', 'plumas-lake', 'rackerby'],
    priority: 'tertiary',
  },
  {
    slug: 'plumas-lake',
    name: 'Plumas Lake',
    county: 'Yuba County',
    state: 'CA',
    gutterPainPoint:
      'Plumas Lake is a planned community in Yuba County built on former wetland, and the surrounding tule marsh ecosystem means tule reed seeds, cattail fluff, and wetland organic debris are regularly blown onto rooftops throughout the year — a highly absorbent debris type that adds unusual water weight to gutters.',
    nearbyCities: ['olivehurst', 'yuba-city', 'marysville', 'gridley'],
    priority: 'tertiary',
  },
  {
    slug: 'lake-wildwood',
    name: 'Lake Wildwood',
    county: 'Nevada County',
    state: 'CA',
    gutterPainPoint:
      'Lake Wildwood is a gated Nevada County community inside a managed ponderosa pine forest, where HOA tree maintenance creates concentrated debris zones — trimmed pine needle fall lands directly on home gutters — and the community\'s 2,300-foot elevation delivers hard freeze events three to four times per winter that crack gutter sealant.',
    nearbyCities: ['grass-valley', 'lincoln', 'camptonville', 'dutch-flat'],
    priority: 'tertiary',
  },
  {
    slug: 'dutch-flat',
    name: 'Dutch Flat',
    county: 'Placer County',
    state: 'CA',
    gutterPainPoint:
      'Dutch Flat is a Gold Rush-era community at 3,100 feet in Placer County\'s Sierra Nevada foothills where the conifer canopy — ponderosa pine, white fir, and sugar pine — drops the heaviest debris loads on the Western Slope, and winter snow loads physically bend gutters that would remain intact at lower elevations.',
    nearbyCities: ['grass-valley', 'placerville', 'granite-bay', 'yankee-jims'],
    priority: 'tertiary',
  },
  {
    slug: 'graniteville',
    name: 'Graniteville',
    county: 'Nevada County',
    state: 'CA',
    gutterPainPoint:
      'Graniteville is one of Nevada County\'s most remote communities, sitting above 5,000 feet where Sierra Nevada red fir and lodgepole pine create year-round needle accumulation, and the community\'s granite-outcrop topography channels runoff directly into home gutters during the intense summer thunderstorms that regularly strike this elevation.',
    nearbyCities: ['dutch-flat', 'grass-valley', 'lake-wildwood', 'camptonville'],
    priority: 'tertiary',
  },
  {
    slug: 'yankee-jims',
    name: 'Yankee Jims',
    county: 'Placer County',
    state: 'CA',
    gutterPainPoint:
      'Yankee Jims is a small Placer County canyon community at around 1,500 feet where canyon live oak and interior live oak — California\'s most persistent leaf-producing species — release dense leaf loads from canyon walls directly onto rooftops, and the narrow canyon position concentrates debris in ways that surprise even experienced gutter contractors.',
    nearbyCities: ['dutch-flat', 'placerville', 'grass-valley', 'granite-bay'],
    priority: 'tertiary',
  },
  {
    slug: 'foothill-farms',
    name: 'Foothill Farms',
    county: 'Sacramento County',
    state: 'CA',
    gutterPainPoint:
      'Foothill Farms is a Sacramento County unincorporated community on the American River Parkway where mature valley oak and Fremont cottonwood trees shed heavy debris onto adjacent neighborhoods, and the area\'s 1960s–70s housing stock features original galvanized gutters that have been rusted through by decades of organic leaf-acid exposure.',
    nearbyCities: ['gold-river', 'rosemont', 'galt', 'lincoln'],
    priority: 'tertiary',
  },
  {
    slug: 'gold-river',
    name: 'Gold River',
    county: 'Sacramento County',
    state: 'CA',
    gutterPainPoint:
      'Gold River is a 1970s–80s planned Sacramento County community where the original landscape design installed valley oak and liquidambar trees that have now matured into one of the most debris-intensive residential canopies in the region, and HOA restrictions on tree removal mean homeowners must manage annual heavy leaf loads indefinitely.',
    nearbyCities: ['rosemont', 'foothill-farms', 'galt', 'granite-bay'],
    priority: 'tertiary',
  },
  {
    slug: 'rosemont',
    name: 'Rosemont',
    county: 'Sacramento County',
    state: 'CA',
    gutterPainPoint:
      'Rosemont is a dense Sacramento County suburb where a combination of 1950s–60s street trees — valley oak, Modesto ash, and Chinese pistache — have reached full canopy size and now create one of the highest leaf-fall-per-square-foot ratios of any Sacramento community, overwhelming standard residential gutters every November.',
    nearbyCities: ['gold-river', 'foothill-farms', 'galt', 'davis'],
    priority: 'tertiary',
  },
  {
    slug: 'marin',
    name: 'Marin',
    county: 'Marin County',
    state: 'CA',
    gutterPainPoint:
      'This small Marin County community adjacent to the Sausalito waterfront receives Golden Gate marine fog nearly every morning, and the local canopy of bay laurel, Monterey cypress, and coast live oak combines oily leaf drop with persistent salt-laden moisture — producing unique gutter corrosion patterns not seen even in neighboring Marin cities.',
    nearbyCities: ['san-rafael', 'novato', 'corte-madera', 'healdsburg'],
    priority: 'tertiary',
  },
]

// ─── SERVICES ─────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    slug: 'gutter-cleaning',
    name: 'Gutter Cleaning',
    shortDescription:
      'Professional removal of all leaves, debris, organic buildup, and downspout blockages to restore full water drainage capacity.',
    painSentence:
      'Clogged gutters overflow against fascia boards and foundations, causing wood rot and water intrusion that costs thousands of dollars to remediate.',
    process: [
      'We begin with a ground-level inspection to map all gutter runs, identify downspout locations, and note any existing sagging, leaks, or overflow marks before climbing a single ladder.',
      'Our crew manually removes all debris by hand and with professional scooping tools, bagging everything on-site — we never blow debris onto your landscaping or leave it on the ground.',
      'We finish by flushing every gutter run and downspout with pressurized water to confirm clear, unrestricted flow, then do a final walk-around to check pitch, hangers, and end caps.',
    ],
    faqs: [
      {
        q: 'How often should gutters be cleaned in Northern California?',
        a: 'Twice a year is the minimum: once in late spring after pollen and seed season, and once in late fall after leaf drop. Homes with pine, oak, or cottonwood trees overhanging the roofline may need a third cleaning in late summer. If your downspouts discharge near your foundation, even one season of overflow can cause real damage.',
      },
      {
        q: 'What is the difference between gutter cleaning and gutter flushing?',
        a: 'Gutter cleaning means physically removing all debris by hand and with tools before flushing. Flushing alone just pushes loose material deeper into downspouts and creates blockages at the elbow joints. Every Top Down cleaning includes manual debris removal as the first step — flushing is the final confirmation step, not the entire job.',
      },
      {
        q: 'How long does a gutter cleaning take?',
        a: 'Most single-story homes take 1–2 hours. Two-story homes or homes with extensive tree coverage typically take 2–3 hours. We do not rush. A gutter cleaning done in 30 minutes is almost certainly not thorough.',
      },
      {
        q: 'Do you clean up the debris on the ground after cleaning?',
        a: 'Yes. We bag all gutter debris and remove it from your property. We do not blow it onto your lawn, into flowerbeds, or leave piles on your driveway. Our goal is to leave your property cleaner than we found it.',
      },
    ],
  },
  {
    slug: 'gutter-repair',
    name: 'Gutter Repair',
    shortDescription:
      'Diagnosis and targeted repair of sagging gutters, leaking seams, separated joints, failed hangers, and damaged downspout connections.',
    painSentence:
      'A single leaking seam or sagging gutter run concentrates all roof runoff against your foundation wall instead of directing it away, turning a minor repair into a potential water intrusion event.',
    process: [
      'We start with a systematic inspection of every linear foot of your gutter system — checking slope with a level, probing seams for separation, testing downspout connections, and looking for rust-through spots — before quoting any work.',
      'Depending on the diagnosis, we replace failed hanger screws, re-pitch sagging sections, reseal leaking seams with professional-grade gutter sealant, patch small holes, or reconnect separated downspout elbows and joints.',
      'After repairs are complete, we run water through the entire system to confirm flow and check every repaired area under pressure, then provide a written summary of what was done and any sections that may need attention next season.',
    ],
    faqs: [
      {
        q: 'How do I know if my gutters need repair or full replacement?',
        a: 'If the gutters are structurally intact but have isolated problem spots — a leaking seam, a sagging section, a few loose hangers — repair is almost always the right choice. If more than 30% of the gutter is damaged, if there are multiple rust-through spots, or if original gutters are over 20 years old and failing in several locations at once, replacement may be more cost-effective. We give you an honest assessment either way.',
      },
      {
        q: 'What causes gutters to pull away from the fascia?',
        a: 'The most common cause is failed gutter spikes. The original spike-and-ferrule fasteners used on most homes built before 2000 eventually pull out as the fascia wood softens with age. We replace them with hidden gutter screws that provide a far stronger, longer-lasting connection and do not back out over time.',
      },
      {
        q: 'Can leaking gutter seams be permanently repaired?',
        a: 'Yes. We clean and dry the seam area, apply professional-grade butyl-rubber gutter sealant from both inside and outside the seam, and clamp it while it cures. A properly done seam repair typically lasts 5–10 years. Cheap silicone applied over a dirty, wet seam lasts one season — that is not what we do.',
      },
      {
        q: 'Do you repair gutters in wet weather?',
        a: 'We will not apply sealant in rain because it will not cure and the repair will fail within weeks. We schedule repairs in dry windows. If your situation involves active water damage to the structure, we can sometimes apply emergency temporary measures and return for a permanent repair when conditions allow.',
      },
    ],
  },
  {
    slug: 'gutter-installation',
    name: 'Gutter Installation',
    shortDescription:
      'Custom measurement, on-site fabrication, and installation of seamless aluminum gutters sized precisely for your home\'s roofline and drainage needs.',
    painSentence:
      'A home without gutters routes every drop of roof runoff directly against the foundation, causing soil erosion, basement flooding, and structural wood rot that no amount of landscaping can prevent.',
    process: [
      'We begin with a full measurement of every roofline, calculating total drainage area, pitch of the roof, and optimal downspout placement to ensure no single downspout is handling more water volume than its design capacity.',
      'Gutters are fabricated on-site from a continuous coil of aluminum to match your exact roofline length — no field seams in the straight runs, which eliminates the most common leak point in sectional gutter systems.',
      'Installation includes setting every hanger at 24-inch intervals with hidden gutter screws (never spikes), pitching every run at the correct 1/4-inch-per-10-foot slope toward the downspout, and testing the complete system with water before we leave.',
    ],
    faqs: [
      {
        q: 'What type of gutters do you install?',
        a: 'We primarily install 5-inch and 6-inch K-style seamless aluminum gutters — the most durable and leak-resistant option for Northern California homes. We can also install half-round gutters on traditional or historical-style homes. For commercial properties or high-volume applications, we can source heavier-gauge steel gutters.',
      },
      {
        q: 'What is the difference between seamless and sectional gutters?',
        a: 'Sectional gutters are pre-cut pieces joined together on-site, creating a seam every 10–20 feet that is a permanent potential leak point. Seamless gutters are fabricated from a single coil of aluminum on-site — there are no seams in the field runs, only at corners and downspout connections. Seamless gutters have dramatically fewer leaks over their lifespan.',
      },
      {
        q: 'How long does gutter installation take?',
        a: 'Most single-story homes are fully guttered in one day. Two-story homes or homes with complex hip rooflines typically take two days. We do not leave a job incomplete overnight — if we start, we finish the water-tight connection the same day.',
      },
      {
        q: 'What gutter size do you recommend for my home?',
        a: '5-inch gutters handle most single-story homes well. 6-inch gutters are recommended for two-story homes, homes with steeply pitched roofs, or any home in an area with heavy tree coverage. The pitch of your roof is actually more important than most people realize — a steeper roof sends water to the edge faster and requires higher capacity gutters than a low-pitched roof of the same square footage.',
      },
    ],
  },
  {
    slug: 'gutter-guard',
    name: 'Gutter Guard Installation',
    shortDescription:
      'Installation of professional-grade micro-mesh gutter protection that blocks leaves and debris while allowing water to flow freely through your system.',
    painSentence:
      'Without guards, high-debris environments require interior gutter cleaning three to four times per year — micro-mesh guards reduce that to an annual inspection and eliminate debris-caused overflow entirely.',
    process: [
      'Before any guards are installed, we clean and inspect the existing gutters — installing guards over debris-filled or damaged gutters is a waste of money, so we ensure the system is clean and structurally sound first.',
      'We fit micro-mesh guard sections precisely to each gutter run, securing them under the front lip of the shingles and snapping or fastening them to the gutter front to create a weathertight barrier across the full top of the gutter.',
      'We test water flow over the installed guards, check every end cap and miter joint for correct guard coverage, and walk you through the minimal annual maintenance that any guard system still benefits from.',
    ],
    faqs: [
      {
        q: 'What types of gutter guards do you install?',
        a: 'We install micro-mesh gutter guards as our primary recommendation. These stainless-steel mesh covers block debris as fine as pine needles and shingle grit while allowing water to flow freely. We do not install foam inserts, brush inserts, or low-quality plastic screens — these products degrade within 2–3 years and often make the gutter situation worse.',
      },
      {
        q: 'Will gutter guards completely eliminate maintenance?',
        a: 'No product eliminates maintenance entirely. What micro-mesh guards eliminate is interior cleaning — you will never need to scoop debris from inside the gutter again. You may still want an annual inspection to check that debris is not accumulating on top of the mesh and that nothing has shifted the guard out of position.',
      },
      {
        q: 'Can gutter guards be installed on existing gutters?',
        a: 'Yes, in most cases. We assess the existing gutters first. If they are sagging, heavily rusted, or have failing seams, we will recommend addressing those issues before installing guards. Spending money on guards over a failing gutter system just delays the inevitable and traps the underlying problem.',
      },
      {
        q: 'Do gutter guards cause ice dam problems?',
        a: 'Micro-mesh guards do not cause ice dams — ice dams are caused by heat escaping through the roof and melting snow that refreezes at the cold eave. However, in climates with regular freeze events, we select guard profiles that minimize ice bridging and water backup at the drip edge.',
      },
    ],
  },
  {
    slug: 'gutter-inspection',
    name: 'Free Gutter Inspection',
    shortDescription:
      'A no-cost, no-obligation professional inspection of all gutters, downspouts, fascia boards, and drainage paths — with a full written or verbal report.',
    painSentence:
      'Hidden gutter damage — separated seams, cracked downspout elbows, rotted fascia, incorrect pitch — goes undetected until it has already caused costly water intrusion damage to the home.',
    process: [
      'We inspect every linear foot of gutter from a ladder, checking interior debris buildup, seam integrity, hanger spacing and condition, end cap seals, gutter pitch using a level, and any visible rust or corrosion.',
      'We run water through each downspout to confirm unrestricted flow, inspect every elbow and underground connection point we can access, and check splash block positioning and grading at each downspout exit.',
      'We document our findings and give you a clear verbal and written summary — what is in good shape, what needs attention, what is urgent, and what can wait — with no pressure to book any service the same day.',
    ],
    faqs: [
      {
        q: 'What does a free gutter inspection include?',
        a: 'We inspect every linear foot of gutter for sagging, leaks, overflow staining, rust, and debris. We check all downspout connections, test flow, look for signs of water intrusion at the fascia line, and assess gutter pitch throughout. You receive a clear report on everything we find — including items that are fine and do not need work.',
      },
      {
        q: 'How long does a gutter inspection take?',
        a: 'For an average single-story home, approximately 30–45 minutes. Two-story or larger homes can take up to an hour. We take our time. A rushed inspection that misses a problem is no more useful than no inspection at all.',
      },
      {
        q: 'Is the inspection really free with no obligation?',
        a: 'Yes. There is no charge and no obligation to book any service. We provide the inspection as a way to demonstrate our expertise and earn your trust. If your gutters are fine, we will tell you that. Many of our customers have hired us later, on their schedule, because we were honest with them during a free inspection.',
      },
      {
        q: 'What do homeowners most commonly miss in their own self-inspections?',
        a: 'Three things: (1) Downspout underground connections that have separated — there is no visible symptom until your yard floods. (2) End caps that have pulled slightly away from the gutter — not visible from the ground, but a major leak source in rain. (3) Fascia rot behind the gutter — the most expensive miss, because it is only detectable when the gutter is removed.',
      },
    ],
  },
]

// ─── HELPERS ──────────────────────────────────────────────────────────────────

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug)
}

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getAllCombos(): { city: string; service: string }[] {
  return LOCATIONS.flatMap((loc) =>
    SERVICES.map((svc) => ({ city: loc.slug, service: svc.slug }))
  )
}

export function getPrimaryAndSecondaryLocations(): Location[] {
  return LOCATIONS.filter((l) => l.priority === 'primary' || l.priority === 'secondary')
}
