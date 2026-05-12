import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="bg-cream-100 min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-16 text-center">
          Contact Us
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-serif text-primary-900 mb-8">Get In Touch</h2>
            <p className="text-primary-800 mb-12 leading-relaxed">
              We would love to hear from you. For inquiries about our premium collections, corporate gifting, or wholesale orders, please reach out to us.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-primary-800">
                <div className="w-12 h-12 rounded-full border border-primary-900/20 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider font-semibold text-primary-900">Email</p>
                  <p>info@albariq.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-primary-800">
                <div className="w-12 h-12 rounded-full border border-primary-900/20 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider font-semibold text-primary-900">Phone</p>
                  <p>+966 50 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-primary-800">
                <div className="w-12 h-12 rounded-full border border-primary-900/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider font-semibold text-primary-900">Address</p>
                  <p>King Fahd Road, Riyadh, Saudi Arabia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 shadow-sm rounded-lg border border-primary-900/10">
            <h2 className="text-2xl font-serif text-primary-900 mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-wider font-semibold text-primary-900 mb-2">Name</label>
                <input type="text" className="w-full border-b border-primary-900/20 py-3 focus:outline-none focus:border-gold-500 bg-transparent transition-colors" />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider font-semibold text-primary-900 mb-2">Email</label>
                <input type="email" className="w-full border-b border-primary-900/20 py-3 focus:outline-none focus:border-gold-500 bg-transparent transition-colors" />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider font-semibold text-primary-900 mb-2">Message</label>
                <textarea rows={4} className="w-full border-b border-primary-900/20 py-3 focus:outline-none focus:border-gold-500 bg-transparent transition-colors resize-none"></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-primary-900 hover:bg-gold-500 text-white hover:text-primary-900 py-4 uppercase tracking-widest text-sm font-bold transition-colors mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
