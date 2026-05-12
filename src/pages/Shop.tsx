import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Filter } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { useStore } from '../store/useStore';

export default function Shop() {
  const { t } = useTranslation();
  const { language, addToCart } = useStore();
  const [filter, setFilter] = useState<string>('all');
  
  const isRtl = language === 'ar';
  
  const filteredProducts = filter === 'all' 
    ? mockProducts 
    : mockProducts.filter(p => p.category === filter);

  return (
    <div className="bg-cream-100 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-6">
            {t('shop.title')}
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar / Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-28 divide-y divide-primary-900/10">
              <div className="pb-8">
                <h3 className="text-lg font-serif font-bold text-primary-900 mb-6 uppercase tracking-wider flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  {t('shop.filters')}
                </h3>
                <ul className="space-y-4">
                  {[
                    { id: 'all', label: t('shop.all_products') },
                    { id: 'premium', label: t('shop.premium') },
                    { id: 'gift', label: t('shop.gift_boxes') },
                    { id: 'stuffed', label: t('shop.stuffed') }
                  ].map((f) => (
                    <li key={f.id}>
                      <button 
                        onClick={() => setFilter(f.id)}
                        className={`text-sm uppercase tracking-wider transition-colors ${
                          filter === f.id ? 'text-gold-500 font-bold' : 'text-primary-800 hover:text-gold-500'
                        }`}
                      >
                        {f.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={product.id}
                    className="group"
                  >
                    <div className="relative overflow-hidden mb-4 aspect-[4/5] bg-cream-200">
                      <Link to={`/product/${product.id}`}>
                        <img 
                          src={product.image} 
                          alt={isRtl ? product.name_ar : product.name_en} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </Link>
                      <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                          className="w-full bg-primary-900 hover:bg-gold-500 text-white hover:text-primary-900 py-3 text-sm uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          {t('shop.add_to_cart')}
                        </button>
                      </div>
                    </div>
                    <Link to={`/product/${product.id}`} className="block text-center mt-6">
                      <h3 className="text-lg font-serif text-primary-900 mb-2 hover:text-gold-500 transition-colors">
                        {isRtl ? product.name_ar : product.name_en}
                      </h3>
                      <p className="text-primary-800 font-medium">SAR {product.price.toFixed(2)}</p>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
