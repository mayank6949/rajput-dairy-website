import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Instagram, Clock, Award, ExternalLink, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/company';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenBrochureModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange, onOpenBrochureModal }) => {
  const whatsappMessage = encodeURIComponent('Hello Rajput Dairy, I would like to order fresh dairy products.');

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white font-poppins pt-16 pb-8 border-t-4 border-[#C9A227]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/rajput-dairy-logo.svg"
                alt="Rajput Dairy Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-white/80 shadow-md bg-[#7B5012]"
              />
              <div>
                <h3 className="font-cinzel font-bold text-xl tracking-wider leading-none text-white">
                  {COMPANY_INFO.name.toUpperCase()}
                </h3>
                <span className="text-[11px] text-[#C9A227] font-semibold tracking-widest uppercase block mt-1">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Crafting pure, unadulterated Desi Ghee, machine-pressed Paneer, Khowa, White Butter, Cream and Fresh Curd in Varanasi since 1984. Built on trust, quality, and traditional craftsmanship.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#F57C00] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
                id="footer-instagram-icon"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#2E7D32] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
                id="footer-whatsapp-icon"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#C9A227] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Google Maps Location"
                id="footer-maps-icon"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel font-bold text-base text-[#C9A227] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {[
                { label: 'Home Page', route: 'home' as PageRoute },
                { label: 'Our Story & Heritage', route: 'about' as PageRoute },
                { label: 'Product Catalogue', route: 'products' as PageRoute },
                { label: 'Manufacturing Process', route: 'manufacturing' as PageRoute },
                { label: 'Photo Gallery', route: 'gallery' as PageRoute },
                { label: 'Customer Reviews', route: 'reviews' as PageRoute },
                { label: 'Bulk B2B Supply', route: 'bulk-orders' as PageRoute },
                { label: 'Dairy Blog & Guides', route: 'blog' as PageRoute },
                { label: 'Careers at Rajput Dairy', route: 'careers' as PageRoute },
                { label: 'FAQ & Help', route: 'faq' as PageRoute },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(item.route)}
                    className="hover:text-[#F57C00] transition-colors inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    <ArrowRight className="w-3 h-3 text-[#C9A227]" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Contact Info */}
          <div className="space-y-3">
            <h4 className="font-cinzel font-bold text-base text-[#C9A227] uppercase tracking-wider">
              Verified Contact
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F57C00] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="leading-relaxed block">
                    {COMPANY_INFO.address}
                  </span>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A227] hover:underline text-[11px] font-semibold inline-flex items-center gap-1"
                    id="footer-maps-link"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F57C00] shrink-0" />
                <div className="flex flex-col gap-0.5">
                  {COMPANY_INFO.phones.map((p, idx) => (
                    <a key={idx} href={`tel:${p.raw}`} className="hover:text-[#F57C00] transition-colors font-semibold">
                      {p.display}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2E7D32] transition-colors font-semibold text-[#2E7D32]"
                >
                  WhatsApp: {COMPANY_INFO.whatsapp.display}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-500 shrink-0" />
                <a
                  href={COMPANY_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors font-medium"
                >
                  Instagram: {COMPANY_INFO.instagram.handle}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Mon – Sun: 9:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Brochure & B2B Callout */}
          <div className="space-y-4">
            <h4 className="font-cinzel font-bold text-base text-[#C9A227] uppercase tracking-wider">
              Corporate & Downloads
            </h4>

            <div className="bg-neutral-800/80 p-4 rounded-[16px] border border-neutral-700 space-y-3">
              <p className="text-xs text-gray-300 leading-relaxed">
                Download our official business brochure for complete product specs, fat parameters, and commercial B2B wholesale pricing.
              </p>

              {onOpenBrochureModal && (
                <button
                  onClick={onOpenBrochureModal}
                  className="w-full bg-[#F57C00] hover:bg-[#e06c00] text-white font-semibold text-xs py-2.5 px-3 rounded-[12px] transition-all flex items-center justify-center gap-2 shadow-sm"
                  id="footer-brochure-modal-btn"
                >
                  <Award className="w-4 h-4" />
                  <span>Get Official Brochure</span>
                </button>
              )}
            </div>

            <div className="pt-1">
              <button
                onClick={() => handleNavClick('bulk-orders')}
                className="w-full border border-[#C9A227] hover:bg-[#C9A227] text-[#C9A227] hover:text-neutral-900 font-semibold text-xs py-2.5 px-3 rounded-[12px] transition-all flex items-center justify-center gap-2"
                id="footer-b2b-btn"
              >
                <span>Request B2B Hotel / Sweet Shop Quote</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 1984 – 2026 Rajput Dairy. All Rights Reserved. Crafted with purity in Varanasi.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('privacy-policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handleNavClick('terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
