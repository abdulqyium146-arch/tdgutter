export interface CityLocation {
  city: string;
  slug: string;
  county: string;
  stateAbbr: string;
  lat: number;
  lng: number;
  pageTitle: string;
  metaDescription: string;
  intro: string;
  environment: string;
  commonIssues: { title: string; description: string }[];
  neighborhoods: string[];
  nearbyCities: string[];
  faqs: { question: string; answer: string }[];
}

export const locations: CityLocation[] = [
  {
    city: 'Chico',
    slug: 'chico',
    county: 'Butte County',
    stateAbbr: 'CA',
    lat: 39.7285,
    lng: -121.8375,
    pageTitle: 'Gutter Cleaning & Exterior Services in Chico, CA | Top Down Gutter & Windows',
    metaDescription: 'Professional gutter cleaning, roof washing, window cleaning & more in Chico, CA. Licensed & insured. Free inspections. Serving the Esplanade, South Chico & all of Butte County. Call (614) 350-5978.',
    intro: "Chico is our home base — we've served thousands of homes across Butte County from the Esplanade to South Chico. Nobody understands the seasonal exterior cleaning demands of this city better than our team.",
    environment: "Chico's urban forest is one of California's largest, with valley oaks, American elms, and cottonwood trees lining nearly every neighborhood. That same canopy that makes Chico beautiful fills gutters to capacity every fall and sends cottonwood seed fluff into downspouts every spring. Add in the city's hard municipal water leaving calcium deposits on windows and solar panels, and Chico homes need consistent professional maintenance to stay ahead of the damage.",
    commonIssues: [
      { title: 'Oak & Elm Leaf Overload', description: "Chico's mature tree canopy deposits heavy leaf loads every fall. Most gutters are completely blocked before the first significant rain of the season." },
      { title: 'Cottonwood Seed Clogs', description: 'Every spring, cottonwood fluff creates a secondary clog in gutters and downspouts. Most homeowners catch the fall problem but miss this spring issue entirely.' },
      { title: 'Hard Water Mineral Deposits', description: "Chico's water supply and landscape irrigation systems leave calcium and magnesium deposits on windows, solar panels, and stucco that are impossible to remove with consumer products." },
    ],
    neighborhoods: ['The Esplanade', 'Bidwell Park Area', 'South Chico', 'Barber Neighborhood'],
    nearbyCities: ['Oroville', 'Orland', 'Paradise'],
    faqs: [
      { question: 'How often should Chico homeowners clean their gutters?', answer: "Twice a year is the minimum for most Chico homes — once in late November or December after the oaks have fully dropped, and once in late spring after cottonwood season. Homes directly under large valley oaks or elms often need a third cleaning in August before the fall season begins. We can assess your specific tree canopy situation during a free inspection and give you a personalized recommendation." },
      { question: 'Do you serve all Chico neighborhoods?', answer: "Yes — we serve all of Chico, including the Esplanade corridor, Bidwell Park area homes, South Chico subdivisions, Barber neighborhood, and everything in between. We're based in Chico, so response times are fast and we know local conditions well. We also serve surrounding communities in Butte County including Oroville, Paradise, and Orland." },
      { question: "What's the most common roof problem on Chico homes?", answer: "Black streaking and green patching on shingles — caused by Gloeocapsa Magma bacteria and moss. Chico's combination of warm days, cool nights, and heavy tree shade creates perfect conditions for biological growth on north-facing roof sections. Our soft-wash treatment eliminates it at the root without damaging your shingles or voiding your roofing warranty." },
      { question: 'Can you clean windows stained by Chico hard water?', answer: "Yes — hard water mineral deposits are one of our specialties. Standard glass cleaner just smears calcium buildup around. We use professional-strength mineral deposit removers followed by a purified deionized water final rinse that leaves glass genuinely clear. Most hard water staining, even years of buildup, responds to our treatment in a single visit." },
    ],
  },
  {
    city: 'Redding',
    slug: 'redding',
    county: 'Shasta County',
    stateAbbr: 'CA',
    lat: 40.5865,
    lng: -122.3917,
    pageTitle: 'Gutter Cleaning & Exterior Services in Redding, CA | Top Down Gutter & Windows',
    metaDescription: 'Professional gutter cleaning, roof washing, window cleaning & more in Redding, CA. Serving Shasta County. Licensed & insured. Free inspections. Call (614) 350-5978.',
    intro: "Redding's extreme climate — among the hottest summers in all of California — creates some of the most demanding exterior maintenance conditions in Northern California. We know what Redding roofs and gutters need to survive.",
    environment: "Redding regularly tops 110°F in summer, and that heat accelerates every form of exterior degradation: shingles cure and crack faster, algae stains bake into surfaces harder, and oxidized paint and stucco become magnets for fine agricultural dust from the surrounding land. The Sacramento River corridor adds humidity that drives moss growth on north-facing roofs year-round. Redding homes need more frequent roof and exterior attention than most homeowners realize.",
    commonIssues: [
      { title: 'Heat-Accelerated Roof Degradation', description: "Redding's 110°F summer temperatures bake shingle granules and darken heat-stressed algae stains into surfaces faster than anywhere else in our service area." },
      { title: 'Sacramento Valley Agricultural Dust', description: 'Surrounding farmland sends fine clay dust onto roofs, solar panels, and windows throughout the dry season — dust-coated solar panels in Redding lose production faster than anywhere else in our region.' },
      { title: 'Oak & Pine Needle Debris', description: "Valley oaks along older Redding streets and ponderosa pines near the foothills create a mix of leaves, needles, and acorn caps that compact into dense gutter clogs." },
    ],
    neighborhoods: ['North Redding', 'South Redding', 'Enterprise', 'Shasta Lake City'],
    nearbyCities: ['Red Bluff', 'Orland', 'Chico'],
    faqs: [
      { question: "Does Redding's extreme heat affect my roof more quickly?", answer: "Yes — significantly. Redding regularly records the highest summer temperatures in California, and that heat accelerates shingle granule loss, makes algae staining harder to remove, and causes sealants around vents and chimneys to crack faster. Soft-wash roof cleaning every 18-24 months is the most cost-effective way to extend roof life in Redding's climate. We'll inspect your roof free of charge and tell you exactly what condition it's in." },
      { question: 'How often should Redding gutters be cleaned?', answer: "Most Redding homes need gutter cleaning twice per year — once in November/December after leaf fall and once in late spring to clear pollen and oak catkin debris. Homes near the foothills with heavy pine coverage may need quarterly cleaning due to year-round needle shedding. We'll assess your specific situation during a free inspection." },
      { question: 'Are your solar panel cleaning services available in Redding?', answer: "Yes — we serve Redding with solar panel cleaning using purified deionized water and soft-bristle tools. Agricultural dust from the Sacramento Valley settles on solar glass year-round, and research shows panels in dusty environments can lose 20-25% of rated output without regular cleaning. Most Redding customers see measurable production improvement after a single cleaning." },
      { question: 'Do you serve Shasta Lake City and Enterprise?', answer: "Yes — we serve all of Redding including North Redding, South Redding, Enterprise, and Shasta Lake City, as well as surrounding communities in Shasta County. We also serve Red Bluff to the south and provide service throughout the I-5 corridor in Northern California." },
    ],
  },
  {
    city: 'Oroville',
    slug: 'oroville',
    county: 'Butte County',
    stateAbbr: 'CA',
    lat: 39.5138,
    lng: -121.5563,
    pageTitle: 'Gutter Cleaning & Exterior Services in Oroville, CA | Top Down Gutter & Windows',
    metaDescription: 'Professional gutter cleaning, roof washing, window cleaning & more in Oroville, CA. Serving all of Butte County. Licensed & insured. Free inspections. Call (614) 350-5978.',
    intro: "Oroville's position at the foot of the Sierra Nevada foothills — with Lake Oroville to the east and the Feather River running through the valley — creates elevated humidity levels that accelerate moss, algae, and mildew growth on local homes more than almost anywhere else in our service area.",
    environment: "The moisture from Lake Oroville and the Feather River creates a microclimate that stays humid long after the rest of the Sacramento Valley dries out in summer. That humidity is a perfect breeding environment for moss on north-facing roofs, mildew on stucco and siding, and biological growth inside gutters. Combined with a mix of valley oaks along the river corridor and foothill pines near Table Mountain, debris loads are heavy year-round.",
    commonIssues: [
      { title: 'Elevated Moss & Algae Growth', description: "Oroville's higher humidity from Lake Oroville and the Feather River accelerates biological growth on roofs and siding compared to drier valley floor communities." },
      { title: 'Mixed Debris Loads', description: "Valley oaks near the river and ponderosa pines on Table Mountain-area properties mean gutters collect a challenging mix of leaves, needles, and acorn caps throughout the year." },
      { title: 'Older Housing Stock', description: "Many Oroville homes date from the 1920s through 1960s — original gutters on these properties are frequently undersized, improperly pitched, or well past their service life." },
    ],
    neighborhoods: ['Table Mountain Area', 'Downtown Oroville', 'Thermalito', 'Southside'],
    nearbyCities: ['Chico', 'Paradise', 'Yuba City'],
    faqs: [
      { question: "Why does my Oroville roof grow moss faster than homes in Chico?", answer: "Oroville's proximity to Lake Oroville and the Feather River creates localized humidity that stays elevated throughout the year. Moss and algae thrive in moisture — your roof genuinely faces more biological growth pressure than a comparable home in drier parts of the valley. We recommend soft-wash roof treatment every 12-18 months for most Oroville properties, compared to every 2 years in drier areas." },
      { question: 'My Oroville home is older — how do I know if I need new gutters or just repairs?', answer: "Age alone doesn't determine whether to repair or replace — condition does. We'll inspect your gutters for free and look at pitch, bracket spacing, seam condition, downspout sizing, and overall material integrity. Many older Oroville homes have original gutters that just need resealing and realignment. Others have systems that can't be saved. We'll give you an honest assessment with no obligation." },
      { question: 'Do you serve Table Mountain and foothill areas of Oroville?', answer: "Yes — we serve all of Oroville including Table Mountain area properties, Thermalito, Southside, and the downtown corridor along the Feather River. We're familiar with the mix of oak-shaded valley properties and pine-heavy foothill homes and have the right equipment for steep-pitch roofs common in the foothills." },
      { question: 'Can you handle the pine needle debris near Lake Oroville?', answer: "Yes — pine needle debris is one of the most common gutter problems we address in the Oroville area. Needles pack tightly and create dense, water-retaining mats that are harder to clear than leaf debris. Our double-wash process removes them completely — dry removal by hand first, then a full-pressure flush to clear fine debris from the channel floor and downspouts." },
    ],
  },
  {
    city: 'Yuba City',
    slug: 'yuba-city',
    county: 'Sutter County',
    stateAbbr: 'CA',
    lat: 39.1404,
    lng: -121.6169,
    pageTitle: 'Gutter Cleaning & Exterior Services in Yuba City, CA | Top Down Gutter & Windows',
    metaDescription: 'Professional gutter cleaning, roof washing, window cleaning & more in Yuba City, CA. Serving Sutter County & Marysville. Licensed & insured. Free inspections. Call (614) 350-5978.',
    intro: "Yuba City sits at the heart of one of California's most productive agricultural regions — and the orchards, dust, and irrigation water that make this area thrive also create unique exterior maintenance challenges for local homeowners.",
    environment: "The Sutter Buttes region's agricultural activity means Yuba City homes deal with orchard dust, heavy pollen from peach and prune orchards, and tule fog that stays damp on surfaces through winter mornings. Landscape irrigation systems leave hard water deposits on windows and stucco that are a constant maintenance issue. The flat valley topography also exposes roofs to more direct UV degradation than shaded foothill properties.",
    commonIssues: [
      { title: 'Agricultural Dust & Orchard Pollen', description: "Peach, prune, and walnut orchards surrounding Yuba City generate heavy pollen deposits in spring and agricultural dust year-round that coat roofs, solar panels, and windows." },
      { title: 'Irrigation Hard Water Deposits', description: "Landscape sprinklers overspray onto windows, stucco, and siding, leaving calcium and mineral deposits from Yuba City's hard water that require professional removal." },
      { title: 'Tule Fog Moisture', description: "Winter tule fog that sits on the valley floor for days at a time keeps surfaces damp, creating ideal conditions for algae and mildew growth on roofs and north-facing siding." },
    ],
    neighborhoods: ['Plumas Lake', 'River Valley', 'East Linda', 'Downtown Yuba City'],
    nearbyCities: ['Oroville', 'Chico', 'Grass Valley'],
    faqs: [
      { question: 'Do you serve Marysville as well as Yuba City?', answer: "Yes — we serve both Yuba City and Marysville, which sit across the Feather River from each other in Sutter and Yuba counties respectively. We also serve surrounding communities including Plumas Lake, Linda, and Olivehurst. Give us a call at (614) 350-5978 or fill out a service request online to confirm coverage for your specific address." },
      { question: 'Can you remove the hard water spots from irrigation overspray on my windows?', answer: "Yes — hard water mineral deposit removal is one of our most requested services in the Yuba City area. Landscape irrigation systems leave calcium and silica deposits on windows that standard glass cleaner doesn't touch. We use professional mineral deposit removers and finish with a purified deionized water rinse that leaves glass genuinely clear." },
      { question: 'How does orchard dust affect my solar panels in Yuba City?', answer: "Agricultural dust from surrounding orchards is one of the biggest solar panel performance killers in the Sacramento Valley. Research shows dust-soiled panels can lose 20-25% of rated production. In Yuba City, we typically recommend cleaning solar panels 2-3 times per year — after spring blossom season, mid-summer, and before winter. We use purified deionized water that leaves no residue." },
      { question: 'How often should Yuba City gutters be cleaned?', answer: "Twice a year is standard for most Yuba City homes — once in late fall and once in spring after pollen season. The flat topography here means gutters drain more slowly than foothill properties, so even partial blockages can cause overflow damage to fascia and foundation. A free inspection will tell you exactly what schedule your home needs." },
    ],
  },
  {
    city: 'Red Bluff',
    slug: 'red-bluff',
    county: 'Tehama County',
    stateAbbr: 'CA',
    lat: 40.1785,
    lng: -122.2358,
    pageTitle: 'Gutter Cleaning & Exterior Services in Red Bluff, CA | Top Down Gutter & Windows',
    metaDescription: 'Professional gutter cleaning, roof washing, window cleaning & more in Red Bluff, CA. Serving Tehama County. Licensed & insured. Free inspections. Call (614) 350-5978.',
    intro: "Red Bluff is one of the hottest cities in the United States — average July highs exceed 100°F — and that extreme heat creates exterior maintenance challenges that most Tehama County homeowners don't fully account for until damage is already done.",
    environment: "Red Bluff's position in the upper Sacramento Valley combines extreme summer heat with agricultural dust from cattle ranches and grain fields, Sacramento River cottonwoods that deposit debris in gutters twice per year, and temperature swings wider than almost anywhere in our service area. Exterior materials — shingles, sealants, paint — age faster here as a result, and proactive maintenance is the only way to stay ahead of premature deterioration.",
    commonIssues: [
      { title: 'Extreme Heat & UV Roof Degradation', description: "Red Bluff's 100°F+ summer temperatures and intense UV exposure accelerate shingle granule loss and oxidize roofing sealants faster than anywhere in Northern California." },
      { title: 'Sacramento River Cottonwood Debris', description: "Cottonwood trees along the Sacramento River drop seed fluff in spring and leaves in fall — two distinct gutter clogging seasons that both require attention." },
      { title: 'Agricultural Dust & Wind', description: "Open rangeland and grain fields surrounding Red Bluff generate persistent dust that coats windows, solar panels, and rooflines throughout the dry season." },
    ],
    neighborhoods: ['Downtown Red Bluff', 'Riverview', 'South Red Bluff', 'Antelope Boulevard Corridor'],
    nearbyCities: ['Redding', 'Orland', 'Chico'],
    faqs: [
      { question: "Does Red Bluff's heat cause more roof damage than other areas?", answer: "Yes — Red Bluff consistently records some of the highest temperatures in California, regularly exceeding 110°F during heat waves. That extreme heat bakes shingle granules, causes asphalt to soften and re-cure in patterns that accelerate cracking, and oxidizes all roofing sealants at a much faster rate than in cooler climates. We recommend a professional roof inspection every year and soft-wash cleaning every 12-18 months for most Red Bluff homes." },
      { question: 'How often should I clean gutters in Red Bluff?', answer: "Twice a year works for most Red Bluff homes — once in late November or December after cottonwood and oak leaf fall, and once in late spring after cottonwood seed season. Homes on the Sacramento River side of town with heavy cottonwood coverage may need a third cleaning in summer." },
      { question: 'Do you serve all areas of Tehama County?', answer: "We primarily serve Red Bluff and the surrounding Tehama County area. For specific coverage at your address, call us at (614) 350-5978 — we're always willing to discuss coverage for locations just outside our standard service area." },
      { question: 'Can you clean windows in Red Bluff coated in dust and mineral deposits?', answer: "Yes — dust from surrounding agricultural land combined with hard water from irrigation creates a two-layer deposit on windows: fine silica dust bonded by calcium from water overspray. We use a professional mineral deposit removal process followed by purified deionized water rinsing that removes both layers and leaves glass genuinely clear." },
    ],
  },
  {
    city: 'Orland',
    slug: 'orland',
    county: 'Glenn County',
    stateAbbr: 'CA',
    lat: 39.7474,
    lng: -122.1936,
    pageTitle: 'Gutter Cleaning & Exterior Services in Orland, CA | Top Down Gutter & Windows',
    metaDescription: 'Professional gutter cleaning, roof washing, window cleaning & more in Orland, CA. Serving Glenn County. Licensed & insured. Free inspections. Call (614) 350-5978.',
    intro: "Orland sits in the middle of Glenn County's thriving agricultural corridor — olive orchards, almond groves, and open rangeland surround the community and create exterior conditions that make regular professional maintenance essential for local homeowners.",
    environment: "Glenn County's agricultural activity generates persistent pollen and dust that settles on every exterior surface year-round. Olive trees produce an exceptionally fine pollen that creates a distinctive film on windows and solar panels during spring bloom. Almond blossoms follow in February and March. Between the dust, pollen, and Orland's hard water, homes here develop window mineral deposits and roof biological growth faster than most residents realize.",
    commonIssues: [
      { title: 'Olive & Almond Orchard Pollen', description: "Orland's agricultural surroundings produce heavy spring pollen from olive and almond orchards that coats windows, solar panels, and roofing with a gritty film that accelerates staining." },
      { title: 'Agricultural Dust Year-Round', description: "Open rangeland and row crops surrounding Orland generate persistent fine dust that settles on gutters, roofs, and windows throughout the dry season — May through October." },
      { title: 'Hard Water Window Deposits', description: "Glenn County's hard water leaves calcium deposits on windows from landscape irrigation that build up year-round and can't be removed with standard cleaning products." },
    ],
    neighborhoods: ['Downtown Orland', 'East Orland', 'West Orland', 'County Road Corridor'],
    nearbyCities: ['Chico', 'Red Bluff', 'Redding'],
    faqs: [
      { question: 'Do you serve rural properties outside Orland city limits?', answer: "Yes — we serve rural Glenn County properties, not just in-city addresses. If you're on a county road outside Orland, call us at (614) 350-5978 with your address and we'll confirm service availability. We regularly work on ranch-style and agricultural properties throughout the area." },
      { question: 'How does olive pollen affect my roof and gutters?', answer: "Olive trees produce an extremely fine pollen that creates a sticky residue on exterior surfaces during spring bloom. On roofs, this residue traps moisture and accelerates moss and algae growth. In gutters, it mixes with other debris to form a paste-like clog. On solar panels and windows, it creates a fine film that standard cleaning doesn't fully remove." },
      { question: 'How often should I clean gutters in Orland?', answer: "For most Orland properties, twice per year is appropriate — once in late fall after leaf drop and once in spring after pollen season. Agricultural properties with olive or almond trees overhead may benefit from a third cleaning after spring bloom. We'll assess your specific situation and give a personalized recommendation at no cost." },
      { question: 'Are you licensed and insured to work in Glenn County?', answer: "Yes — Top Down Gutter & Windows is fully licensed and insured to operate throughout Glenn County, including Orland, Willows, and surrounding agricultural areas. We carry general liability insurance and are happy to provide proof of coverage upon request." },
    ],
  },
  {
    city: 'Paradise',
    slug: 'paradise',
    county: 'Butte County',
    stateAbbr: 'CA',
    lat: 39.7596,
    lng: -121.6219,
    pageTitle: 'Gutter Cleaning & Exterior Services in Paradise, CA | Top Down Gutter & Windows',
    metaDescription: 'Professional gutter cleaning, roof washing, window cleaning & more in Paradise, CA. Serving Butte County foothills. Licensed & insured. Free inspections. Call (614) 350-5978.',
    intro: "Paradise sits at 1,700 feet in the Butte County foothills and is home to one of the densest concentrations of ponderosa pines in Northern California — a beautiful setting that comes with one of the heaviest year-round gutter debris loads in our entire service area.",
    environment: "Ponderosa pine needles shed year-round in Paradise, with peak drops in late summer and fall. Combined with the town's higher annual rainfall (approximately 40 inches per year compared to 26 inches in the valley), gutters here fill faster and moss and algae grow more aggressively than almost anywhere in our service area. Many properties rebuilt after the 2018 Camp Fire are new construction that needs proper installation and ongoing maintenance to protect the rebuild investment.",
    commonIssues: [
      { title: 'Year-Round Pine Needle Accumulation', description: "Ponderosa pine needles shed continuously in Paradise, not just seasonally — gutters here can go from clear to completely blocked in 6-8 weeks during peak dropping periods." },
      { title: 'Elevated Rainfall & Moss Growth', description: "Paradise receives nearly twice the annual rainfall of the valley floor — that moisture feeds aggressive moss and algae growth on roofs and siding, especially on north and east-facing surfaces." },
      { title: 'Post-Camp Fire New Construction', description: "Hundreds of Paradise properties were rebuilt after 2018. New gutters on new homes still need professional maintenance and proper fire-defensible space preparation year-round." },
    ],
    neighborhoods: ['Upper Ridge', 'Lower Ridge', 'Magalia', 'Butte Creek Canyon Area'],
    nearbyCities: ['Chico', 'Oroville'],
    faqs: [
      { question: 'How often do gutters need cleaning in Paradise with all the pine trees?', answer: "Most Paradise homeowners need 3-4 gutter cleanings per year minimum. Ponderosa pine needles shed year-round — not just in fall — and they compact into dense mats that block gutters in weeks. If you have large ponderosas directly overhanging your roofline, quarterly cleaning is appropriate. Gutter guards are also a cost-effective option for Paradise properties — we install micro-mesh systems that block needles while letting water through freely." },
      { question: 'Are clean gutters part of fire-defensible space preparation?', answer: "Yes — absolutely. Gutters filled with dry pine needle debris are a significant ember catch risk during wildfires. During a fire event, embers can travel miles and ignite debris-filled gutters before reaching a home. Cal Fire and most fire-defensible space guidelines recommend keeping gutters clear of all combustible debris, especially during fire season (May through November)." },
      { question: 'Do you install gutters on new construction in Paradise?', answer: "Yes — we install seamless aluminum gutters on new construction throughout Paradise and the surrounding foothills. For Paradise specifically, we pay close attention to downspout sizing and placement given the area's higher rainfall — undersized systems overflow during heavy storms and can damage new foundations." },
      { question: 'Do you serve Magalia and the upper ridge communities?', answer: "Yes — we serve Paradise, Magalia, and surrounding Butte County foothills communities. We have experience working on steep foothill properties and are equipped for the terrain. Call us at (614) 350-5978 to discuss your specific property." },
    ],
  },
  {
    city: 'Grass Valley',
    slug: 'grass-valley',
    county: 'Nevada County',
    stateAbbr: 'CA',
    lat: 39.2191,
    lng: -121.0608,
    pageTitle: 'Gutter Cleaning & Exterior Services in Grass Valley, CA | Top Down Gutter & Windows',
    metaDescription: 'Professional gutter cleaning, roof washing, window cleaning & more in Grass Valley, CA. Serving Nevada County & Nevada City. Licensed & insured. Free inspections. Call (614) 350-5978.',
    intro: "Grass Valley's position at 2,500 feet in the Sierra Nevada foothills brings more annual rainfall, heavier pine and oak debris, and faster moss growth than anywhere else in our service area — making consistent professional exterior maintenance essential for protecting Nevada County homes.",
    environment: "Grass Valley receives 40-50 inches of rainfall per year — nearly double the valley floor — and that moisture drives aggressive biological growth on roofs, siding, and fences. The mix of ponderosa pine, black oak, and Douglas fir sheds debris year-round. Many Grass Valley homes date from the Gold Rush era through the early 1900s, with gutters installed on Victorian and Craftsman homes that deserve careful, experienced maintenance.",
    commonIssues: [
      { title: 'High-Rainfall Moss & Algae', description: "With nearly double the annual rainfall of the valley floor, Grass Valley roofs grow moss and algae faster than anywhere in our service area — north and east-facing sections need attention annually." },
      { title: 'Heavy Mixed Debris from Pine & Oak', description: "Ponderosa pine needles, black oak acorns, and Douglas fir cones create one of the heaviest and most challenging debris mixes we encounter — gutters fill quickly year-round." },
      { title: 'Older Victorian-Era Gutter Systems', description: "Many Grass Valley homes have original or period-appropriate gutter systems on Victorian and Craftsman houses that need careful cleaning and expert repairs to preserve the home's character." },
    ],
    neighborhoods: ['Downtown Grass Valley', 'Alta Sierra', 'Union Hill', 'Nevada City Area'],
    nearbyCities: ['Yuba City', 'Oroville', 'Chico'],
    faqs: [
      { question: 'How often should Grass Valley homes get roof cleaning?', answer: "Annual soft-wash roof cleaning is appropriate for most Grass Valley homes given the area's high rainfall and heavy biological growth pressure. North-facing roof sections in heavily shaded yards may need treatment every 9-12 months. Our soft-wash process is manufacturer-approved and safe for all shingle types, including the older dimensional shingles common on Gold Rush-era homes." },
      { question: 'Can you work on historic Victorian homes in Grass Valley?', answer: "Yes — we have experience working on older homes with original architectural features. We're careful with decorative fascia boards, older gutters, and historic wood siding. Our soft-wash approach is ideal for these properties because it uses low pressure that won't damage original wood or dislodge older construction details." },
      { question: 'Do you also serve Nevada City?', answer: "Yes — we serve both Grass Valley and Nevada City, along with surrounding Nevada County communities including Alta Sierra, Lake of the Pines, and Penn Valley. The entire foothills corridor has similar pine-and-oak debris challenges, and we're fully equipped for the terrain and older housing stock." },
      { question: 'Are gutter guards effective in Grass Valley with this much debris?', answer: "Yes — micro-mesh gutter guards are particularly cost-effective for Grass Valley properties because of the volume and year-round nature of debris. The right guard system can reduce your cleaning frequency from 3-4 times per year down to once annually while providing better protection during heavy Nevada County rainstorms. We install and repair multiple guard systems and will recommend the right one for your specific debris mix." },
    ],
  },
];
