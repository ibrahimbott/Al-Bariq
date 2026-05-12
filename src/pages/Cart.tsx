import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Cart() {
  const { t } = useTranslation();
  const { language, cart, removeFromCart } = useStore();
  const isRtl = language === 'ar';

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-cream-100 min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-primary-900 mb-12 text-center">
          {t('cart.title')}
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 text-primary-900/20 mx-auto mb-6" />
            <p className="text-xl text-primary-800 mb-8">{t('cart.empty')}</p>
            <Link 
              to="/shop" 
              className="inline-block bg-primary-900 hover:bg-gold-500 text-cream-100 hover:text-primary-900 px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-colors"
            >
              {t('cart.continue_shopping')}
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-6 md:p-10 shadow-sm border border-primary-900/10">
            <div className="space-y-8">
              {cart.map((product) => (
                <div key={product.id} className="flex gap-6 pb-8 border-b border-primary-900/10">
                  <div className="w-24 h-32 flex-shrink-0 bg-cream-200">
                    <img src={product.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-serif text-primary-900">
                        {isRtl ? product.name_ar : product.name_en}
                      </h3>
                      <p className="font-semibold text-primary-900">SAR {product.price.toFixed(2)}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 mt-auto w-max transition-colors"
                    >
                      <Trash2 className="w-4 h-4" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-xl">
                <span className="text-primary-800">{t('cart.total')}:</span>{' '}
                <span className="font-serif font-bold text-primary-900 ml-2">SAR {total.toFixed(2)}</span>
              </div>
              <Link 
                to="/checkout" 
                className="w-full md:w-auto text-center bg-gold-500 hover:bg-primary-900 text-primary-900 hover:text-gold-500 px-10 py-4 uppercase tracking-widest text-sm font-semibold transition-colors"
              >
                {t('cart.checkout')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
