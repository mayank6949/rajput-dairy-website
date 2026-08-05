import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent('Hello Rajput Dairy, I would like to order fresh dairy products.');

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 items-end pointer-events-none">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white text-gray-800 shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:scale-110 active:scale-95 transition-all duration-200"
          aria-label="Scroll to top"
          id="scroll-to-top-btn"
        >
          <ArrowUp className="w-5 h-5 text-gray-700" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phones[0].raw}`}
        className="pointer-events-auto flex items-center gap-2 bg-[#F57C00] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#e06c00] hover:scale-105 active:scale-95 transition-all duration-200 font-poppins font-semibold text-xs sm:text-sm border border-white/20"
        id="floating-call-btn"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Call Us</span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 bg-[#2E7D32] text-white px-4 py-3.5 rounded-full shadow-xl hover:bg-[#256628] hover:scale-105 active:scale-95 transition-all duration-200 font-poppins font-semibold text-xs sm:text-sm border border-white/20"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="font-semibold">Order on WhatsApp</span>
      </a>
    </div>
  );
};
