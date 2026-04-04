// ─────────────────────────────────────────────────────────────────────────────
// lib/gutter-seo-data.ts
// Complete data layer for /locations/[city]/[service] programmatic SEO pages
// ─────────────────────────────────────────────────────────────────────────────

// ── CONSTANTS ────────────────────────────────────────────────────────────────

export const BUSINESS_NAME = 'Top Down Gutter & Windows';
export const BUSINESS_URL = 'https://tdgutterandwindows.com';
export const BUSINESS_PHONE = '+16143505978';
export const BUSINESS_PHONE_DISPLAY = '(614) 350-5978';
export const BUSINESS_EMAIL = 'TopDown.GutterAndWindow@gmail.com';
export const BUSINESS_ADDRESS = '1180 E Lassen Ave, Chico, CA 95928';

// ── TYPES ────────────────────────────────────────────────────────────────────

export interface CityData {
  name: string;
  state: 'CA';
  county: string;
  region: string;
  lat: number;
  lng: number;
  zipCode: string;
  nearbyTowns: string[];
  weatherContext: string;
  treeContext: string;
  tier: 'primary' | 'secondary';
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface GutterServiceData {
  name: string;
  shortName: string;
  slug: string;
  primaryKeyword: string;
  schemaServiceType: string;
  heroSubheading: string;
  /** 40-60 word direct answer for AEO / featured snippet box */
  quickAnswerTemplate: string;
  introTemplate: string;
  localRelevanceTemplate: string;
  pricingNote: string;
  processSteps: ProcessStep[];
  faqs: FAQ[];
  relatedServices: string[];
  benefitPoints: string[];
}

// ── CITIES ───────────────────────────────────────────────────────────────────
// Keyed by URL slug. All 59 cities — 35 primary, 24 secondary.

export const cities: Record<string, CityData> = {

  // ── PRIMARY MARKETS ──────────────────────────────────────────────────────

  'chico': {
    name: 'Chico', state: 'CA', county: 'Butte County', region: 'Sacramento Valley',
    lat: 39.7285, lng: -121.8375, zipCode: '95928',
    nearbyTowns: ['Durham', 'Paradise', 'Oroville', 'Gridley'],
    weatherContext: 'heavy winter rainfall, cottonwood seed seasons, and long dry summers',
    treeContext: 'valley oak, American elm, and cottonwood', tier: 'primary',
  },
  'redding': {
    name: 'Redding', state: 'CA', county: 'Shasta County', region: 'Northern California',
    lat: 40.5865, lng: -122.3917, zipCode: '96001',
    nearbyTowns: ['Anderson', 'Cottonwood', 'Red Bluff', 'Shasta Lake'],
    weatherContext: 'hot dry summers with concentrated winter rainfall and occasional flooding',
    treeContext: 'valley oak, blue oak, and ponderosa pine', tier: 'primary',
  },
  'oroville': {
    name: 'Oroville', state: 'CA', county: 'Butte County', region: 'Sacramento Valley',
    lat: 39.5138, lng: -121.5566, zipCode: '95965',
    nearbyTowns: ['Chico', 'Paradise', 'Gridley', 'Yuba City'],
    weatherContext: 'heavy seasonal rainfall near the Feather River and intense summer heat',
    treeContext: 'valley oak, cottonwood, and grey pine', tier: 'primary',
  },
  'yuba-city': {
    name: 'Yuba City', state: 'CA', county: 'Sutter County', region: 'Sacramento Valley',
    lat: 39.1404, lng: -121.6169, zipCode: '95991',
    nearbyTowns: ['Marysville', 'Live Oak', 'Gridley', 'Chico'],
    weatherContext: 'heavy winter rain, spring flooding risk, and significant cottonwood seed seasons',
    treeContext: 'cottonwood, valley oak, and black walnut', tier: 'primary',
  },
  'marysville': {
    name: 'Marysville', state: 'CA', county: 'Yuba County', region: 'Sacramento Valley',
    lat: 39.1457, lng: -121.5911, zipCode: '95901',
    nearbyTowns: ['Yuba City', 'Linda', 'Olivehurst', 'Gridley'],
    weatherContext: 'heavy winter rain near the Yuba River confluence and seasonal flooding',
    treeContext: 'cottonwood, valley oak, and sycamore', tier: 'primary',
  },
  'red-bluff': {
    name: 'Red Bluff', state: 'CA', county: 'Tehama County', region: 'Northern California',
    lat: 40.1785, lng: -122.2358, zipCode: '96080',
    nearbyTowns: ['Corning', 'Los Molinos', 'Cottonwood', 'Chico'],
    weatherContext: 'hot inland summers and concentrated winter rainfall along the Sacramento River',
    treeContext: 'valley oak, cottonwood, and blue oak', tier: 'primary',
  },
  'orland': {
    name: 'Orland', state: 'CA', county: 'Glenn County', region: 'Sacramento Valley',
    lat: 39.7474, lng: -122.1961, zipCode: '95963',
    nearbyTowns: ['Willows', 'Chico', 'Corning', 'Hamilton City'],
    weatherContext: 'Sacramento Valley winter rain, agricultural dust, and orchard debris seasons',
    treeContext: 'valley oak, almond, and cottonwood', tier: 'primary',
  },
  'paradise': {
    name: 'Paradise', state: 'CA', county: 'Butte County', region: 'Sierra Foothills',
    lat: 39.7596, lng: -121.6219, zipCode: '95969',
    nearbyTowns: ['Chico', 'Magalia', 'Oroville', 'Stirling City'],
    weatherContext: 'heavy foothill rainfall and significant conifer needle shed year-round',
    treeContext: 'ponderosa pine, Douglas fir, and black oak', tier: 'primary',
  },
  'grass-valley': {
    name: 'Grass Valley', state: 'CA', county: 'Nevada County', region: 'Sierra Foothills',
    lat: 39.2190, lng: -121.0608, zipCode: '95945',
    nearbyTowns: ['Nevada City', 'Penn Valley', 'Auburn', 'Colfax'],
    weatherContext: 'foothill rain and early snowmelt with heavy needle and leaf fall all season',
    treeContext: 'ponderosa pine, incense cedar, and black oak', tier: 'primary',
  },
  'novato': {
    name: 'Novato', state: 'CA', county: 'Marin County', region: 'Bay Area',
    lat: 38.1074, lng: -122.5697, zipCode: '94945',
    nearbyTowns: ['San Rafael', 'Petaluma', 'Mill Valley', 'Ignacio'],
    weatherContext: 'coastal fog, year-round moderate rainfall, and eucalyptus leaf shed',
    treeContext: 'eucalyptus, bay laurel, and coast live oak', tier: 'primary',
  },
  'marin': {
    name: 'Marin', state: 'CA', county: 'Marin County', region: 'Bay Area',
    lat: 37.9735, lng: -122.5311, zipCode: '94901',
    nearbyTowns: ['Mill Valley', 'Corte Madera', 'San Rafael', 'Sausalito'],
    weatherContext: 'persistent coastal fog, marine rainfall patterns, and redwood needle accumulation',
    treeContext: 'coast redwood, eucalyptus, and bay laurel', tier: 'primary',
  },
  'san-carlos': {
    name: 'San Carlos', state: 'CA', county: 'San Mateo County', region: 'Bay Area',
    lat: 37.5069, lng: -122.2605, zipCode: '94070',
    nearbyTowns: ['Redwood City', 'Belmont', 'Foster City', 'Burlingame'],
    weatherContext: 'coastal marine layer, steady winter rainfall, and year-round eucalyptus debris',
    treeContext: 'eucalyptus, coast live oak, and Monterey pine', tier: 'primary',
  },
  'pacifica': {
    name: 'Pacifica', state: 'CA', county: 'San Mateo County', region: 'Bay Area',
    lat: 37.6138, lng: -122.4869, zipCode: '94044',
    nearbyTowns: ['Daly City', 'San Bruno', 'Half Moon Bay', 'South San Francisco'],
    weatherContext: 'heavy coastal fog, wind-driven rain, and salt air corrosion',
    treeContext: 'Monterey cypress, eucalyptus, and coastal scrub oak', tier: 'primary',
  },
  'corte-madera': {
    name: 'Corte Madera', state: 'CA', county: 'Marin County', region: 'Bay Area',
    lat: 37.9249, lng: -122.5250, zipCode: '94925',
    nearbyTowns: ['Mill Valley', 'Larkspur', 'San Rafael', 'Tiburon'],
    weatherContext: 'coastal fog, year-round moderate rainfall, and redwood needle accumulation',
    treeContext: 'coast redwood, eucalyptus, and bay laurel', tier: 'primary',
  },
  'alameda': {
    name: 'Alameda', state: 'CA', county: 'Alameda County', region: 'Bay Area',
    lat: 37.7652, lng: -122.2416, zipCode: '94501',
    nearbyTowns: ['Oakland', 'San Leandro', 'Berkeley', 'Emeryville'],
    weatherContext: 'Bay Area marine layer, moderate winter rainfall, and year-round eucalyptus leaf drop',
    treeContext: 'eucalyptus, coast live oak, and Monterey pine', tier: 'primary',
  },
  'hayward': {
    name: 'Hayward', state: 'CA', county: 'Alameda County', region: 'Bay Area',
    lat: 37.6688, lng: -122.0808, zipCode: '94541',
    nearbyTowns: ['San Leandro', 'Union City', 'Fremont', 'Castro Valley'],
    weatherContext: 'East Bay hills rainfall, coastal marine influence, and eucalyptus debris seasons',
    treeContext: 'eucalyptus, valley oak, and blue oak', tier: 'primary',
  },
  'san-bruno': {
    name: 'San Bruno', state: 'CA', county: 'San Mateo County', region: 'Bay Area',
    lat: 37.6305, lng: -122.4111, zipCode: '94066',
    nearbyTowns: ['South San Francisco', 'Millbrae', 'Pacifica', 'Burlingame'],
    weatherContext: 'coastal fog, concentrated winter rainfall, and persistent marine moisture',
    treeContext: 'eucalyptus, Monterey cypress, and Monterey pine', tier: 'primary',
  },
  'half-moon-bay': {
    name: 'Half Moon Bay', state: 'CA', county: 'San Mateo County', region: 'Bay Area',
    lat: 37.4636, lng: -122.4286, zipCode: '94019',
    nearbyTowns: ['Pacifica', 'El Granada', 'La Honda', 'Pescadero'],
    weatherContext: 'heavy coastal fog, wind-driven rain, salt air corrosion, and cypress debris',
    treeContext: 'Monterey cypress, coast live oak, and eucalyptus', tier: 'primary',
  },
  'redwood-city': {
    name: 'Redwood City', state: 'CA', county: 'San Mateo County', region: 'Bay Area',
    lat: 37.4852, lng: -122.2364, zipCode: '94063',
    nearbyTowns: ['San Carlos', 'Menlo Park', 'Atherton', 'East Palo Alto'],
    weatherContext: 'Bay Area winter rain, coastal influence, and mature eucalyptus leaf fall',
    treeContext: 'eucalyptus, coast live oak, and coastal redwood', tier: 'primary',
  },
  'menlo-park': {
    name: 'Menlo Park', state: 'CA', county: 'San Mateo County', region: 'Bay Area',
    lat: 37.4529, lng: -122.1817, zipCode: '94025',
    nearbyTowns: ['Palo Alto', 'Redwood City', 'Atherton', 'East Palo Alto'],
    weatherContext: 'Bay Area winter rainfall, mild coastal climate, and oak leaf debris seasons',
    treeContext: 'coast live oak, eucalyptus, and Monterey pine', tier: 'primary',
  },
  'orinda': {
    name: 'Orinda', state: 'CA', county: 'Contra Costa County', region: 'Bay Area',
    lat: 37.8771, lng: -122.1797, zipCode: '94563',
    nearbyTowns: ['Lafayette', 'Moraga', 'Walnut Creek', 'El Cerrito'],
    weatherContext: 'East Bay hills rainfall and dense oak woodland debris accumulation',
    treeContext: 'valley oak, coast live oak, and eucalyptus', tier: 'primary',
  },
  'los-altos': {
    name: 'Los Altos', state: 'CA', county: 'Santa Clara County', region: 'Bay Area',
    lat: 37.3861, lng: -122.1140, zipCode: '94022',
    nearbyTowns: ['Mountain View', 'Sunnyvale', 'Cupertino', 'Palo Alto'],
    weatherContext: 'South Bay winter rain, mild coastal influence, and oak canopy leaf fall',
    treeContext: 'coast live oak, eucalyptus, and valley oak', tier: 'primary',
  },
  'concord': {
    name: 'Concord', state: 'CA', county: 'Contra Costa County', region: 'Bay Area',
    lat: 37.9780, lng: -122.0311, zipCode: '94520',
    nearbyTowns: ['Walnut Creek', 'Pleasant Hill', 'Martinez', 'Clayton'],
    weatherContext: 'East Bay inland rain, hot dry summers, and valley oak debris seasons',
    treeContext: 'valley oak, eucalyptus, and blue oak', tier: 'primary',
  },
  'vacaville': {
    name: 'Vacaville', state: 'CA', county: 'Solano County', region: 'Sacramento Valley',
    lat: 38.3566, lng: -121.9877, zipCode: '95688',
    nearbyTowns: ['Fairfield', 'Dixon', 'Davis', 'Winters'],
    weatherContext: 'Sacramento Valley winter rain, valley heat, and valley oak debris',
    treeContext: 'valley oak, cottonwood, and blue oak', tier: 'primary',
  },
  'davis': {
    name: 'Davis', state: 'CA', county: 'Yolo County', region: 'Sacramento Valley',
    lat: 38.5449, lng: -121.7405, zipCode: '95616',
    nearbyTowns: ['Woodland', 'Dixon', 'Vacaville', 'West Sacramento'],
    weatherContext: 'Sacramento Valley winter rain and heavy cottonwood seed fluff in spring',
    treeContext: 'cottonwood, valley oak, and black walnut', tier: 'primary',
  },
  'placerville': {
    name: 'Placerville', state: 'CA', county: 'El Dorado County', region: 'Sierra Foothills',
    lat: 38.7296, lng: -120.7985, zipCode: '95667',
    nearbyTowns: ['Cameron Park', 'Shingle Springs', 'El Dorado Hills', 'Georgetown'],
    weatherContext: 'foothill rain, occasional snow, and heavy conifer needle accumulation',
    treeContext: 'ponderosa pine, Douglas fir, and black oak', tier: 'primary',
  },
  'scotts-valley': {
    name: 'Scotts Valley', state: 'CA', county: 'Santa Cruz County', region: 'Central Coast',
    lat: 37.0513, lng: -122.0133, zipCode: '95066',
    nearbyTowns: ['Santa Cruz', 'Felton', 'Boulder Creek', 'Ben Lomond'],
    weatherContext: 'Santa Cruz Mountains winter storms, redwood needle shed, and coastal moisture',
    treeContext: 'coast redwood, Douglas fir, and tanoak', tier: 'primary',
  },
  'santa-cruz': {
    name: 'Santa Cruz', state: 'CA', county: 'Santa Cruz County', region: 'Central Coast',
    lat: 36.9741, lng: -122.0308, zipCode: '95060',
    nearbyTowns: ['Scotts Valley', 'Capitola', 'Soquel', 'Aptos'],
    weatherContext: 'coastal winter rain, persistent marine moisture, and redwood needle fall',
    treeContext: 'coast redwood, eucalyptus, and Monterey pine', tier: 'primary',
  },
  'capitola': {
    name: 'Capitola', state: 'CA', county: 'Santa Cruz County', region: 'Central Coast',
    lat: 36.9752, lng: -121.9543, zipCode: '95010',
    nearbyTowns: ['Santa Cruz', 'Soquel', 'Aptos', 'Watsonville'],
    weatherContext: 'coastal winter rain, salt air corrosion, and cypress leaf and twig debris',
    treeContext: 'Monterey cypress, eucalyptus, and coast live oak', tier: 'primary',
  },
  'gilroy': {
    name: 'Gilroy', state: 'CA', county: 'Santa Clara County', region: 'South Bay',
    lat: 37.0058, lng: -121.5683, zipCode: '95020',
    nearbyTowns: ['Morgan Hill', 'San Martin', 'Hollister', 'Los Banos'],
    weatherContext: 'South Bay winter rainfall, warm inland summers, and valley oak leaf debris',
    treeContext: 'valley oak, eucalyptus, and blue oak', tier: 'primary',
  },
  'martinez': {
    name: 'Martinez', state: 'CA', county: 'Contra Costa County', region: 'Bay Area',
    lat: 37.9535, lng: -122.1341, zipCode: '94553',
    nearbyTowns: ['Concord', 'Pleasant Hill', 'Benicia', 'Hercules'],
    weatherContext: 'Carquinez Strait marine influence, East Bay winter rain, and valley oak debris',
    treeContext: 'valley oak, eucalyptus, and coast live oak', tier: 'primary',
  },
  'granite-bay': {
    name: 'Granite Bay', state: 'CA', county: 'Placer County', region: 'Sierra Foothills',
    lat: 38.7557, lng: -121.1722, zipCode: '95746',
    nearbyTowns: ['Roseville', 'Rocklin', 'Loomis', 'Penryn'],
    weatherContext: 'foothill rainfall, warm dry summers, and significant oak and pine debris',
    treeContext: 'valley oak, ponderosa pine, and blue oak', tier: 'primary',
  },
  'lincoln': {
    name: 'Lincoln', state: 'CA', county: 'Placer County', region: 'Sierra Foothills',
    lat: 38.8916, lng: -121.2933, zipCode: '95648',
    nearbyTowns: ['Rocklin', 'Roseville', 'Wheatland', 'Sheridan'],
    weatherContext: 'foothill rain, warm summer heat, and valley oak leaf fall',
    treeContext: 'valley oak, blue oak, and grey pine', tier: 'primary',
  },
  'galt': {
    name: 'Galt', state: 'CA', county: 'Sacramento County', region: 'Sacramento Valley',
    lat: 38.2538, lng: -121.2994, zipCode: '95632',
    nearbyTowns: ['Elk Grove', 'Lodi', 'Stockton', 'Woodbridge'],
    weatherContext: 'Sacramento Valley winter rain and cottonwood seed seasons near agricultural land',
    treeContext: 'cottonwood, valley oak, and black walnut', tier: 'primary',
  },
  'mountain-house': {
    name: 'Mountain House', state: 'CA', county: 'San Joaquin County', region: 'Central Valley',
    lat: 37.7549, lng: -121.5356, zipCode: '95391',
    nearbyTowns: ['Tracy', 'Lathrop', 'Manteca', 'Stockton'],
    weatherContext: 'Central Valley winter rain and Delta wind-driven debris from cottonwood groves',
    treeContext: 'cottonwood, valley oak, and eucalyptus', tier: 'primary',
  },

  // ── SECONDARY MARKETS ────────────────────────────────────────────────────

  'durham': {
    name: 'Durham', state: 'CA', county: 'Butte County', region: 'Sacramento Valley',
    lat: 39.6455, lng: -121.7985, zipCode: '95938',
    nearbyTowns: ['Chico', 'Orland', 'Gridley', 'Biggs'],
    weatherContext: 'Sacramento Valley winter rain and orchard debris from surrounding almond groves',
    treeContext: 'valley oak, almond, and cottonwood', tier: 'secondary',
  },
  'camptonville': {
    name: 'Camptonville', state: 'CA', county: 'Yuba County', region: 'Sierra Foothills',
    lat: 39.4538, lng: -121.0536, zipCode: '95922',
    nearbyTowns: ['Grass Valley', 'Nevada City', 'Dobbins', 'Marysville'],
    weatherContext: 'heavy Sierra foothill rainfall and dense conifer needle accumulation year-round',
    treeContext: 'ponderosa pine, Douglas fir, and black oak', tier: 'secondary',
  },
  'rackerby': {
    name: 'Rackerby', state: 'CA', county: 'Yuba County', region: 'Sierra Foothills',
    lat: 39.4313, lng: -121.3397, zipCode: '95972',
    nearbyTowns: ['Marysville', 'Dobbins', 'Camptonville', 'Gridley'],
    weatherContext: 'Sierra foothill rain and mixed oak-pine debris on rural properties',
    treeContext: 'ponderosa pine, black oak, and grey pine', tier: 'secondary',
  },
  'olivehurst': {
    name: 'Olivehurst', state: 'CA', county: 'Yuba County', region: 'Sacramento Valley',
    lat: 39.0930, lng: -121.5572, zipCode: '95961',
    nearbyTowns: ['Marysville', 'Linda', 'Yuba City', 'Wheatland'],
    weatherContext: 'Sacramento Valley winter rain near the Feather River and cottonwood debris',
    treeContext: 'cottonwood, valley oak, and sycamore', tier: 'secondary',
  },
  'plumas-lake': {
    name: 'Plumas Lake', state: 'CA', county: 'Yuba County', region: 'Sacramento Valley',
    lat: 39.0602, lng: -121.5361, zipCode: '95961',
    nearbyTowns: ['Marysville', 'Olivehurst', 'Yuba City', 'Wheatland'],
    weatherContext: 'Sacramento Valley winter flooding risk area with heavy cottonwood debris',
    treeContext: 'cottonwood, valley oak, and black walnut', tier: 'secondary',
  },
  'gridley': {
    name: 'Gridley', state: 'CA', county: 'Butte County', region: 'Sacramento Valley',
    lat: 39.3635, lng: -121.6936, zipCode: '95948',
    nearbyTowns: ['Oroville', 'Chico', 'Biggs', 'Yuba City'],
    weatherContext: 'Sacramento Valley rain and rice country moisture with orchard tree debris',
    treeContext: 'valley oak, cottonwood, and orchard trees', tier: 'secondary',
  },
  'colusa': {
    name: 'Colusa', state: 'CA', county: 'Colusa County', region: 'Sacramento Valley',
    lat: 39.2138, lng: -122.0094, zipCode: '95932',
    nearbyTowns: ['Williams', 'Willows', 'Woodland', 'Marysville'],
    weatherContext: 'Sacramento Valley winter rain and rice field humidity with riparian debris',
    treeContext: 'valley oak, cottonwood, and riparian willows', tier: 'secondary',
  },
  'lake-wildwood': {
    name: 'Lake Wildwood', state: 'CA', county: 'Nevada County', region: 'Sierra Foothills',
    lat: 39.2291, lng: -121.1872, zipCode: '95946',
    nearbyTowns: ['Penn Valley', 'Grass Valley', 'Smartsville', 'Dobbins'],
    weatherContext: 'Sierra foothill rain and heavy pine needle accumulation in a lakeside community',
    treeContext: 'ponderosa pine, incense cedar, and black oak', tier: 'secondary',
  },
  'dutch-flat': {
    name: 'Dutch Flat', state: 'CA', county: 'Placer County', region: 'Sierra Nevada',
    lat: 39.2082, lng: -120.8397, zipCode: '95714',
    nearbyTowns: ['Colfax', 'Gold Run', 'Alta', 'Auburn'],
    weatherContext: 'heavy Sierra snowmelt, winter rain, and significant conifer debris year-round',
    treeContext: 'ponderosa pine, white fir, and red fir', tier: 'secondary',
  },
  'graniteville': {
    name: 'Graniteville', state: 'CA', county: 'Nevada County', region: 'Sierra Nevada',
    lat: 39.4299, lng: -120.6397, zipCode: '95975',
    nearbyTowns: ['Nevada City', 'Washington', 'Grass Valley', 'North San Juan'],
    weatherContext: 'high-elevation Sierra rainfall and dense conifer canopy needle shed',
    treeContext: 'red fir, ponderosa pine, and white fir', tier: 'secondary',
  },
  'yankee-jims': {
    name: 'Yankee Jims', state: 'CA', county: 'Placer County', region: 'Sierra Foothills',
    lat: 38.9763, lng: -120.9286, zipCode: '95713',
    nearbyTowns: ['Colfax', 'Auburn', 'Iowa Hill', 'Dutch Flat'],
    weatherContext: 'Sierra foothill rain and mixed conifer-oak debris on canyon properties',
    treeContext: 'ponderosa pine, blue oak, and grey pine', tier: 'secondary',
  },
  'foothill-farms': {
    name: 'Foothill Farms', state: 'CA', county: 'Sacramento County', region: 'Sacramento Valley',
    lat: 38.6971, lng: -121.3394, zipCode: '95842',
    nearbyTowns: ['Citrus Heights', 'Fair Oaks', 'Antelope', 'North Highlands'],
    weatherContext: 'Sacramento Valley winter rain and suburban oak canopy debris',
    treeContext: 'valley oak, cottonwood, and Chinese pistache', tier: 'secondary',
  },
  'gold-river': {
    name: 'Gold River', state: 'CA', county: 'Sacramento County', region: 'Sacramento Valley',
    lat: 38.6271, lng: -121.2736, zipCode: '95670',
    nearbyTowns: ['Rancho Cordova', 'Folsom', 'Fair Oaks', 'Citrus Heights'],
    weatherContext: 'Sacramento Valley winter rain and a mature suburban tree canopy',
    treeContext: 'valley oak, cottonwood, and deodar cedar', tier: 'secondary',
  },
  'rosemont': {
    name: 'Rosemont', state: 'CA', county: 'Sacramento County', region: 'Sacramento Valley',
    lat: 38.5474, lng: -121.3675, zipCode: '95826',
    nearbyTowns: ['Rancho Cordova', 'Fair Oaks', 'Elk Grove', 'Florin'],
    weatherContext: 'Sacramento Valley winter rain and established suburban tree debris',
    treeContext: 'valley oak, cottonwood, and Chinese pistache', tier: 'secondary',
  },
  'healdsburg': {
    name: 'Healdsburg', state: 'CA', county: 'Sonoma County', region: 'Wine Country',
    lat: 38.6102, lng: -122.8691, zipCode: '95448',
    nearbyTowns: ['Windsor', 'Geyserville', 'Cloverdale', 'Santa Rosa'],
    weatherContext: 'Sonoma County wine country rain and coastal fog incursion with oak debris',
    treeContext: 'valley oak, eucalyptus, and coast live oak', tier: 'secondary',
  },
  'ukiah': {
    name: 'Ukiah', state: 'CA', county: 'Mendocino County', region: 'Northern California',
    lat: 39.1502, lng: -123.2078, zipCode: '95482',
    nearbyTowns: ['Willits', 'Lakeport', 'Redwood Valley', 'Hopland'],
    weatherContext: 'heavy Mendocino County inland rainfall and mixed forest debris',
    treeContext: 'valley oak, Douglas fir, and madrone', tier: 'secondary',
  },
  'lafayette': {
    name: 'Lafayette', state: 'CA', county: 'Contra Costa County', region: 'Bay Area',
    lat: 37.8857, lng: -122.1178, zipCode: '94549',
    nearbyTowns: ['Orinda', 'Moraga', 'Walnut Creek', 'Danville'],
    weatherContext: 'East Bay hills rainfall and dense oak woodland debris accumulation',
    treeContext: 'valley oak, coast live oak, and eucalyptus', tier: 'secondary',
  },
  'san-leandro': {
    name: 'San Leandro', state: 'CA', county: 'Alameda County', region: 'Bay Area',
    lat: 37.7249, lng: -122.1561, zipCode: '94577',
    nearbyTowns: ['Hayward', 'Oakland', 'San Lorenzo', 'Castro Valley'],
    weatherContext: 'East Bay marine influence, winter rainfall, and eucalyptus leaf debris',
    treeContext: 'eucalyptus, valley oak, and Monterey pine', tier: 'secondary',
  },
  'san-rafael': {
    name: 'San Rafael', state: 'CA', county: 'Marin County', region: 'Bay Area',
    lat: 37.9735, lng: -122.5311, zipCode: '94901',
    nearbyTowns: ['Novato', 'San Anselmo', 'Corte Madera', 'Mill Valley'],
    weatherContext: 'Marin County coastal fog, winter rain, and bay laurel leaf accumulation',
    treeContext: 'eucalyptus, coast live oak, and bay laurel', tier: 'secondary',
  },
  'corning': {
    name: 'Corning', state: 'CA', county: 'Tehama County', region: 'Sacramento Valley',
    lat: 39.9280, lng: -122.1789, zipCode: '96021',
    nearbyTowns: ['Red Bluff', 'Orland', 'Los Molinos', 'Willows'],
    weatherContext: 'Sacramento Valley winter rain with olive orchard debris and agricultural dust',
    treeContext: 'valley oak, olive, and cottonwood', tier: 'secondary',
  },
  'willows': {
    name: 'Willows', state: 'CA', county: 'Glenn County', region: 'Sacramento Valley',
    lat: 39.5241, lng: -122.1939, zipCode: '95988',
    nearbyTowns: ['Orland', 'Colusa', 'Corning', 'Williams'],
    weatherContext: 'Sacramento Valley winter rain and agricultural fog with orchard debris',
    treeContext: 'valley oak, cottonwood, and orchard trees', tier: 'secondary',
  },
  'anderson': {
    name: 'Anderson', state: 'CA', county: 'Shasta County', region: 'Northern California',
    lat: 40.4496, lng: -122.2980, zipCode: '96007',
    nearbyTowns: ['Redding', 'Cottonwood', 'Red Bluff', 'Shasta Lake'],
    weatherContext: 'Shasta County winter rain and mixed oak-pine debris on foothill properties',
    treeContext: 'valley oak, blue oak, and ponderosa pine', tier: 'secondary',
  },
  'cottonwood': {
    name: 'Cottonwood', state: 'CA', county: 'Tehama County', region: 'Sacramento Valley',
    lat: 40.3882, lng: -122.2705, zipCode: '96022',
    nearbyTowns: ['Red Bluff', 'Anderson', 'Redding', 'Los Molinos'],
    weatherContext: 'Sacramento River Valley winter rain and namesake cottonwood seed and debris',
    treeContext: 'cottonwood, valley oak, and blue oak', tier: 'secondary',
  },
  'los-molinos': {
    name: 'Los Molinos', state: 'CA', county: 'Tehama County', region: 'Sacramento Valley',
    lat: 40.0152, lng: -122.1044, zipCode: '96055',
    nearbyTowns: ['Red Bluff', 'Corning', 'Vina', 'Gerber'],
    weatherContext: 'Sacramento Valley winter rain near the river corridor with riparian tree debris',
    treeContext: 'cottonwood, valley oak, and riparian willows', tier: 'secondary',
  },
};

// ── SERVICES ─────────────────────────────────────────────────────────────────

const servicesData: Record<string, GutterServiceData> = {

  'gutter-cleaning': {
    name: 'Gutter Cleaning',
    shortName: 'Cleaning',
    slug: 'gutter-cleaning',
    primaryKeyword: 'gutter cleaning',
    schemaServiceType: 'Gutter Cleaning Service',
    heroSubheading: 'Full debris removal, downspout flush & written condition report.',
    quickAnswerTemplate: `Professional gutter cleaning in [CITY] removes leaves, [TREES] debris, and downspout blockages before the rainy season. Most [CITY] homes need cleaning twice yearly. Our service includes manual debris removal, a high-pressure downspout flush, and a written condition report confirming clear drainage through every section.`,
    introTemplate: `Clogged gutters are one of the most overlooked maintenance items on a [CITY] home — until the damage becomes impossible to ignore. [CITY] sits in a region known for [WEATHER], and the [TREES] lining local streets and properties shed enough debris each year to completely block gutters before the first serious storm of the season. Gutter cleaning in [CITY] is not optional maintenance — it is the only thing standing between your gutter trough and a backup that forces water behind your fascia boards, under your roofing, and down into your foundation. In [CITY], where [COUNTY] soils can expand and shift when saturated, that water damage compounds fast and repairs cost far more than the cleaning that would have prevented it. Our professional gutter cleaning service removes every leaf, seed pod, and twig — not just the visible surface debris, but the compacted material that accumulates at elbows and downspout bases over years of settling. Every job ends with a complete water-flow test confirming clear drainage through every section, not just a visual check from the ground.`,
    localRelevanceTemplate: `[CITY] has specific debris patterns that make professional cleaning more valuable than a DIY hose-down. [TREES] produce varying types of material — from large leaves that sit on top of gutters to fine seeds and helicopter samaras that work their way into downspout elbows and compact into near-concrete blockages over a single season. Our crews have cleaned thousands of gutters across [COUNTY] and know exactly where debris accumulates on the roof styles most common to the area.`,
    pricingNote: `Gutter cleaning in [CITY] is priced by linear footage of gutters on the home. Most standard single-story [CITY] homes fall in the lower range, while two-story homes or properties under heavy tree coverage cost more due to additional time and safety equipment. We provide exact pricing after a quick measurement — most [COUNTY] homeowners are surprised by how affordable professional cleaning is compared to the repair costs it prevents.`,
    processSteps: [
      {
        step: 1,
        title: 'Free Roofline Inspection',
        description: 'We walk the full perimeter of your home and document every section of gutter and downspout. Debris levels, blockage points, and any visible damage are noted before work begins.',
      },
      {
        step: 2,
        title: 'Manual Debris Removal',
        description: 'All loose material is removed by hand — no blowers that scatter debris onto your roof or into your yard. Every trough section is cleared down to the gutter floor.',
      },
      {
        step: 3,
        title: 'High-Pressure Water Flush',
        description: 'Every section is flushed from the high end toward each downspout outlet, confirming unobstructed flow through every elbow and vertical run. Downspout base blockages are cleared completely.',
      },
      {
        step: 4,
        title: 'Condition Report & Debris Removal',
        description: 'All bagged debris is removed from your property. You receive a written summary noting any sections with damage, improper pitch, or fastener failure that may need repair.',
      },
    ],
    faqs: [
      {
        q: 'How often should I have my gutters cleaned in [CITY]?',
        a: 'Most [CITY] homes with significant tree coverage need gutter cleaning twice per year — once in late fall after leaf drop and once in spring after seed and pollen season. Homes under heavy [TREES] canopy may need cleaning three times annually. An annual inspection will tell you what your specific property needs.',
      },
      {
        q: 'What happens if I skip gutter cleaning in [CITY]?',
        a: 'Skipping gutter cleaning in [CITY] means debris compacts and blocks water flow during the rainy season. Overflowing gutters drive water behind fascia boards, into soffits, and down exterior walls — all of which cause rot, mold, and foundation damage that costs many times more to repair than regular cleaning. [COUNTY] homeowners who skip cleaning typically discover the damage only after significant water intrusion.',
      },
      {
        q: 'Do you clean gutters in winter in [CITY]?',
        a: 'Yes — in fact, pre-winter gutter cleaning in [CITY] is our most-requested service. Cleaning before the rainy season hits is the highest-value timing because clear gutters handle the first major storm without overflow. We schedule winter cleanings throughout [COUNTY] and can usually get on your calendar within a week.',
      },
      {
        q: 'How long does gutter cleaning take for a typical [CITY] home?',
        a: 'Most single-story [CITY] homes take 45 minutes to 90 minutes from arrival to departure, including the water-flow test and debris removal. Two-story homes or heavily treed properties in [COUNTY] typically take two to three hours. We give you an estimated time window when we book.',
      },
    ],
    relatedServices: ['gutter-repair', 'gutter-guard', 'gutter-inspection'],
    benefitPoints: [
      'Removes all debris including compacted downspout blockages',
      'Full water-flow test confirms clear drainage before we leave',
      'Debris bagged and removed from your property',
      'Written condition report included with every cleaning',
    ],
  },

  'gutter-repair': {
    name: 'Gutter Repair',
    shortName: 'Repair',
    slug: 'gutter-repair',
    primaryKeyword: 'gutter repair',
    schemaServiceType: 'Gutter Repair Service',
    heroSubheading: 'Permanent repairs for leaking joints, sagging sections & failed fasteners.',
    quickAnswerTemplate: `Gutter repair in [CITY] fixes sagging sections, leaking joints, and failed fasteners — the most common failures caused by [WEATHER] and accumulated debris weight. Our crew identifies the root cause and makes permanent repairs in a single visit, with all parts stocked on every truck serving [COUNTY].`,
    introTemplate: `Sagging gutters. Water stains on siding. Paint peeling under the roofline. These are the warning signs [CITY] homeowners often walk past every day — until a rotted fascia board or a basement flooding event forces an expensive emergency repair. Gutter failure in [CITY] is rarely sudden. The [WEATHER] typical of this region puts gutters through expansion and contraction cycles year after year, and the weight of accumulated [TREES] debris accelerates the process. By the time a gutter section visibly sags or a joint leaks onto your siding, the wood damage behind it has usually already begun. Our gutter repair service in [CITY] goes deeper than resealing a visible seam — we identify the root cause of each failure and correct it. That means replacing failing spike fasteners with hidden expansion screws, correcting drainage pitch on sections that have shifted out of alignment, and replacing metal that is too far gone for repair. Most gutter repairs across [COUNTY] are completed in a single visit, and we stock all common parts on every truck so we rarely need a second trip.`,
    localRelevanceTemplate: `Homes across [CITY] and [COUNTY] face specific stress factors that accelerate gutter wear. The seasonal cycle of heavy rain followed by long dry periods causes metal to expand and contract repeatedly, loosening fasteners and separating joints year after year. Older homes in established [CITY] neighborhoods often have original gutters with spike-and-ferrule fasteners that have worked loose over decades of seasonal movement — replacing these with proper hidden hangers is one of the most effective repairs we perform.`,
    pricingNote: `Gutter repair pricing in [CITY] depends on the number of failure points and the type of repair required. Resealing a single leaking joint is among the most affordable gutter services available, while multiple sagging sections requiring new hangers and pitch correction will cost more. We provide an itemized written quote before any work begins in [COUNTY] — no surprises on the invoice.`,
    processSteps: [
      {
        step: 1,
        title: 'Damage Assessment',
        description: 'Every section of gutter is inspected for leak points, separation, improper pitch, failed fasteners, and damage to adjacent fascia or soffit. We document each issue before quoting.',
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'Affected sections are cleaned, dried, and cleared of old sealant. Properly prepared surfaces are the difference between a repair that holds for years and one that fails in the next rain.',
      },
      {
        step: 3,
        title: 'Permanent Repair',
        description: 'Failed spike fasteners are replaced with hidden hex-head screws. Separated joints are resealed with professional-grade gutter sealant. Sagging sections are re-pitched to the correct drainage angle.',
      },
      {
        step: 4,
        title: 'Water Test & Sign-Off',
        description: 'Every repaired section is water-tested before we leave. We confirm flow rate through each downspout and walk you through each repair point so you can see the result firsthand.',
      },
    ],
    faqs: [
      {
        q: 'How do I know if my gutters need repair in [CITY]?',
        a: 'The most common signs in [CITY] are water stains on exterior siding below the gutter line, gutters that visibly sag or pull away from the fascia, and water pooling near the foundation after rain. Interior clues include basement moisture or paint peeling on interior walls near the roofline. If you see any of these in [COUNTY], it is worth getting an inspection before the next rain event.',
      },
      {
        q: 'Can you repair gutters same-day in [CITY]?',
        a: 'For most standard repairs — resealing joints, replacing hangers, correcting pitch — yes. Our [CITY] service trucks carry all common repair parts, so we can assess and complete the repair in a single visit without a return trip. Larger repairs or full section replacements may require scheduling a follow-up, but we will tell you upfront.',
      },
      {
        q: 'Is gutter repair worth it compared to full replacement in [CITY]?',
        a: 'For gutters that are structurally sound but have isolated failures — leaking joints, a few loose hangers, one sagging section — repair is almost always the right choice in [CITY]. Full replacement makes sense when the metal is badly oxidized, the gutter profile is undersized for your roof, or there are failures in too many sections to repair economically. We will give you an honest assessment of which option is right for your [COUNTY] home.',
      },
      {
        q: 'What causes gutters to sag or pull away from the fascia in [CITY] homes?',
        a: 'In [CITY], the most common cause is the original spike-and-ferrule fasteners used on homes built before the 1990s working loose from years of weight loading. Debris accumulation from [TREES] adds significant weight, and the [WEATHER] cycle causes the metal to expand and contract repeatedly, accelerating fastener pull-out. The fix is replacing spikes with expansion screws, which grip the rafter tails rather than just the fascia board.',
      },
    ],
    relatedServices: ['gutter-cleaning', 'gutter-installation', 'gutter-inspection'],
    benefitPoints: [
      'Root-cause repairs — not just symptom resealing',
      'All common parts stocked on every service truck',
      'Itemized written quote before any work begins',
      'Most repairs completed same-day in a single visit',
    ],
  },

  'gutter-installation': {
    name: 'Gutter Installation',
    shortName: 'Installation',
    slug: 'gutter-installation',
    primaryKeyword: 'gutter installation',
    schemaServiceType: 'Gutter Installation Service',
    heroSubheading: 'Custom seamless aluminum gutters fabricated on-site to your exact roofline.',
    quickAnswerTemplate: `Seamless aluminum gutter installation in [CITY] means no field joints along the runs — eliminating the most common source of leaks. We fabricate gutters on-site to your exact roofline, install with hidden hangers on 24-inch centers and stainless screws, and size downspouts to your roof's actual drainage area for [COUNTY]'s rainfall volumes.`,
    introTemplate: `Whether you are replacing gutters that have finally reached the end of their service life or fitting a new [CITY] home for the first time, getting the installation right matters more here than most homeowners realize. [CITY] sits in a region with [WEATHER], meaning your gutter system handles a genuine seasonal workload — undersized troughs overflow during peak rain events and poorly pitched sections pool standing water between storms. In [CITY], where [TREES] contribute substantial debris loads, gutter sizing must account not just for rainfall volume but for the organic material that will accumulate between cleanings. We fabricate seamless aluminum gutters on-site to the exact length of your roofline, eliminating the seams that sectional gutters develop leaks at over time. Every installation in [COUNTY] uses hidden hangers on 24-inch centers with stainless steel screws, downspouts sized to your roof's drainage area, and professional sealing at all corners and miters. We back our labor against defects and the aluminum against corrosion — when we install it, you do not have to think about it again.`,
    localRelevanceTemplate: `In [CITY] and across [COUNTY], proper downspout placement is as important as the gutter system itself. Our installation crews evaluate soil grading before placing downspout outlets, directing discharge well away from the foundation. Given the [WEATHER] that [CITY] receives, an undersized or poorly routed system will fail during peak rain events — often at the worst possible time. We never install a system we would not put on our own home.`,
    pricingNote: `Full gutter installation in [CITY] is priced per linear foot of seamless aluminum, with the final cost determined by total roofline length, downspout quantity, and any special corners or obstacles. Most complete [COUNTY] home installations are priced competitively against the long-term cost of repeated repairs on a failing sectional system — and seamless aluminum lasts twenty to thirty years when properly installed.`,
    processSteps: [
      {
        step: 1,
        title: 'Measurement & System Design',
        description: 'We measure the full roofline and calculate rainfall volume, downspout quantity, and outlet sizing based on your roof\'s actual drainage area. Downspout locations are planned to direct water away from the foundation.',
      },
      {
        step: 2,
        title: 'On-Site Fabrication',
        description: 'Seamless aluminum gutter stock is loaded on our fabrication truck and cut to the exact length of your roofline sections. No field seams — only end caps and corners are sealed.',
      },
      {
        step: 3,
        title: 'Installation & Fastening',
        description: 'Gutters are hung using hidden hangers on 24-inch centers with stainless steel screws driven into rafter tails. Every section is set at the correct drainage pitch before the next section is attached.',
      },
      {
        step: 4,
        title: 'Full System Water Test',
        description: 'The completed system is flow-tested from every high point, confirming all sections drain to their designated outlet and that discharge points direct water well away from the foundation.',
      },
    ],
    faqs: [
      {
        q: 'What type of gutters do you install in [CITY]?',
        a: 'We install seamless K-style aluminum gutters in [CITY] — the same profile used on most homes throughout [COUNTY]. Seamless means no field joints along the runs, which eliminates the most common source of leaks in sectional systems. For homes with architectural requirements, we also install half-round profiles. All aluminum is coated with a baked-on finish that resists the UV and moisture typical of [CITY]\'s climate.',
      },
      {
        q: 'How long does gutter installation take in [CITY]?',
        a: 'Most complete gutter installations on standard [CITY] homes are finished in a single day. Larger homes or those with complex rooflines may require two days. We fabricate on-site so there is no waiting for factory-ordered lengths — the crew arrives with a full truck and leaves with a complete installation.',
      },
      {
        q: 'What size gutters do I need for my [CITY] home?',
        a: 'Most [CITY] homes need 5-inch K-style gutters with 2×3-inch downspouts as a minimum, but homes with steep roof pitches, large drainage areas, or exposure to the [WEATHER] typical of [COUNTY] often benefit from 6-inch gutters with 3×4-inch downspouts. We calculate the correct size during the measurement visit — it is based on your specific roof pitch and drainage area, not a one-size recommendation.',
      },
      {
        q: 'Do you offer seamless gutter installation in [CITY]?',
        a: 'Yes — all of our gutter installations in [CITY] use seamless aluminum fabricated on-site. Unlike sectional gutters sold at home improvement stores and assembled with slip joints, seamless gutters have no field seams along the runs. The only sealed points are mitered corners and end caps. For [COUNTY] homeowners dealing with the [WEATHER] of this region, seamless is the only installation we recommend.',
      },
    ],
    relatedServices: ['gutter-repair', 'gutter-guard', 'gutter-cleaning'],
    benefitPoints: [
      'Seamless aluminum fabricated on-site to exact roofline length',
      'Hidden hangers on 24-inch centers, stainless steel screws throughout',
      'Downspout sizing calculated against your actual roof drainage area',
      'Labor warranty included on all installations',
    ],
  },

  'gutter-guard': {
    name: 'Gutter Guard Installation',
    shortName: 'Gutter Guards',
    slug: 'gutter-guard',
    primaryKeyword: 'gutter guard installation',
    schemaServiceType: 'Gutter Guard Installation Service',
    heroSubheading: 'Micro-mesh aluminum guards that cut cleaning frequency to once every 3–5 years.',
    quickAnswerTemplate: `Gutter guard installation in [CITY] fits micro-mesh aluminum panels over existing gutters, blocking [TREES] debris while letting rainwater through freely. The right guard for [CITY]'s climate reduces cleaning frequency from twice yearly to once every three to five years for most [COUNTY] homes — without the failure modes of plastic clip-on covers.`,
    introTemplate: `Tired of getting on a ladder twice a year — or paying for gutter cleaning twice a year — just to deal with the [TREES] around your [CITY] property? Gutter guard installation is the one-time investment that changes the long-term economics of maintaining a home in a heavily treed area. [CITY] properties sit in a region with [WEATHER] and significant seasonal debris from [TREES], making unprotected gutters a recurring maintenance cost and a recurring risk every time leaves and seed pods accumulate and block water flow. The right gutter guard system — sized correctly for your gutter width and chosen based on the specific debris your trees produce — can reduce cleaning frequency from twice a year to once every three to five years for most [COUNTY] homes. We install micro-mesh aluminum guards with stainless steel mesh that pass water through while blocking everything from whole leaves to pine needles to cottonwood seed fluff. Every gutter guard installation in [CITY] begins with a complete cleaning so you are starting with a clear, fully protected system — not trapping debris underneath.`,
    localRelevanceTemplate: `Not all gutter guard systems perform equally well in [CITY]'s specific debris environment. [TREES] produce debris that challenges different guard types in different ways — fine mesh screens can handle seed fluff but may mat under heavy wet leaf paste during intense rainfall. We specify guard type based on the actual trees on your [CITY] property, the roof pitch, and the rainfall intensity typical of [COUNTY], ensuring the system we install performs as advertised rather than creating a new problem.`,
    pricingNote: `Gutter guard installation in [CITY] is priced per linear foot, with cost varying based on guard type and gutter size. Micro-mesh aluminum systems — the most effective for [CITY]'s mixed debris environment — are mid-range in price and pay for themselves in reduced cleaning costs within a few years for most [COUNTY] properties. We provide an exact quote after measuring your gutters and reviewing the tree coverage on your property.`,
    processSteps: [
      {
        step: 1,
        title: 'Assessment & Guard Selection',
        description: 'We evaluate your roof pitch, gutter size, and the specific debris types produced by trees on your property. Guard type is specified based on these factors — not a one-size catalog pick.',
      },
      {
        step: 2,
        title: 'Pre-Installation Cleaning',
        description: 'Every gutter section is cleaned, flushed, and confirmed clear before any guard is installed. Installing guards over accumulated debris defeats the purpose — we never skip this step.',
      },
      {
        step: 3,
        title: 'Guard Fabrication & Installation',
        description: 'Micro-mesh guard panels are cut to fit your gutters and secured with stainless screws or purpose-built clips. No adhesives that fail over time — mechanical fastening throughout.',
      },
      {
        step: 4,
        title: 'Flow Test & Final Inspection',
        description: 'The installed system is water-tested to confirm water passes through the mesh and flows to each downspout without backing up or running over the front edge of the guard.',
      },
    ],
    faqs: [
      {
        q: 'What type of gutter guards work best in [CITY]?',
        a: 'For most [CITY] properties, micro-mesh aluminum guards with stainless steel mesh are the highest-performing option. They handle the range of debris produced by [TREES] — from whole leaves to fine seeds — better than foam inserts, brush guards, or reverse-curve systems. The stainless mesh resists corrosion in the [WEATHER] typical of [COUNTY], and aluminum frames do not warp or degrade over time.',
      },
      {
        q: 'Do gutter guards really work in [CITY]\'s climate?',
        a: 'Quality micro-mesh guards genuinely work in [CITY] — with one important qualifier. No guard system eliminates maintenance entirely. What they do is reduce cleaning frequency from twice a year to once every three to five years for most [COUNTY] homes, and they prevent the complete blockages that cause overflow and water damage. We will not install a system that we do not believe will perform in your specific [CITY] tree and weather environment.',
      },
      {
        q: 'How much does gutter guard installation cost in [CITY]?',
        a: 'Gutter guard installation in [CITY] is priced per linear foot based on guard type and gutter size. The cost is almost always recovered within three to five years when you factor in the gutter cleaning services you no longer need to schedule. We provide an exact written quote for your [COUNTY] property after measuring — contact us for a free estimate.',
      },
      {
        q: 'Will gutter guards completely eliminate gutter cleaning in [CITY]?',
        a: 'Micro-mesh guards dramatically reduce cleaning frequency in [CITY], but most homes in [COUNTY] will still benefit from an inspection and light cleaning every three to five years. Fine debris like shingle granules and seed dust can accumulate on top of the mesh over time and benefit from an occasional rinse. We are honest about this upfront — guards are a major improvement, not a permanent zero-maintenance solution.',
      },
    ],
    relatedServices: ['gutter-cleaning', 'gutter-installation', 'gutter-repair'],
    benefitPoints: [
      'Micro-mesh stainless steel — not plastic clip-on covers',
      'Guard type specified for your specific tree debris',
      'Installed over a fully cleaned gutter — guaranteed clear start',
      'Reduces cleaning frequency to once every 3–5 years for most homes',
    ],
  },

  'gutter-inspection': {
    name: 'Free Gutter Inspection',
    shortName: 'Inspection',
    slug: 'gutter-inspection',
    primaryKeyword: 'free gutter inspection',
    schemaServiceType: 'Home Inspection Service',
    heroSubheading: 'Seven-point gutter assessment with written report — no charge, no obligation.',
    quickAnswerTemplate: `Our free gutter inspection in [CITY] covers seven points: trough pitch, fastener integrity, joint seal condition, downspout flow rate, splash block placement, fascia condition behind each section, and soil grading at discharge points. No service fee, no obligation — just a written report of your system's condition before [COUNTY]'s rainy season begins.`,
    introTemplate: `Most gutter problems in [CITY] do not start as emergencies — they start as small failures that compound quietly above eye level where homeowners never think to look. A section that has shifted out of drainage pitch, a downspout pulling slowly away from the wall, or a joint seal that has cracked after years of seasonal movement can go unnoticed for years while water silently damages fascia boards, soffits, and the foundation below. Our free gutter inspection service in [CITY] gives you a complete picture of your system's condition before a minor issue becomes a costly repair. [CITY] homeowners most commonly book inspections before the rainy season, after a significant storm, or when they first notice water stains on siding or pooling near the foundation — all signs that something in the system has already failed. With the [WEATHER] that [COUNTY] receives each season, catching a failed joint or blocked downspout early can prevent thousands of dollars in water damage. There is no charge for the inspection and no obligation to proceed with any work — just a clear written report of what our technician finds.`,
    localRelevanceTemplate: `During a [CITY] gutter inspection, our technicians evaluate seven specific indicators of system health: trough pitch and alignment, fastener integrity, joint seal condition, downspout flow rate, splash block positioning, fascia condition behind each gutter section, and soil grading at downspout discharge points. This is a complete functional assessment of your full drainage system — not a sales visit — and you receive the written report regardless of whether any work is needed.`,
    pricingNote: `Our gutter inspection in [CITY] is completely free — no service fee, no diagnostic charge, and no obligation to proceed with any work. If we find issues during the inspection, you receive a written estimate for recommended cleaning, repairs, or installation. Many [COUNTY] homeowners schedule an annual inspection as part of their pre-season home maintenance routine and use it to plan any needed work before the rainy season arrives.`,
    processSteps: [
      {
        step: 1,
        title: 'Roofline Walk',
        description: 'Our inspector walks the full perimeter of your home, examining every gutter section for sag, separation, debris accumulation, and fastener integrity. Problem areas are photographed and documented.',
      },
      {
        step: 2,
        title: 'Downspout Audit',
        description: 'Each downspout is tested for flow rate and inspected at the outlet. Underground drains are checked for backflow, and splash blocks are evaluated for proper placement away from the foundation.',
      },
      {
        step: 3,
        title: 'Fascia & Soffit Evaluation',
        description: 'The wood behind and below every gutter section is checked for signs of moisture intrusion — soft spots, discoloration, and paint failure that indicate water has been running behind the gutter.',
      },
      {
        step: 4,
        title: 'Written Report Delivery',
        description: 'You receive a clear, itemized summary of findings — not a sales pitch. If work is needed, we provide a no-obligation estimate. If everything checks out, we tell you that too.',
      },
    ],
    faqs: [
      {
        q: 'What does a free gutter inspection cover in [CITY]?',
        a: 'Our [CITY] inspection covers seven points: gutter pitch and alignment, fastener integrity, joint seal condition, downspout flow rate, splash block placement, fascia condition behind each section, and soil grading at discharge points. We walk the full roofline of your home — this is a functional assessment, not a quick visual from the driveway. You receive a written summary of every finding.',
      },
      {
        q: 'When is the best time to get a gutter inspection in [CITY]?',
        a: 'The highest-value time for a [CITY] gutter inspection is late summer or early fall — before the rainy season begins. This gives you time to complete any recommended repairs or cleaning before the first significant storm. Post-storm inspections are also valuable: [COUNTY] storms can shift gutters, block downspouts, and dislodge hangers that appeared secure before the event.',
      },
      {
        q: 'Do you charge for gutter inspections in [CITY]?',
        a: 'No — our [CITY] gutter inspection is completely free. There is no service call fee, no diagnostic charge, and no minimum spend required after the inspection. We offer free inspections because we want [COUNTY] homeowners to know the true condition of their gutters, and because most people who have an honest inspection done end up booking needed work with us when the time is right.',
      },
      {
        q: 'What happens after the gutter inspection in [CITY]?',
        a: 'After your [CITY] inspection, you receive a written report detailing our findings. If cleaning, repairs, or other work is recommended, we provide a no-obligation itemized estimate. You are under no pressure to book anything. Many [COUNTY] homeowners use the report to prioritize work for the season — addressing critical items like blockages or failing joints first, and scheduling cosmetic or upgrade work later.',
      },
    ],
    relatedServices: ['gutter-cleaning', 'gutter-repair', 'gutter-guard'],
    benefitPoints: [
      'Completely free — no service fee, no obligation',
      'Seven-point functional assessment, not a visual-only look',
      'Written condition report provided regardless of findings',
      'Same-week scheduling available across most service areas',
    ],
  },
};

// ── EXPORTED SLUG ARRAYS ──────────────────────────────────────────────────────

export const ALL_CITY_SLUGS: string[] = Object.keys(cities);
export const ALL_SERVICE_SLUGS: string[] = Object.keys(servicesData);

// ── HELPER FUNCTIONS ──────────────────────────────────────────────────────────

/** Replace all [CITY], [COUNTY], [WEATHER], [TREES], [REGION] tokens */
export function injectCity(template: string, citySlug: string): string {
  const city = getCityData(citySlug);
  return template
    .replace(/\[CITY\]/g, city.name)
    .replace(/\[COUNTY\]/g, city.county)
    .replace(/\[WEATHER\]/g, city.weatherContext)
    .replace(/\[TREES\]/g, city.treeContext)
    .replace(/\[REGION\]/g, city.region);
}

/** Get city display name from slug */
export function getCityName(citySlug: string): string {
  return (
    cities[citySlug]?.name ??
    citySlug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  );
}

/** Get full service data object */
export function getServiceData(serviceSlug: string): GutterServiceData {
  const service = servicesData[serviceSlug];
  if (!service) throw new Error(`Service not found: ${serviceSlug}`);
  return service;
}

/** Get full city data object */
export function getCityData(citySlug: string): CityData {
  const city = cities[citySlug];
  if (!city) throw new Error(`City not found: ${citySlug}`);
  return city;
}

/** Build metaDescription targeting 150-160 characters */
function buildMetaDescription(citySlug: string, serviceSlug: string): string {
  const city = getCityData(citySlug);
  const service = getServiceData(serviceSlug);
  const desc = `Top-rated ${service.name.toLowerCase()} in ${city.name}, ${city.county}, CA. Licensed & insured. Serving ${city.nearbyTowns[0]} and all of ${city.county}. Free estimate — call ${BUSINESS_PHONE_DISPLAY}.`;
  // Trim to 160 chars if needed, preserving full words
  if (desc.length <= 160) return desc;
  const trimmed = desc.slice(0, 157);
  const lastSpace = trimmed.lastIndexOf(' ');
  return trimmed.slice(0, lastSpace) + '...';
}

/** Get merged page data for a city + service combination */
export function getPageData(
  citySlug: string,
  serviceSlug: string
): {
  city: CityData;
  service: GutterServiceData;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  quickAnswer: string;
  intro: string;
  localRelevance: string;
  pricingNote: string;
  faqs: { q: string; a: string }[];
  nearbyTownsCopy: string;
  siblingLinks: { name: string; href: string; description: string }[];
} {
  const city = getCityData(citySlug);
  const service = getServiceData(serviceSlug);
  const inject = (t: string) => injectCity(t, citySlug);

  const h1 = `${service.name} in ${city.name}, CA`;
  const metaTitle = `${service.name} in ${city.name}, CA | ${BUSINESS_NAME}`;
  const metaDescription = buildMetaDescription(citySlug, serviceSlug);
  const canonicalUrl = `${BUSINESS_URL}/locations/${citySlug}/${serviceSlug}`;

  const quickAnswer = inject(service.quickAnswerTemplate);
  const intro = inject(service.introTemplate);
  const localRelevance = inject(service.localRelevanceTemplate);
  const pricingNote = inject(service.pricingNote);
  const faqs = service.faqs.map((faq) => ({
    q: inject(faq.q),
    a: inject(faq.a),
  }));

  const towns = city.nearbyTowns.slice(0, 3);
  const nearbyTownsCopy =
    `In addition to ${city.name}, our team regularly serves homeowners in ` +
    `${towns.slice(0, -1).join(', ')}${towns.length > 1 ? ', and ' : ''}${towns[towns.length - 1]} ` +
    `throughout ${city.county}.`;

  const siblingLinks = service.relatedServices.map((slug) => {
    const sib = getServiceData(slug);
    return {
      name: sib.name,
      href: `/locations/${citySlug}/${slug}`,
      description: sib.heroSubheading,
    };
  });

  return {
    city,
    service,
    h1,
    metaTitle,
    metaDescription,
    canonicalUrl,
    quickAnswer,
    intro,
    localRelevance,
    pricingNote,
    faqs,
    nearbyTownsCopy,
    siblingLinks,
  };
}

/** All city × service combos — used by generateStaticParams and sitemap */
export function getAllCityServiceCombos(): { city: string; service: string }[] {
  const combos: { city: string; service: string }[] = [];
  for (const citySlug of ALL_CITY_SLUGS) {
    for (const serviceSlug of ALL_SERVICE_SLUGS) {
      combos.push({ city: citySlug, service: serviceSlug });
    }
  }
  return combos;
}

/** All 5 gutter services for a given city — for city landing page grids */
export function getServicesForCity(citySlug: string): {
  name: string;
  slug: string;
  href: string;
  description: string;
}[] {
  const city = getCityData(citySlug);
  return ALL_SERVICE_SLUGS.map((slug) => {
    const service = getServiceData(slug);
    return {
      name: `${service.name} in ${city.name}`,
      slug,
      href: `/locations/${citySlug}/${slug}`,
      description: service.heroSubheading,
    };
  });
}

/** All cities for a given service — for service page area grids */
export function getCitiesForService(serviceSlug: string): {
  name: string;
  slug: string;
  href: string;
  tier: 'primary' | 'secondary';
}[] {
  return ALL_CITY_SLUGS.map((slug) => {
    const city = getCityData(slug);
    return {
      name: city.name,
      slug,
      href: `/locations/${slug}/${serviceSlug}`,
      tier: city.tier,
    };
  });
}
