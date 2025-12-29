'use client';

import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm transition"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-base font-semibold text-slate-900">{faq.question}</span>
              <span className="ml-4 text-[#262262]">{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-live="polite"
                className="px-6 pb-6 text-base leading-7 text-slate-700"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
