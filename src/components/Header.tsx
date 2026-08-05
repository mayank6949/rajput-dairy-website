import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Award, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/company';

interface HeaderProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenBrochureModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onRouteChange, onOpenBrochureModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 40);

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Products', route: 'products' },
    { label: 'Manufacturing', route: 'manufacturing' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'Reviews', route: 'reviews' },
    { label: 'Bulk Orders', route: 'bulk-orders' },
    { label: 'Blog', route: 'blog' },
    { label: 'FAQ', route: 'faq' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent('Hello Rajput Dairy, I would like to enquire about fresh dairy products.');

  return (
    <>
      {/* Top scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-[#C9A227] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-[#222222] border-b border-[#ECECEC]'
            : currentRoute === 'home'
            ? 'bg-gradient-to-b from-black/80 via-black/50 to-transparent py-4 text-white'
            : 'bg-white shadow-sm py-3 text-[#222222] border-b border-[#ECECEC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none"
              id="brand-logo-btn"
            >
              {/* Rajput Dairy Official Logo Badge */}
              <img
  src="/images/IMG_8005.PNG"
  alt="Rajput Dairy Official Logo"
  className="w-11 h-11 rounded-full object-cover shadow-md border-2 border-white/90 group-hover:scale-105 transition-transform duration-200 shrink-0 bg-[#7B5012]"
/>
              <div className="flex flex-col">
                <span className="font-cinzel font-extrabold text-lg sm:text-xl tracking-wider leading-none">
                  {COMPANY_INFO.name.toUpperCase()}
                </span>
                <span className={`text-[10px] font-poppins font-medium tracking-widest uppercase mt-1 ${
                  isScrolled || currentRoute !== 'home' ? 'text-[#F57C00]' : 'text-[#C9A227]'
                }`}>
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5" id="desktop-nav-menu">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleNavClick(link.route)}
                    className={`text-xs sm:text-sm font-poppins font-medium transition-colors relative py-1 focus:outline-none ${
                      isActive
                        ? 'text-[#F57C00] font-semibold'
                        : isScrolled || currentRoute !== 'home'
                        ? 'text-gray-700 hover:text-[#F57C00]'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F57C00] rounded-full animate-fade-in" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#2E7D32] hover:bg-[#256628] text-white text-xs font-poppins font-semibold px-3.5 py-2 rounded-[12px] shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                id="header-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="inline-flex items-center gap-1.5 bg-[#F57C00] hover:bg-[#e06c00] text-white text-xs font-poppins font-semibold px-3.5 py-2 rounded-[12px] shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                id="header-call-btn"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl focus:outline-none ${
                  isScrolled || currentRoute !== 'home' ? 'text-gray-800' : 'text-white'
                }`}
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle-btn"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Fullscreen Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] bg-white text-[#222222] z-50 flex flex-col justify-between p-6 overflow-y-auto border-t border-[#ECECEC]">
            <div className="space-y-1.5 py-2">
              <div className="text-[11px] font-poppins font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Navigation Menu
              </div>
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleNavClick(link.route)}
                    className={`w-full flex items-center justify-between text-left py-2.5 px-3.5 rounded-xl font-poppins text-sm transition-colors ${
                      isActive
                        ? 'bg-[#F57C00]/10 text-[#F57C00] font-semibold border-l-4 border-[#F57C00]'
                        : 'text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#F57C00]' : 'text-gray-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              {onOpenBrochureModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrochureModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-[14px] font-poppins font-medium text-xs transition-colors"
                >
                  <Award className="w-4 h-4 text-[#C9A227]" />
                  <span>Download Company Profile</span>
                </button>
              )}

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#2E7D32] text-white py-3 rounded-[12px] font-poppins font-medium text-xs shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phones[0].raw}`}
                  className="flex items-center justify-center gap-2 bg-[#F57C00] text-white py-3 rounded-[12px] font-poppins font-medium text-xs shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
