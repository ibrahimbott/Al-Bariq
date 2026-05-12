import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-900 text-cream-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold tracking-widest uppercase text-gold-500">
                Al-Bariq
              </span>
            </Link>
            <p className="text-cream-200/80 max-w-sm mb-6 leading-relaxed">
              {t('footer.about')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-10 h-10 rounded-full border border-cream-100/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all text-cream-100">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream-100/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all text-cream-100">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream-100/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all text-cream-100">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl font-medium mb-6 uppercase tracking-wider text-gold-500">
              {t('footer.links')}
            </h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-cream-200/80 hover:text-white transition-colors">{t('nav.shop')}</Link></li>
              <li><Link to="/about" className="text-cream-200/80 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/blog" className="text-cream-200/80 hover:text-white transition-colors">{t('nav.blog')}</Link></li>
              <li><Link to="/contact" className="text-cream-200/80 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl font-medium mb-6 uppercase tracking-wider text-gold-500">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4 text-cream-200/80">
              <li>Riyadh, Saudi Arabia</li>
              <li>info@albariq.com</li>
              <li>+966 50 123 4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream-100/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cream-200/60">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse text-sm text-cream-200/60">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
