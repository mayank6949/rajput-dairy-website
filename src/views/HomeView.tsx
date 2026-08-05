import React, { useState } from 'react';
import { 
  MessageCircle, Phone, ArrowRight, ShieldCheck, Award, 
  CheckCircle2, Star, ChevronDown, MapPin, Clock, Send, ExternalLink
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { REVIEWS } from '../data/reviews';
import { FAQS } from '../data/faqs';
import { COMPANY_INFO } from '../data/company';
import { Product, PageRoute } from '../types';
import { ProductCard } from '../components/ProductCard';

interface HomeViewProps {
  onRouteChange: (route: PageRoute) => void;
  onSelectProduct: (product: Product) => void;
  onOpenBrochureModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onRouteChange, onSelectProduct }) => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>(FAQS[0]?.id || null);

  // Form State
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const signatureProducts = PRODUCTS.filter(p => p.isSignature);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;

    setFormSubmitted(true);
    const msg = encodeURIComponent(`New Enquiry from Website:\nName: ${formState.name}\nPhone: ${formState.phone}\nMessage: ${formState.message || 'General enquiry'}`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${msg}`, '_blank');
  };

  return (
    <div className="space-y-0 font-poppins">
      
      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-neutral-900 overflow-hidden">
        {/* Background image with cinematic overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src='/images/IMG_8013.PNG'
            alt="Rajput Dairy Pure Products"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Heritage Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-[#C9A227] text-xs font-poppins font-semibold uppercase tracking-widest animate-fade-in">
              <Award className="w-4 h-4 text-[#C9A227]" />
              <span>{COMPANY_INFO.name} • {COMPANY_INFO.tagline}</span>
            </div>

            {/* Hero Headline */}
            <h1 className="font-cinzel font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.1] text-white tracking-wide">
              Pure by Nature.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-amber-200 to-[#F57C00]">
                Trusted for Generations.
              </span>
            </h1>

            {/* Hero Subheading */}
            <p className="text-base sm:text-xl text-gray-200 font-poppins font-normal leading-relaxed max-w-2xl">
              Serving Varanasi since 1984 with pure, unadulterated Desi Ghee, machine-pressed Paneer, Khowa, White Butter, Cream, and Fresh Curd.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${encodeURIComponent('Hello Rajput Dairy, I would like to order fresh dairy products.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#2E7D32] hover:bg-[#256628] text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-[14px] shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                id="hero-whatsapp-cta"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Order on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onRouteChange('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/40 hover:border-white font-semibold text-sm sm:text-base px-7 py-4 rounded-[14px] backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                id="hero-explore-cta"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Hero Trust Badges */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-200 font-poppins">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Serving Since 1984</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>FSSAI Quality Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Freshly Prepared Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>100% Unadulterated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Fast Local Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Trusted Across Varanasi</span>
              </div>
            </div>

          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 animate-bounce flex flex-col items-center gap-1">
          <span className="text-[10px] font-poppins uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* 3. TRUST BAR */}
      <section className="bg-white border-b border-[#ECECEC] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-x-0 sm:divide-x divide-gray-100">
            {[
              { title: '40+ Years Legacy', sub: 'Established 1984' },
              { title: '100% Pure Dairy', sub: 'Zero Adulterants' },
              { title: 'Hygienic Process', sub: 'Stainless Machinery' },
              { title: 'Farm Fresh Milk', sub: 'Village Sourced' },
              { title: 'Daily Fresh Batch', sub: 'Prepared Every Morning' },
              { title: 'Trusted Brand', sub: 'Varanasi Favorite' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 space-y-1">
                <p className="font-cinzel font-bold text-base text-[#222222]">{item.title}</p>
                <p className="text-xs text-[#F57C00] font-medium">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT PREVIEW */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="relative">
              <div className="rounded-[20px] overflow-hidden shadow-xl border border-gray-200 bg-[#7B5012]">
                <img
                  src="/images/IMG_8005.PNG"
                  alt="Rajput Dairy Legacy"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-contain p-6"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[18px] shadow-2xl border border-[#ECECEC] hidden sm:block max-w-xs space-y-1">
                <p className="font-cinzel font-bold text-2xl text-[#C9A227]">1984</p>
                <p className="text-xs text-gray-700 font-semibold">{COMPANY_INFO.tagline}</p>
                <p className="text-[11px] text-gray-500">{COMPANY_INFO.shortAddress}</p>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-poppins font-semibold text-[#F57C00] uppercase tracking-widest">
                  Our Heritage & Mission
                </span>
                <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#222222]">
                  Serving Varanasi Since 1984
                </h2>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Rajput Dairy was established in 1984 with a commitment to providing pure, unadulterated dairy products to families across Varanasi. Built on traditional values, honest measures, and uncompromised quality, our dairy has grown into a trusted household name.
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                From our shop in Nirala Nagar, Shivpuram Colony, Varanasi, we combine time-tested recipes with modern hygienic production to craft fresh Cow & Buffalo Desi Ghee, Paneer, Khowa, Safed Makhan, Fresh Cream, and Curd daily.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onRouteChange('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-[#F57C00] hover:text-[#e06c00] font-semibold text-sm group"
                  id="about-story-btn"
                >
                  <span>Read Our Complete Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SIGNATURE PRODUCTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-poppins font-semibold text-[#C9A227] uppercase tracking-widest">
              Master Craftsmanship
            </span>
            <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#222222]">
              Our Signature Specialties
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Crafted with tradition and prepared with uncompromising quality every single day.
            </p>
            <p className="text-sm sm:text-base text-gray-700">
  Looking for authentic{" "}
  <a
    href="/desi-ghee-varanasi"
    className="text-[#F57C00] font-semibold hover:underline"
  >
    Pure Desi Ghee in Varanasi
  </a>
  ? Explore our traditional Cow Desi Ghee prepared with trusted quality since 1984.
</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 6. COMPLETE PRODUCT COLLECTION (EXACT ORDER 1 to 9) */}
      <section className="py-20 bg-[#FAFAFA] border-t border-[#ECECEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-poppins font-semibold text-[#F57C00] uppercase tracking-widest">
                Official Portfolio
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#222222]">
                Complete Product Line
              </h2>
            </div>

            <button
              onClick={() => {
                onRouteChange('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 border border-[#F57C00] text-[#F57C00] hover:bg-[#F57C00] hover:text-white px-5 py-2.5 rounded-[14px] text-sm font-medium transition-colors"
              id="view-all-products-btn"
            >
              <span>View Product Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Exact order: 1. Cow Desi Ghee, 2. Buffalo Desi Ghee, 3. Fresh Paneer, 4. White Butter, 5. Fresh Cream, 6. Khowa (Mawa), 7. Fresh Curd, 8. Separated Curd, 9. Low Fat Curd */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 7. MANUFACTURING JOURNEY */}
      <section className="py-20 bg-white border-t border-[#ECECEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-poppins font-semibold text-[#C9A227] uppercase tracking-widest">
              Uncompromising Standards
            </span>
            <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#222222]">
              From Trusted Villages to Your Home
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Hygienic processes and food-grade machinery preserving authentic taste and purity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: '01', title: 'Fresh Sourcing', desc: 'Sourced daily from trusted village farmers.' },
              { step: '02', title: 'Quality Testing', desc: 'Rigorous fat testing & purity checks.' },
              { step: '03', title: 'Hygienic Process', desc: 'Pasteurized milk in SS processing units.' },
              { step: '04', title: 'Traditional Craft', desc: 'Gas-fired khowa kettles & pneumatic paneer press.' },
              { step: '05', title: 'Food-Grade Pack', desc: 'Sealed food-grade hygienic containers.' },
              { step: '06', title: 'Fresh Delivery', desc: 'Cold storage & prompt local distribution.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FAFAFA] p-5 rounded-[18px] border border-[#ECECEC] space-y-2 hover:border-[#C9A227] transition-colors text-center sm:text-left">
                <span className="font-cinzel font-bold text-2xl text-[#C9A227]">{item.step}</span>
                <h4 className="font-cinzel font-semibold text-base text-[#222222]">{item.title}</h4>
                <p className="text-xs text-gray-600 font-poppins leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                onRouteChange('manufacturing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-6 py-3 rounded-[14px] shadow-sm transition-all"
              id="learn-manufacturing-btn"
            >
              <span>Learn More About Our Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 8. WHY CHOOSE RAJPUT DAIRY */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-poppins font-semibold text-[#F57C00] uppercase tracking-widest">
              The Purity Promise
            </span>
            <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#222222]">
              Why Families Choose Rajput Dairy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Serving Since 1984', desc: 'Over 40 years of continuous service, serving generations of families in Varanasi.' },
              { title: '100% Pure Dairy Products', desc: 'Zero starch, zero synthetic dyes, and zero artificial preservatives.' },
              { title: 'Traditional Taste & Modern Hygiene', desc: 'Gas-fired khowa machines and paneer presses maintaining authentic flavor.' },
              { title: 'Verified Quality Standards', desc: 'Every batch undergoes fat testing before entering processing.' },
              { title: 'Trusted by Generations', desc: 'Loved by families, hotel chefs, sweet shops, and wedding caterers.' },
              { title: 'Freshly Prepared Every Day', desc: 'Production starts early every morning for fresh daily distribution.' },
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[18px] border border-[#ECECEC] shadow-sm space-y-3 hover:border-[#F57C00]/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-50 text-[#F57C00] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-cinzel font-bold text-lg text-[#222222]">{reason.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. CUSTOMER REVIEWS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-poppins font-semibold text-[#C9A227] uppercase tracking-widest">
                Customer Testimonials
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#222222]">
                Loved Across Varanasi
              </h2>
            </div>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 px-5 py-3 rounded-[16px]">
              <div className="text-right">
                <p className="font-cinzel font-bold text-2xl text-amber-900">4.9 ★</p>
                <p className="text-[11px] text-amber-700 font-poppins">Verified Rating</p>
              </div>
              <div className="h-8 w-[1px] bg-amber-200" />
              <button
                onClick={() => {
                  onRouteChange('reviews');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#F57C00] hover:underline"
              >
                View All Reviews
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((rev) => (
              <div key={rev.id} className="bg-[#FAFAFA] p-6 rounded-[18px] border border-[#ECECEC] space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-[#222222] font-poppins">{rev.author}</p>
                    <p className="text-gray-500">{rev.role || rev.location}</p>
                  </div>
                  <span className="text-[10px] text-gray-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. BULK ORDERS SECTION */}
      <section className="py-16 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-y border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="inline-block bg-[#F57C00] text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                B2B & Commercial Wholesale
              </span>
              <h2 className="font-cinzel font-bold text-2xl sm:text-4xl text-[#222222]">
                Bulk Dairy Orders for Hotels & Sweet Shops
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                We supply fresh Paneer, Desi Ghee, Khowa, White Butter, Cream, and Curd to leading Hotels, Restaurants, Sweet Shops, Caterers, and Event Organizers across Varanasi.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  onRouteChange('bulk-orders');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#F57C00] hover:bg-[#e06c00] text-white font-semibold text-sm px-7 py-3.5 rounded-[14px] shadow-md transition-all"
                id="get-bulk-quote-home-btn"
              >
                Get a Bulk Quote
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${encodeURIComponent('Hello Rajput Dairy, I am inquiring regarding a bulk order for my business.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2E7D32] hover:bg-[#256628] text-white font-semibold text-sm px-7 py-3.5 rounded-[14px] shadow-md transition-all inline-flex items-center gap-2"
                id="bulk-whatsapp-home-btn"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-poppins font-semibold text-[#C9A227] uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#222222]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 5).map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div key={faq.id} className="border border-[#ECECEC] rounded-[16px] overflow-hidden">
                  <button
                    onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 bg-[#FAFAFA] hover:bg-gray-100/80 flex items-center justify-between gap-4 font-poppins font-semibold text-sm sm:text-base text-[#222222]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#F57C00] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white border-t border-[#ECECEC] text-xs sm:text-sm text-gray-700 leading-relaxed font-poppins animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => {
                onRouteChange('faq');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs sm:text-sm font-semibold text-[#F57C00] hover:underline"
            >
              View All Frequently Asked Questions →
            </button>
          </div>

        </div>
      </section>

      {/* 13. CONTACT & MAP SECTION */}
      <section className="py-20 bg-[#FAFAFA] border-t border-[#ECECEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-poppins font-semibold text-[#F57C00] uppercase tracking-widest">
              Visit Our Store
            </span>
            <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#222222]">
              Store Location & Contact
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            {/* Left Contact Details & Form */}
            <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-[#ECECEC] shadow-sm space-y-6">
              <h3 className="font-cinzel font-bold text-xl text-[#222222]">
                Send an Enquiry
              </h3>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-6 rounded-[16px] text-center space-y-2 text-green-800">
                  <CheckCircle2 className="w-8 h-8 text-[#2E7D32] mx-auto" />
                  <p className="font-semibold text-base">Thank You!</p>
                  <p className="text-xs text-gray-600">
                    Your enquiry has been redirected to WhatsApp. Our team will assist you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9807682217"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Message / Requirement
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what dairy products you need..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F57C00] hover:bg-[#e06c00] text-white font-semibold py-3.5 rounded-[14px] shadow-sm transition-all inline-flex items-center justify-center gap-2 text-sm"
                    id="submit-home-enquiry-form"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry on WhatsApp</span>
                  </button>
                </form>
              )}

              <div className="pt-4 border-t border-gray-100 space-y-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#F57C00] shrink-0" />
                  <span>Monday – Sunday: 9:00 AM – 10:00 PM (Open Every Day)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#F57C00] shrink-0" />
                  <div className="flex items-center gap-3">
                    {COMPANY_INFO.phones.map((p, idx) => (
                      <a key={idx} href={`tel:${p.raw}`} className="font-semibold text-gray-900 hover:underline">
                        {p.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Map Embed */}
            <div className="bg-white p-4 rounded-[20px] border border-[#ECECEC] shadow-sm h-full flex flex-col justify-between space-y-4">
              <div className="relative w-full h-[320px] sm:h-[380px] bg-gray-100 rounded-[16px] overflow-hidden border border-gray-200">
                <iframe
                  title="Rajput Dairy Store Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.321898741293!2d82.973400!3d25.328900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzQ0LjAiTiA4MsKwNTgnMjQuMiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-3 rounded-[14px] text-center text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2"
                id="get-directions-map-btn"
              >
                <MapPin className="w-4 h-4 text-[#C9A227]" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
