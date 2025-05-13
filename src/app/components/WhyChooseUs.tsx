'use client';

import { motion } from 'framer-motion';

const reasons = [
  'Tested & Trusted Gadgets',
  'Affordable Prices',
  'UK-Used with Warranty',
  'Fast Delivery',
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 text-center">
      <motion.h2
        className="text-3xl font-semibold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Us?
      </motion.h2>
      <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {reasons.map((reason, idx) => (
          <motion.li
            key={idx}
            className="bg-gray-200 p-4 rounded shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {reason}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
