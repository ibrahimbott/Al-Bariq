import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] w-full bg-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Date_palm_plantation_in_southern_Qatar.jpg"
            alt="Farm" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-cream-100">
            Our Heritage
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-900">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl leading-relaxed font-light mb-12"
        >
          Rooted in the golden sands of Al-Madinah, Al-Bariq brings centuries of date-farming tradition to the modern connoisseur. Our story is one of unwavering dedication to quality, sustainability, and the profound cultural heritage of the Arabian Peninsula.
        </motion.p>
        <p className="text-lg text-primary-800/80 leading-relaxed mb-6">
          Every date is handpicked at the perfectly mature stage, ensuring the exact balance of moisture, sweetness, and texture that our patrons have come to expect. We do not just sell dates; we curate an experience of Arabian luxury.
        </p>
      </section>
    </div>
  );
}
