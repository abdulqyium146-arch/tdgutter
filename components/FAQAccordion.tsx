'use client';

import { useState } from 'react';
import { FAQ } from '@/lib/faqs';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-navy-800 border border-navy-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-navy-700/50 transition-colors duration-200"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className="font-body font-semibold text-white text-base pr-4">
                {faq.question}
              </span>
              <span
                className="text-gold flex-shrink-0 transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                aria-hidden="true"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              style={{
                maxHeight: isOpen ? '500px' : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s ease, opacity 0.3s ease',
              }}
            >
              <div className="px-5 pb-5 border-t border-navy-700">
                <p className="font-body text-slate leading-relaxed pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
