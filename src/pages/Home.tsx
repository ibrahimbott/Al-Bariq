import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Instagram } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { useStore } from '../store/useStore';

export default function Home() {
  const { t } = useTranslation();
  const { language } = useStore();
  
  const isRtl = language === 'ar';
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full bg-primary-900 border-b border-gold-500/20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Date_palm_plantation_in_southern_Qatar.jpg" 
            alt="Dates Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold-500 font-sans tracking-[0.25em] uppercase text-xs md:text-sm mb-6"
          >
            Since 1982
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-cream-100 mb-6 max-w-4xl leading-[1.1]"
          >
            {t('home.hero_title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-cream-200/90 text-lg md:text-xl max-w-2xl mb-10 font-light"
          >
            {t('home.hero_subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/shop" 
              className="bg-gold-500 hover:bg-gold-400 text-primary-900 px-10 py-4 rounded-sm transition-all font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2"
            >
              {t('home.shop_now')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Snippet */}
      <section className="py-24 bg-cream-100 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/monogram.svg" alt="" className="h-12 w-12 mx-auto mb-8 opacity-40" />
            <h2 className="text-3xl md:text-4xl font-serif text-primary-900 mb-6">
              {isRtl ? "تراث من التميز" : "A Heritage of Excellence"}
            </h2>
            <p className="text-lg text-primary-800/80 leading-relaxed font-light">
              {isRtl 
                ? "لأكثر من أربعة عقود، قامت البرق بزراعة أجود أنواع التمور في بساتيننا المغمورة بالشمس. كل تمرة هي شهادة على التزامنا بالجودة، وطبيعية 100%، وخالية من أي إضافات اصطناعية."
                : "For over four decades, Al-Bariq has cultivated the finest dates in our sun-drenched orchards. Each date is a testament to our commitment to absolute quality, 100% natural, and free from any artificial additives."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-primary-900 mb-4">
                {t('home.featured')}
              </h2>
              <div className="h-[2px] w-16 bg-gold-500" />
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-primary-800 hover:text-gold-500 transition-colors uppercase tracking-widest text-sm font-semibold">
              {t('home.view_all')} {isRtl ? <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> : <ChevronRight className="w-4 h-4 ml-1" />}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {mockProducts.slice(0, 3).map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-cream-100/50">
                  <img 
                    src={product.image} 
                    alt={isRtl ? product.name_ar : product.name_en} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-900/0 transition-colors duration-500 group-hover:bg-primary-900/10 pointer-events-none" />
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                    {product.isOrganic && (
                      <span className="bg-primary-900/90 backdrop-blur-sm text-gold-500 text-[10px] uppercase tracking-widest px-3 py-1.5 font-bold">
                        Organic
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-serif text-primary-900 mb-2 group-hover:text-gold-500 transition-colors line-clamp-1">
                  {isRtl ? product.name_ar : product.name_en}
                </h3>
                <p className="text-primary-800/80 font-medium tracking-wide">
                  SAR {product.price.toFixed(2)}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 md:hidden flex justify-center">
            <Link to="/shop" className="flex items-center text-primary-800 hover:text-gold-500 transition-colors uppercase tracking-widest text-sm font-semibold border-b border-primary-800 pb-1">
              {t('home.view_all')} {isRtl ? <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> : <ChevronRight className="w-4 h-4 ml-1" />}
            </Link>
          </div>
        </div>
      </section>

      {/* Process / Why Us */}
      <section className="py-24 md:py-32 bg-primary-900 text-cream-100 overflow-hidden relative">
        <div className="absolute -right-[20%] -top-[20%] w-[60%] h-[140%] opacity-[0.03] pointer-events-none rotate-12">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#D4AF37" d="M43.3,-68.8C55.2,-61.8,63.2,-48.5,70.5,-35.1C77.7,-21.7,84.1,-8.2,83.1,4.9C82.1,18,73.6,30.6,63.9,41C54.2,51.4,43.3,59.6,30.1,68.4C16.9,77.2,1.3,86.6,-13.4,85.1C-28.1,83.6,-41.8,71.2,-54.1,60.2C-66.4,49.2,-77.3,39.6,-82.7,27.1C-88.1,14.6,-88.1,-0.8,-83.4,-14.8C-78.7,-28.9,-69.3,-41.6,-57.2,-48.7C-45,-55.8,-30.1,-57.3,-16.9,-63.9C-3.8,-70.5,7.6,-82.2,21.3,-84C35,-85.8,50.1,-77.7,43.3,-68.8Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-gold-500 mb-8">
                {t('home.why_us')}
              </h2>
              <p className="text-xl text-cream-200/80 font-light mb-12 leading-relaxed max-w-lg">
                {t('home.why_us_desc')}
              </p>
              
              <div className="space-y-10">
                {[
                   { icon: Star, title: t('home.quality_title'), desc: t('home.quality_desc') },
                   { icon: Star, title: t('home.organic_title'), desc: t('home.organic_desc') },
                   { icon: Star, title: t('home.gift_title'), desc: t('home.gift_desc') }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-primary-900 transition-colors duration-300">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2 tracking-wide">{feature.title}</h4>
                      <p className="text-cream-200/60 font-light leading-relaxed max-w-md">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Date_Palm_Orchard_in_Vista_Santa_Rosa%2C_California.jpg" 
                alt="Farming" 
                className="absolute inset-0 w-full h-full object-cover rounded-[100px] rounded-tl-sm md:rounded-[120px] md:rounded-tl-2xl shadow-2xl shadow-black/50"
              />
              <div className="absolute inset-0 rounded-[100px] rounded-tl-sm md:rounded-[120px] md:rounded-tl-2xl border border-gold-500/30 scale-[1.03] transition-transform duration-1000 hover:scale-[1.05] pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram/Social section */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-primary-900 mb-4">
               {isRtl ? "تابعنا على إنستقرام" : "Follow Us"}
            </h2>
            <a href="#" className="inline-flex items-center gap-2 text-gold-500 font-medium uppercase tracking-wider text-sm hover:text-primary-900 transition-colors">
              <Instagram className="w-4 h-4" /> @AlBariqDates
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/9/96/Medjool_dates_as_luxury_item.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/7/7e/Medjool-Date.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/8/8a/Bowl_of_Dates.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/d/d5/DriedDates.JPG"
            ].map((src, i) => (
              <a href="#" key={i} className="group relative aspect-square overflow-hidden bg-cream-200">
                <img src={src} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
