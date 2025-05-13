'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative py-16 px-6 text-center max-w-4xl mx-auto bg-white overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-fixed bg-center bg-cover" ></div>
      <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded">
        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Prime Gear
        </motion.h2>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Prime Gear, we specialize in selling high-quality UK-used phones, laptops, gaming consoles, and accessories. Our commitment to quality and affordability makes us the trusted gadget plug in Ikeja Computer Village.
        </motion.p>
      </div>
    </section>
  );
}
