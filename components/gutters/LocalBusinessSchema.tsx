import Script from 'next/script'

interface LocalBusinessSchemaProps {
  city: string
  service?: string
  countyName?: string
}

export default function LocalBusinessSchema({
  city,
  service,
  countyName,
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://tdgutterandwindows.com/#business`,
    name: 'Top Down Gutter & Windows',
    telephone: '(614) 350-5978',
    email: 'TopDown.GutterAndWindow@gmail.com',
    url: 'https://tdgutterandwindows.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1180 E Lassen Ave',
      addressLocality: city,
      addressRegion: 'CA',
      postalCode: '95928',
      addressCountry: 'US',
    },
    areaServed: countyName
      ? [
          { '@type': 'City', name: city, containedInPlace: { '@type': 'State', name: 'California' } },
          { '@type': 'AdministrativeArea', name: countyName },
        ]
      : `${city}, CA`,
    openingHours: 'Mo-Sa 07:00-19:00',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card',
    ...(service && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service} Services`,
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service,
              areaServed: `${city}, CA`,
            },
          },
        ],
      },
    }),
    sameAs: [
      'https://www.facebook.com/p/Top-Down-Gutter-and-Window-Cleaning-Services-61568901527821/',
      'https://www.yelp.com/biz/top-down-gutter-and-windows-chico-4',
    ],
  }

  return (
    <Script
      id={`local-business-schema-${city.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
