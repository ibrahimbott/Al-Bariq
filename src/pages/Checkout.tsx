import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, ArrowLeft, CreditCard, Package } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Checkout() {
  const { t } = useTranslation();
  const { language, cart } = useStore();
  const navigate = useNavigate();
  const isRtl = language === 'ar';

  const [isProcessing, setIsProcessing] = useState(false);

  // Example inputs purely for layout
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Order placed successfully! (Mock)');
      navigate('/');
    }, 2000);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal; // Assuming free shipping

  if (cart.length === 0) {
    return (
      <div className="bg-cream-100 min-h-[70vh] flex flex-col items-center justify-center p-4">
        <Package className="w-16 h-16 text-primary-900/20 mb-6" />
        <h2 className="text-2xl font-serif text-primary-900 mb-4">{t('cart.empty')}</h2>
        <Link 
          to="/shop" 
          className="bg-primary-900 text-cream-100 px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-gold-500 hover:text-primary-900 transition-colors"
        >
          {t('cart.continue_shopping')}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream-100 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center relative">
          <button 
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex items-center text-primary-800 hover:text-gold-500 transition-colors uppercase tracking-widest text-xs font-semibold"
          >
            {isRtl ? <ArrowLeft className="w-4 h-4 mr-2 rotate-180" /> : <ArrowLeft className="w-4 h-4 mr-2" />}
            {t('checkout.back_to_cart')}
          </button>
          
          <h1 className="text-3xl md:text-5xl font-serif text-primary-900 mb-4">
            {t('checkout.title')}
          </h1>
          <div className="flex items-center justify-center gap-2 text-primary-800/60 text-sm">
            <Lock className="w-4 h-4" />
            <span className="uppercase tracking-widest">{t('checkout.secure_checkout')}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column - Forms */}
          <div className="w-full lg:w-3/5">
            <form onSubmit={handleCheckout} className="space-y-12">
              
              {/* Shipping Details */}
              <section>
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-primary-900/10">
                  <span className="w-8 h-8 rounded-full bg-primary-900 text-gold-500 flex items-center justify-center font-serif text-lg">1</span>
                  <h2 className="text-2xl font-serif text-primary-900">{t('checkout.shipping_details')}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-primary-900">{t('checkout.first_name')}</label>
                    <input required type="text" className="w-full border border-primary-900/20 bg-transparent px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-primary-900">{t('checkout.last_name')}</label>
                    <input required type="text" className="w-full border border-primary-900/20 bg-transparent px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-primary-900">{t('checkout.email')}</label>
                    <input required type="email" className="w-full border border-primary-900/20 bg-transparent px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-primary-900">{t('checkout.address')}</label>
                    <input required type="text" className="w-full border border-primary-900/20 bg-transparent px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-primary-900">{t('checkout.city')}</label>
                    <input required type="text" className="w-full border border-primary-900/20 bg-transparent px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-primary-900">{t('checkout.zip')}</label>
                    <input required type="text" className="w-full border border-primary-900/20 bg-transparent px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-primary-900">{t('checkout.phone')}</label>
                    <input required type="tel" className="w-full border border-primary-900/20 bg-transparent px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section>
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-primary-900/10">
                  <span className="w-8 h-8 rounded-full bg-primary-900 text-gold-500 flex items-center justify-center font-serif text-lg">2</span>
                  <h2 className="text-2xl font-serif text-primary-900">{t('checkout.payment_method')}</h2>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-primary-900/10 space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 text-primary-900">
                      <CreditCard className="w-6 h-6" />
                      <span className="font-semibold uppercase tracking-wider text-sm">Credit Card</span>
                    </div>
                    <div className="flex gap-2">
                      {/* Placeholder icons for cards */}
                      <div className="w-8 h-5 bg-stone-200 rounded-sm"></div>
                      <div className="w-8 h-5 bg-stone-200 rounded-sm"></div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-wider font-semibold text-primary-900">{t('checkout.card_number')}</label>
                      <input required type="text" placeholder="0000 0000 0000 0000" className="w-full border border-primary-900/20 bg-transparent px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors tabular-nums" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs uppercase tracking-wider font-semibold text-primary-900">{t('checkout.expiry')}</label>
                        <input required type="text" placeholder="MM/YY" className="w-full border border-primary-900/20 bg-transparent px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors text-center" />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs uppercase tracking-wider font-semibold text-primary-900">{t('checkout.cvc')}</label>
                        <input required type="text" placeholder="123" className="w-full border border-primary-900/20 bg-transparent px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors text-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mobile Submit Button (shows under form logic) */}
              <div className="block lg:hidden">
                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gold-500 hover:bg-gold-400 text-primary-900 border border-gold-500 py-4 uppercase tracking-widest text-sm font-bold transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isProcessing ? 'Processing...' : t('checkout.place_order')}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full lg:w-2/5">
            <div className="sticky top-28 bg-white p-6 md:p-10 rounded-lg shadow-sm border border-primary-900/10">
              <h3 className="text-xl font-serif text-primary-900 mb-8 uppercase tracking-widest border-b border-primary-900/10 pb-4">
                {t('checkout.order_summary')}
              </h3>

              <div className="space-y-6 max-h-[40vh] overflow-y-auto pr-2 mb-8 custom-scrollbar">
                {cart.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="flex gap-4">
                    <div className="w-16 h-20 bg-cream-200 flex-shrink-0">
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-serif text-primary-900 line-clamp-1 mb-1">
                        {isRtl ? item.name_ar : item.name_en}
                      </h4>
                      <p className="text-xs text-primary-800/60 uppercase tracking-wider mb-2">1 x SAR {item.price}</p>
                      <p className="font-semibold text-sm text-primary-900">SAR {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-primary-900/10 pt-6 space-y-4">
                <div className="flex justify-between text-sm text-primary-800">
                  <span className="uppercase tracking-wider">{t('checkout.subtotal')}</span>
                  <span>SAR {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-primary-800">
                  <span className="uppercase tracking-wider">{t('checkout.shipping')}</span>
                  <span className="text-gold-500 font-semibold">{t('checkout.free')}</span>
                </div>
                <div className="border-t border-primary-900/10 pt-4 flex justify-between items-end mt-4">
                  <span className="uppercase tracking-widest text-sm font-bold text-primary-900">
                    {t('checkout.total')}
                  </span>
                  <span className="text-2xl font-serif font-bold text-primary-900">
                    SAR {total.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-10 hidden lg:block">
                <button 
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="w-full bg-primary-900 hover:bg-gold-500 text-white hover:text-primary-900 py-4 uppercase tracking-widest text-sm font-bold transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <span className="animate-pulse">Processing...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      {t('checkout.place_order')}
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
