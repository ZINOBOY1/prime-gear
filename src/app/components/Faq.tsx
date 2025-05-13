'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqs = [
    { question: "What is the return policy?", answer: "You can return items within 30 days of purchase." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide." },
    { question: "How can I track my order?", answer: "You'll receive an email with tracking details once shipped." },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
            <button
              className="w-full text-left px-6 py-4 bg-gray-200 font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-gray-50">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
