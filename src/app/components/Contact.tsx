'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/xrbqokjz', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-center">
      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      <motion.p
        className="mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        📍 4, Oshitelu Street, Adjacent GTBank, Computer Village, Ikeja
      </motion.p>

      <motion.div
        className="text-sm mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        📞{' '}
        <a
          href="https://wa.me/2349155004426"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          09155004426 (WhatsApp)
        </a>
        ,{' '}
        <a href="tel:07013138304" className="text-blue-600 hover:underline">
          07013138304 (Call)
        </a>
      </motion.div>

      <motion.div
        className="text-sm mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        📱 Follow us:{' '}
        <a
          href="https://instagram.com/PrimeGearNG"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Instagram
        </a>
        ,{' '}
        <a
          href="https://facebook.com/PrimeGearNG"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Facebook
        </a>
        ,{' '}
        <a
          href="https://twitter.com/PGadgets"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Twitter
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </div>
        {status === 'SUCCESS' && (
          <p className="text-green-600 text-sm text-center">Thanks! Your message was sent.</p>
        )}
        {status === 'ERROR' && (
          <p className="text-red-600 text-sm text-center">Oops! Something went wrong.</p>
        )}
      </motion.form>
    </section>
  );
}
