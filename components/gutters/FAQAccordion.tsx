'use client'

import { useState } from 'react'

interface FAQ {
  q: string
  a: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  serviceName?: string
}

export default function FAQAccordion({ faqs, serviceName }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      {/* JSON-LD — renders in document body, valid per Google spec */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div
        className="space-y-2"
        itemScope
        itemType="https://schema.org/FAQPage"
        aria-label={serviceName ? `${serviceName} FAQs` : 'Frequently asked questions'}
      >
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-navy-800 border border-navy-700 rounded-xl overflow-hidden"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-navy-700/50 transition-colors duration-200"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span
                className="font-body font-semibold text-white text-sm sm:text-base leading-snug"
                itemProp="name"
              >
                {faq.q}
              </span>
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center transition-transform duration-300"
                style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                aria-hidden="true"
              >
                <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: openIndex === i ? '600px' : '0px' }}
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p
                className="px-5 pb-5 font-body text-slate text-sm leading-relaxed"
                itemProp="text"
              >
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
