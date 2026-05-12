import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, ArrowLeft, Heart } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { language, addToCart, wishlist, toggleWishlist } = useStore();
  const navigate = useNavigate();
  
  const product = mockProducts.find(p => p.id === id);
  const isRtl = language === 'ar';
  
  if (!product) {
    return <div className="min-h-screen pt-32 text-center text-primary-900 font-serif text-2xl">Product not found</div>;
  }

  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <div className="bg-cream-100 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-primary-800 hover:text-gold-500 transition-colors uppercase tracking-widest text-sm font-semibold"
        >
          {isRtl ? <ArrowLeft className="w-4 h-4 mr-2 rotate-180" /> : <ArrowLeft className="w-4 h-4 mr-2" />}
          Back to Shop
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/5] bg-cream-200 relative overflow-hidden group"
          >
            <img 
              src={product.image} 
              alt={isRtl ? product.name_ar : product.name_en} 
              className="w-full h-full object-cover"
            />
            <button 
              onClick={() => toggleWishlist(product)}
              className="absolute top-4 right-4 rtl:left-4 rtl:right-auto w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-primary-900'}`} />
            </button>
          </motion.div>
          
          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-2">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-6 leading-tight">
              {isRtl ? product.name_ar : product.name_en}
            </h1>
            <p className="text-2xl font-medium text-primary-800 mb-8">
              SAR {product.price.toFixed(2)}
            </p>
            <p className="text-primary-800/80 leading-relaxed mb-10 text-lg">
              {isRtl ? product.description_ar : product.description_en}
            </p>
            
            <div className="border-t border-b border-primary-900/10 py-6 mb-10">
              <div className="flex justify-between mb-4 text-sm text-primary-800">
                <span className="font-semibold uppercase tracking-wider">Availability</span>
                <span className="text-green-600">In Stock</span>
              </div>
              <div className="flex justify-between text-sm text-primary-800">
                <span className="font-semibold uppercase tracking-wider">Origin</span>
                <span>Al-Madinah, Saudi Arabia</span>
              </div>
            </div>
            
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-primary-900 hover:bg-gold-500 text-white hover:text-primary-900 py-5 uppercase tracking-widest text-sm font-bold transition-colors flex items-center justify-center gap-3"
            >
              <ShoppingBag className="w-5 h-5" />
              {t('shop.add_to_cart')}
            </button>
            
            <div className="mt-8 text-center text-sm text-primary-800/60 flex items-center justify-center gap-2">
              <span>Secure Payment</span> • <span>Fast Shipping</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
