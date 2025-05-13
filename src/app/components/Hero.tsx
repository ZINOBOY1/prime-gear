'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-20 text-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Insert your animated background component or SVG here */}
      </div>
      
      <motion.h1
        className="text-5xl font-bold mb-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Prime Gear
      </motion.h1>
      <motion.p
        className="text-xl mb-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Quality Gadgets. Unbeatable Deals.
      </motion.p>
      <div className="space-x-4 relative z-10">
        <motion.a
          href="#products"
          className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-500 transition"
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.a>
        <motion.a
          href="#contact"
          className="bg-green-600 px-6 py-3 rounded-full hover:bg-green-500 transition"
          whileHover={{ scale: 1.05 }}
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}
